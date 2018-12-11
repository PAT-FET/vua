import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Localeable from '@/mixins/Localeable'
import { parse, format } from '@/utils/date'

@Component
export default class DateHelper extends mixins(Localeable) {
  @Prop({ type: String, default: 'HH:mm:ss' }) format!: string

  get dateLocale (): any {
    let date = (this.currentLocale && this.currentLocale.date) as Record<string, string>
    if (!date) return undefined
    return {
      amPm: date.amPm ? date.amPm.split(',') : ['am', 'pm'],
      dayNames: date.dayNames ? date.dayNames.split(',') : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: date.dayNamesShort ? date.dayNamesShort.split(',') : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: date.monthNames ? date.monthNames.split(',') : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthNamesShort: date.monthNamesShort ? date.monthNamesShort.split(',') : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }

  formatDate (date: Date): string {
    return format(date, this.format, this.dateLocale)
  }

  parseDate (value: string): Date | boolean {
    return parse(value, this.format, this.dateLocale)
  }
}
