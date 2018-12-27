import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { PickerPanelType, PickerDisabledDateFunc } from '../type'
import { addYear, addMonth, addDay, addWeek } from '../../../utils/date'

@Component
export default class Panel extends Vue {
  @Prop() @Model('input') currentDate!: Date

  @Prop() selectedDate!: Date

  @Prop() maxCurrentDate!: Date

  @Prop() minCurrentDate!: Date

  @Prop(Function) disabledDate!: PickerDisabledDateFunc

  @Emit() input (currentDate: Date) { }

  @Emit() switchTo (panel: PickerPanelType) { }

  @Emit() select (date: Date) {}

  get century (): number {
    return Math.floor(this.currentDate.getFullYear() / 100) * 100
  }

  get decade (): number {
    return Math.floor(this.currentDate.getFullYear() / 10) * 10
  }

  get year (): number {
    return this.currentDate.getFullYear()
  }

  get month (): number {
    return this.currentDate.getMonth()
  }

  get day (): number {
    return this.currentDate.getDate()
  }

  get disabledNextMonth () {
    let date = addMonth(this.currentDate, 1)
    return !this.isBetweenCurrentDate(date)
  }

  get disabledLastMonth () {
    let date = addMonth(this.currentDate, -1)
    return !this.isBetweenCurrentDate(date)
  }

  get disabledNextYear () {
    let date = addYear(this.currentDate, 1)
    return !this.isBetweenCurrentDate(date)
  }

  get disabledLastYear () {
    let date = addYear(this.currentDate, -1)
    return !this.isBetweenCurrentDate(date)
  }

  nextCentury (negative: false) {
    this.input(addYear(this.currentDate, negative ? -100 : 100))
  }

  nextDecade (negative: false) {
    this.input(addYear(this.currentDate, negative ? -10 : 10))
  }

  nextYear (negative: false) {
    this.input(addYear(this.currentDate, negative ? -1 : 1))
  }

  nextMonth (negative: false) {
    this.input(addMonth(this.currentDate, negative ? -1 : 1))
  }

  nextDay (negative: false) {
    this.input(addDay(this.currentDate, negative ? -1 : 1))
  }

  nextWeek (negative: false) {
    this.input(addWeek(this.currentDate, negative ? -1 : 1))
  }

  isBetweenCurrentDate (date: Date) {
    if (!this.maxCurrentDate && !this.minCurrentDate) return true
    if (this.maxCurrentDate) {
      if (date.getTime() > this.maxCurrentDate.getTime()) return false
    }
    if (this.minCurrentDate) {
      if (date.getTime() < this.minCurrentDate.getTime()) return false
    }
    return true
  }

  isDisabledDate (date: Date) {
    if (!this.disabledDate) return false
    return this.disabledDate(date)
  }

  disabledCell (date: Date) {
    return !this.isBetweenCurrentDate(date) || this.isDisabledDate(date)
  }

  disabledCellCls (date: Date) {
    return this.disabledCell(date) ? 'disabled': ''
  }
}
