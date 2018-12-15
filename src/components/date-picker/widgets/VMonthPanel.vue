<template>
<div :class="[b()]">
  <div :class="[e('header')]">
    <a :class="[e('prev-year-btn')]" title="上一年 (Control键加左方向键)" @click="nextYear(true)"></a>
    <span :class="[e('ym-select')]">
        <a :class="[e('year-select')]" title="选择年份" @click="switchTo('year')"> {{year}}年 </a>
    </span>
    <a :class="[e('next-year-btn')]" title="下一年 (Control键加右方向键)" @click="nextYear()"></a>
  </div>
  <div :class="[e('body')]">
    <table :class="[e('table')]">
        <tbody>
        <tr v-for="(row, i) in rows" :key="i">
            <td :class="[e('cell'), disabledCellCls(cell)]" v-for="(cell, j) in row" :key="j">
                <div :class="[e('month'), currentMonthCls(cell), selectedMonthCls(cell)]"
                  @click="onSelectMonth(cell)">
                    {{monthText(cell)}}
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
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import DateHelper from '@/mixins/DateHelper'
import { format, getRecentDayOfWeek, addYear, addMonth, addDay, addWeek, getWeekOfYear, isToday, isSameDay, isSameMonth } from '@/utils/date'
import { range } from '@/utils/lang'
import { PickerPanelType } from '@/components/date-picker/date-picker'
import DateLocale from '@/mixins/DateLocale'
import Panel from '@/components/date-picker/mixins/Panel'

@Component({
  components: {
  },
  name: 'v-month-panel'
  })
export default class VMonthPanel extends mixins(Themeable, Bemable, DateLocale, Panel) {
  get rows (): Date[][] {
    let ret: Date[][] = []
    let all = range(0, 11).map(v => new Date(this.currentDate.getFullYear(), v, this.currentDate.getDate()))
    for (let i = 0; i < all.length; i = i +3) {
      ret.push(all.slice(i, i + 3))
    }
    return ret
  }

  nextYear (negative: false) {
    this.input(addYear(this.currentDate, negative ? -1 : 1))
  }

  nextMonth (negative: false) {
    this.input(addMonth(this.currentDate, negative ? -1 : 1))
  }

  onSelectMonth (date: Date) {
    this.select(date)
  }

  monthText (date: Date) {
    return format(date, 'MMM', this.dateLocale)
  }

  isCurrentMonth (date: Date): boolean {
    return isSameMonth(date, this.currentDate)
  }

  isSelectedMonth (date: Date): boolean {
    return isSameMonth(date, this.selectedDate)
  }

  // isPresentMonth (date: Date): boolean {
  //   return isSameMonth(date, new Date())
  // }

  currentMonthCls (date: Date) {
    return this.isCurrentMonth(date) ? 'is-current-month' : ''
  }

  selectedMonthCls (date: Date) {
    return this.isSelectedMonth(date) ? 'is-selected-month' : ''
  }

  // presentMonthCls (date: Date) {
  //   return this.isPresentMonth(date) ? 'is-present-month' : ''
  // }
}
</script>

<style src="../style/widgets/v-month-panel.scss" lang="scss"></style>
