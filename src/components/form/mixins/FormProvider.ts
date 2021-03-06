import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Group from '../../../mixins/Group'
import FormInjector from './FormInjector'
import { FormLayout, FormLabelPosition, FormValidateResult } from '../type'

@Component
export default class FormProvider extends Vue {
  @Prop() model!: any

  @Prop({type: String, default: 'right'}) labelPosition!: FormLabelPosition

  @Prop(String) labelWidth!: string

  @Prop({ type: String, default: 'vertical'}) layout!: FormLayout

  @Prop({type: Boolean, default: true}) showMessage!: boolean

  @Prop({type: Boolean, default: false}) inlineMessage!: boolean

  @Prop() rules!: Record<string, any>

  items: FormInjector[] = []

  @Provide() addFormItem (item: FormInjector) {
    let has = this.items.some(v => v === item)
    if (!has) this.items.push(item)
  }

  @Provide() removeFormItem (item: FormInjector) {
    let idx = this.items.findIndex(v => v === item)
    if (idx >= 0) this.items.splice(idx, 1)
  }

  @Provide() getModel () {
    return this.model
  }

  @Provide() getLabelPosition () {
    return this.labelPosition
  }

  @Provide() getLabelWidth () {
    return this.labelWidth
  }

  @Provide() getLayout () {
    return this.layout
  }

  @Provide() getShowMessage () {
    return this.showMessage
  }

  @Provide() getInlineMessage () {
    return this.inlineMessage
  }

  @Provide() getRules (prop: string): any[] {
    if (!this.rules) return []
    let rules = this.rules[prop]
    if (!rules) return []
    if (Array.isArray(rules)) return rules
    return [rules]
  }

  get fields (): FormInjector[] {
    return this.items as FormInjector[]
  }

  async validate (): Promise<FormValidateResult> {
    let all = this.fields.map(v => {
      return v.validate()
    })
    const data = await Promise.all(all)
    let ret: FormValidateResult = {
      valid: true,
      errors: {}
    }
    data.forEach(v => {
      if (!v.valid) {
        ret.valid = false
        if (v.prop) { ret.errors[v.prop] = v.errors }
      }
    })
    return Promise.resolve(ret)
  }

  clearValidate () {
    this.fields.forEach(v => {
      v.clearValidate()
    })
  }

  resetFields () {
    this.fields.forEach(v => {
      v.resetField()
    })
  }
}
