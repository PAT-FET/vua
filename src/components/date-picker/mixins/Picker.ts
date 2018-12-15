import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import DateHelper from '@/mixins/DateHelper'
import { PickerSize, PickerDisabledDateFunc } from '../date-picker'

@Component
export default class Picker extends mixins(DateHelper) {
    @Prop(Boolean) disabled!: boolean

    @Prop(Boolean) clearable!: boolean

    @Prop({ type: String, default: 'md' }) size!: PickerSize

    @Prop(Function) disabledDate!: PickerDisabledDateFunc

    visible: boolean = false

    appendToBody: boolean = true

    trigger: string = 'click'

    get options () {
      return {
        placement: 'bottom-start'
      }
    }

    get gutter () {
      if (this.size === 'md') {
        return -32
      } else if (this.size === 'sm') {
        return -24
      } else if (this.size === 'lg') {
        return -40
      }
      return 5
    }
}
