import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import DateHelper from '@/mixins/DateHelper'
import { FormLabelPosition, FormValidateStatus, FormValidateError, FormRule, FormRuleValidator, FormLayout, FormFieldValidateResult } from '../form'
import Groupable from '../../../mixins/Groupable'
import { buildinValidatorMap } from '../validators'

@Component
export default class FormInjector extends mixins(Groupable) {
  @Prop (String) prop!: string

  @Prop (String) labelPosition!: FormLabelPosition

  @Prop (String) labelWidth!: string

  @Prop () showMessage!: boolean

  @Prop () inlineMessage!: boolean

  @Prop () rules!: any

  @Prop(String) validateStatus!: FormValidateStatus

  @Prop(String) message!: string

  @Prop() feedback!: boolean

  @Inject() getModel!: () => any

  @Inject() getLabelPosition!: () => FormLabelPosition

  @Inject() getLabelWidth!: () => string

  @Inject() getLayout!: () => FormLayout

  @Inject() getShowMessage!: () => boolean

  @Inject() getInlineMessage!: () => boolean

  @Inject() getRules!: (prop: string) => any[]

  localValidateStatus: FormValidateStatus = 'unvalid'

  errors: FormValidateError[] = []

  initialValue: any = null

  get model () {
    return this.getModel()
  }

  get actualLabelPosition (): FormLabelPosition {
    return this.labelPosition || this.getLabelPosition()
  }

  get actualLabelWidth (): string {
    return this.labelWidth || this.getLabelWidth()
  }

  get layout (): FormLayout {
    return this.getLayout()
  }

  get actualShowMessage (): boolean {
    return this.showMessage !== undefined ? this.showMessage : this.getShowMessage()
  }

  get actualInlineMessage (): boolean {
    return this.inlineMessage !== undefined ? this.inlineMessage : this.getInlineMessage()
  }

  get actualRules (): FormRule[] {
    return (this.rules ? (Array.isArray(this.rules) ? this.rules : [this.rules]) : this.getRules(this.prop)) as FormRule[]
  }

  get actualMessage (): string {
    return this.message || (this.errors[0] && this.errors[0].message) || 
      (this.actualValidateStatus === 'validating' && this.validatingMessage || '')
  }

  get actualValidateStatus (): FormValidateStatus {
    return this.validateStatus || this.localValidateStatus
  }

  get value () {
    return this.model[this.prop]
  }

  set value (value: any) {
    this.model[this.prop] = value
  }

  get validatingMessage (): string {
    return 'validating...'
  }

  async validate (trigger?: 'change' | 'blur'): Promise<FormFieldValidateResult> {
    this.validating()
    let result: FormFieldValidateResult = {
      valid: false,
      prop: this.prop,
      errors: []
    }
    let filterRules = this.actualRules
    if (trigger) {
      filterRules = this.actualRules.filter(v => (v.trigger || 'change') === trigger)
    }
    if (filterRules.length < 1) {
      result.valid = true
      this.clearValidate()
      return Promise.resolve(result)
    }
    let all = filterRules.map(v => {
      let rule = Object.assign({ prop: this.prop }, v)
      return this.normalizeValidatorResult(this.resolveValidator(v.validator)(rule, this.value))
    })
    const errors = await Promise.all(all);
    result.errors = (errors.filter(v => !!v) as FormValidateError[])
    if (result.errors.length < 1) result.valid = true
    this.setValidate(result)
    return Promise.resolve(result)
  }

  clearValidate () {
    this.localValidateStatus = 'unvalid'
    this.errors = []
  }

  resetField () {
    this.value = this.initialValue
    this.clearValidate()
  }

  resolveValidator (validator: string | FormRuleValidator): FormRuleValidator {
    if (typeof validator === 'string') {
      return buildinValidatorMap.get(validator) || (() => Promise.resolve())
    }
    return validator as FormRuleValidator // TODO
  }

  // convert error to FormValidateError, success to null
  normalizeValidatorResult(ret: Promise<any>): Promise<FormValidateError | null> {
    return ret.then(() => {
      return Promise.resolve(null)
    }).catch((err: Error) => {
      return Promise.resolve({
        prop: this.prop,
        message: err && err.message
      })
    })
  }

  setValidate (ret: FormFieldValidateResult) {
    if (ret.valid) this.localValidateStatus = 'valid'
    else this.localValidateStatus = 'invalid'
    this.errors = ret.errors
  }

  validating () {
    this.localValidateStatus = 'validating'
    this.errors = []
  }

  mounted () {
    if (Array.isArray(this.value)) {
      this.initialValue = [...this.value]
    } else {
      this.initialValue = this.value
    }
  }
}
