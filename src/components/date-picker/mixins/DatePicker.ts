import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Picker from './Picker'
import { PickerDisabledTimeFunc } from '../date-picker'
import { fireEvent } from '../../../utils/dom'

@Component
export default class DatePicker extends mixins(Picker) {
  @Prop(String) @Model('input') value!: string

  @Prop(String) placeholder!: string

  @Prop(Boolean) showTime!: boolean

  @Prop(Function) disabledTime!: PickerDisabledTimeFunc

  @Emit() input (input: string) {
    this.change(input)
  }

  @Emit() change (input: string) {
    fireEvent(this.$el, 'change')
  }

  get model (): string {
    return this.parseDate(this.value) ? this.value : ''
  }

  set model (model: string) {
    if (!model) {
      this.input('')
    } else {
      let ret = this.parseDate(model)
      if (ret) this.input(this.formatDate(ret as Date))
    }
  }

  get date (): Date | null {
    let ret = this.parseDate(this.model)
    return ret ? (ret as Date) : null
  }
}
