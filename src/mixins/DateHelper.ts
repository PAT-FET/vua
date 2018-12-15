import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import DateLocale from '@/mixins/DateLocale'
import { parse, format } from '@/utils/date'

@Component
export default class DateHelper extends mixins(DateLocale) {
  @Prop({ type: String, default: 'HH:mm:ss' }) format!: string

  get actucalFormat () {
    return this.format
  }

  formatDate (date: Date): string {
    return format(date, this.actucalFormat, this.dateLocale)
  }

  parseDate (value: string): Date | boolean {
    return parse(value, this.actucalFormat, this.dateLocale)
  }
}
