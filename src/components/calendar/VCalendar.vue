<template>
<div :class="[b()]">
  <div :class="[e('header')]">
     <v-select v-model="year" :class="[e('year-select')]">
          <v-option v-for="year in years" :key="year" :label="year + '年'" :value="year"></v-option>
      </v-select>
      <v-select v-model="month" :class="[e('month-select')]">
          <v-option v-for="month in months" :key="month" :value="month" :label="(month + 1) + '月'"></v-option>
      </v-select>
  </div>
  <div :class="[e('body')]">
      <table :class="[e('table')]">
        <thead>
        <tr>
            <th :class="[e('column-header')]" v-for="week in weeks" :key="week"><span :class="[e('column-header-inner')]">{{week}}</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, i) in rows" :key="i" :class="[e('row')]">
            <td v-for="(cell, j) in row" :key="j" >
                <div :class="[e('cell'), cellCls, currentMonthCls(cell), selectedDateCls(cell), isTodayCls(cell)]"
                  @click="onSelectDate(cell)">
                    <slot name="cell" :date="cell">{{dayText(cell)}}</slot>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, DateHelper } from '../../mixins'
import {
  getRecentDayOfWeek,
  isSameMonth,
  isSameDay,
  isToday,
  range } from '../../utils'

@Component({
  components: {
  },
  name: 'v-calendar'
  })
export default class VCalendar extends mixins(Themeable, Bemable, DateHelper) {
  @Prop({ type: String, default: 'YYYY/MM/DD' }) format!: string

  @Prop(String) @Model('input') value!: string

  @Prop(String) cellCls!: string

  @Emit() input (input: string) {}

  localValue: string = ''

  get years () {
    let current = this.selectedDate.getFullYear()
    return range(current - 10, current + 10)
  }

  get months () {
    return range(0, 11)
  }

  set actualValue (date: string) {
    this.localValue = date
    this.input(date)
  }

  get actualValue (): string {
    return this.value === undefined ? this.localValue : this.value
  }

  get selectedDate (): Date {
    if (!this.actualValue) return new Date()
    let date = this.parseDate(this.actualValue)
    if (date instanceof Date) return date
    return new Date()
  }

  set selectedDate (date: Date) {
    let dateStr = this.formatDate(date)
    this.localValue = dateStr
    this.input(dateStr)
  }

  get year (): number {
    return this.selectedDate.getFullYear()
  }

  set year (year: number) {
    let newDate = new Date(this.selectedDate)
    newDate.setFullYear(year)
    this.selectedDate = newDate
  }

  get month (): number {
    return this.selectedDate.getMonth()
  }

  set month (month: number) {
    let newDate = new Date(this.selectedDate)
    newDate.setMonth(month)
    this.selectedDate = newDate
  }

  get rows (): Date[][] {
    let start = getRecentDayOfWeek(new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1), 1)
    let days = range(0, 34).map(v => new Date(start.getFullYear(), start.getMonth(), start.getDate() + v))
    let ret: Date[][] = []
    for (let i=0; i< days.length; i = i + 7) {
      ret.push(days.slice(i, i + 7))
    }
    return ret
  }

  get weeks (): string[] {
    return [...this.dateLocale.dayNamesShort.slice(1, 7), this.dateLocale.dayNamesShort[0]]
  }

  isCurrentMonth (date: Date): boolean {
    return isSameMonth(date, this.selectedDate)
  }

  isSelectedDate (date: Date): boolean {
    return isSameDay(date, this.selectedDate)
  }

  isToday (date: Date): boolean {
    return isToday(date)
  }

  dayText (date: Date) {
    return date.getDate() + ''
  }

  onSelectDate (date: Date) {
    this.selectedDate = date
  }

  currentMonthCls (date: Date) {
    return this.isCurrentMonth(date) ? 'is-current-month' : ''
  }

  selectedDateCls (date: Date) {
    return this.isSelectedDate(date) ? 'is-selected-date' : ''
  }

  isTodayCls (date: Date) {
    return this.isToday(date) ? 'is-today' : ''
  }
}
</script>

<style src="./style/v-calendar.scss" lang="scss"></style>
