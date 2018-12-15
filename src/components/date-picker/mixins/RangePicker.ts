import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Picker from './Picker'
import { PickerDisabledTimeFunc } from '../date-picker'

@Component
export default class DatePicker extends mixins(Picker) {
  @Prop(Array) @Model('input') value!: string[]

  @Prop(Boolean) showTime!: boolean

  @Prop(Function) disabledTime!: PickerDisabledTimeFunc

  @Emit() input (input: string[]) { }

  localModel: string[] = []

  timeSelecting: boolean = false

  get model (): string[] {
    return [0, 1].map(v => this.value && this.value[v]).map(v => this.parseDate(v) ? v : '')
  }

  set model (model: string[]) {
    if (!model) {
      this.input([])
    } else {
      let ret: any[] = ['', '']
      let ret1: boolean | Date = false
      let ret2: boolean | Date = false
      if (model[0]) {
        ret1 = this.parseDate(model[0])
        if (ret1) ret[0] = model[0]
      }
      if (model[1]) {
        ret2 = this.parseDate(model[1])
        if (ret2) ret[1] = model[1]
      }
      this.input(ret)
      if (!this.showTime) this.visible = false
    }
  }

  get model1 (): string {
    return this.localModel[0] || ''
  }

  set model1 (m: string) {
    if (!m) return
    let ret = this.parseDate(m)
    if (ret) {
      this.addToLocalModel(this.formatDate(ret as Date), 1)
    }
  }

  get model2 (): string {
    return this.localModel[1] || ''
  }

  set model2 (m: string) {
    if (!m) return
    let ret = this.parseDate(m)
    if (ret) {
      this.addToLocalModel(this.formatDate(ret as Date), 2)
    }
  }

  get date1 (): Date | null {
    let ret = this.parseDate(this.model1)
    return ret ? (ret as Date) : null
  }

  get date2 (): Date | null {
    let ret = this.parseDate(this.model2)
    return ret ? (ret as Date) : null
  }

  addToLocalModel (value: string, index?: 1 | 2) {
    if (!this.value) return
    if (this.showTime && index && this.timeSelecting) {
      let m = [...this.localModel]
      m[index - 1] = value
      this.localModel = m
      return
    }
    if (this.localModel.length > 1) {
      this.localModel = [value]
    } else if (this.localModel.length > 0) {
      this.localModel.push(value)
      this.localModel.sort()
      this.model = this.localModel
    } else {
      this.localModel.push(value)
    }
  }

  trySyncModel () {
    if (this.localModel.length > 1) this.model = this.localModel
  }

  @Watch('model') modelChange (model: string[]) {
    this.localModel = model
  }

  mounted () {
    this.localModel = this.model
  }
}
