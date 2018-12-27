import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Localeable from './Localeable'

@Component
export default class DateLocale extends mixins(Localeable) {
  // same structrue as fecha i18n
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
}
