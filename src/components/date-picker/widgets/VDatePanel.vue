<template>
<div :class="[b(), weekOnlyCls]">
  <div :class="[e('header')]">
    <a :class="[e('prev-year-btn')]" title="上一年 (Control键加左方向键)" @click="nextYear(true)" v-show="!disabledLastYear"></a>
    <a :class="[e('prev-month-btn')]" title="上个月 (翻页上键))" @click="nextMonth(true)" v-show="!disabledLastMonth"></a>
    <span :class="[e('ym-select')]">
        <a :class="[e('year-select')]" title="选择年份" @click="switchTo('year')" > {{year}}年 </a>
        <a :class="[e('month-select')]" title="选择月份" @click="switchTo('month')"> {{month + 1}}月 </a>
    </span>
    <a :class="[e('next-month-btn')]" title="下个月 (翻页下键)" @click="nextMonth()" v-show="!disabledNextMonth"></a>
    <a :class="[e('next-year-btn')]" title="下一年 (Control键加右方向键)" @click="nextYear()" v-show="!disabledNextYear"></a>
  </div>
  <div :class="[e('body')]">
    <table :class="[e('table')]">
        <thead>
        <tr>
            <th :class="[e('column-header')]" v-if="showWeekOfYear"></th>
            <th :class="[e('column-header')]" v-for="week in weeks" :key="week"><span :class="[e('column-header-inner')]">{{week}}</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, i) in rows" :key="i" :class="[e('row'), selectedWeekCls(row[3])]" @click="onSelectWeek(row[3])">
            <td :class="[e('cell')]" v-if="showWeekOfYear"><div :class="[e('week')]">{{weekOfYear(row[3])}}</div></td>
            <td :class="[e('cell'), inRangeCls(cell), disabledCellCls(cell)]" v-for="(cell, j) in row" :key="j" @mouseenter="onCellOver(cell)">
                <div :class="[e('date'), currentDateCls(cell), currentMonthCls(cell), selectedDateCls(cell), isTodayCls(cell)]"
                  @click="onSelectDate(cell)">
                    {{dayText(cell)}}
                </div>
            </td>
        </tr>
        </tbody>
    </table>
  </div>
  <div :class="[e('footer')]"></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, DateLocale } from '../../../mixins'
import {
  getRecentDayOfWeek,
  addYear,
  addMonth,
  addDay,
  addWeek,
  getWeekOfYear,
  isToday,
  isSameDay,
  isSameMonth,
  isSameWeek,
  trimDate,
  range } from '../../../utils'
import { PickerPanelType } from '../type'
import Panel from '../mixins/Panel'

@Component({
  components: {
  },
  name: 'v-date-panel'
  })
export default class VDatePanel extends mixins(Themeable, Bemable, DateLocale, Panel) {
  @Prop({type: Boolean, default: false}) showWeekOfYear!: boolean

  @Prop(Boolean) weekOnly!: boolean

  @Prop() rangeDate1!: Date

  @Prop() rangeDate2!: Date

  @Prop() hoverDate!: Date

  @Emit('update:hoverDate') hoverDateUpdate (date: Date | null) {}

  get rows (): Date[][] {
    let start = getRecentDayOfWeek(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1), 1)
    let days = range(0, 41).map(v => new Date(start.getFullYear(), start.getMonth(), start.getDate() + v))
    let ret: Date[][] = []
    for (let i=0; i< days.length; i = i + 7) {
      ret.push(days.slice(i, i + 7))
    }
    return ret
  }

  get weeks (): string[] {
    return [...this.dateLocale.dayNamesShort.slice(1, 7), this.dateLocale.dayNamesShort[0]]
  }

  get weekOnlyCls () {
    return this.weekOnly ? this.m('week-only') : ''
  }

  onSelectDate (date: Date) {
    if (this.weekOnly) return
    this.select(date)
  }

  onSelectWeek (date: Date) {
    if (this.weekOnly && !this.isDisabledDate(date)) {
      this.select(date)
    }
  }

  onCellOver (date: Date) {
    if (!this.isBetweenCurrentDate(date)) this.hoverDateUpdate(null)
    else this.hoverDateUpdate(date)
  }

  dayText (date: Date) {
    return date.getDate() + ''
  }

  weekOfYear (date: Date) {
    return getWeekOfYear(date)
  }

  isCurrentDate (date: Date): boolean {
    return isSameDay(date, this.currentDate)
  }

  isCurrentMonth (date: Date): boolean {
    return isSameMonth(date, this.currentDate)
  }

  isSelectedDate (date: Date): boolean {
    return isSameDay(date, this.selectedDate) || isSameDay(date, this.rangeDate1) || isSameDay(date, this.rangeDate2)
  }

  isToday (date: Date): boolean {
    return isToday(date)
  }

  isSelectedWeek (date: Date) {
    return this.weekOnly && isSameWeek(date, this.selectedDate)
  }

  isInRange (date: Date) {
    // consider it's belong to current month
    if (!this.isCurrentMonth(date)) return false
    let range: Date[] = []
    if (!this.rangeDate1 && !this.rangeDate2) return false
    if (this.rangeDate1 && this.rangeDate2) range.push(this.rangeDate1, this.rangeDate2)
    else {
      let one = this.rangeDate1 || this.rangeDate2
      if (one && this.hoverDate) {
        range.push(one, this.hoverDate)
      }
    }
    if (range.length < 2) return false
    range = range.sort((a, b) => a.getTime() - b.getTime()).map(v => trimDate(v))
    return date.getTime() >= addDay(range[0], 1).getTime() && date.getTime() <= addDay(range[1], -1).getTime()
  }

  currentDateCls (date: Date) {
    return this.isCurrentDate(date) ? 'is-current-date' : ''
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

  selectedWeekCls (date: Date) {
    return this.isSelectedWeek(date) ? 'is-selected-week' : ''
  }

  inRangeCls (date: Date) {
    return this.isInRange(date) ? 'is-in-range' : ''
  }
}
</script>

<style src="../style/widgets/v-date-panel.scss" lang="scss"></style>
