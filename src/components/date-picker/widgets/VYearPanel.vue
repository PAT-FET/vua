<template>
<div :class="[b()]">
  <div :class="[e('header')]">
    <a :class="[e('prev-decade-btn')]" title="上一年代" @click="nextDecade(true)"></a>
    <span>
        <a :class="[e('decade-select')]" title="选择年代" @click="switchTo('decade')"> {{decade}} - {{decade + 9}} </a>
    </span>
    <a :class="[e('next-decade-btn')]" title="下一年代" @click="nextDecade()"></a>
  </div>
  <div :class="[e('body')]">
    <table :class="[e('table')]">
        <tbody>
        <tr v-for="(row, i) in rows" :key="i">
            <td :class="[e('cell'), disabledCellCls(cell)]" v-for="(cell, j) in row" :key="j">
                <div :class="[e('year'), currentYearCls(cell), selectedYearCls(cell), currentDecadeCls(cell)]"
                  @click="onSelectYear(cell)">
                    {{yearText(cell)}}
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
import { getRecentDayOfWeek, addYear, addMonth, addDay, addWeek, getWeekOfYear, isToday, isSameDay, isSameMonth, isSameYear, isSameDecade } from '@/utils/date'
import { range } from '@/utils/lang'
import { PickerPanelType } from '@/components/date-picker/date-picker'
import DateLocale from '@/mixins/DateLocale'
import Panel from '@/components/date-picker/mixins/Panel'

@Component({
  components: {
  },
  name: 'v-year-panel'
  })
export default class VYearPanel extends mixins(Themeable, Bemable, DateLocale, Panel) {
  get rows (): Date[][] {
    let ret: Date[][] = []
    let all = range(-1, 10).map(v => new Date(this.decade + v, this.currentDate.getMonth(), this.currentDate.getDate()))
    for (let i = 0; i < all.length; i = i +3) {
      ret.push(all.slice(i, i + 3))
    }
    return ret
  }

  onSelectYear (date: Date) {
    this.select(date)
  }

  yearText (date: Date) {
    return date.getFullYear() + ''
  }

  isCurrentYear (date: Date): boolean {
    return isSameYear(date, this.currentDate)
  }

  isSelectedYear (date: Date): boolean {
    return isSameYear(date, this.selectedDate)
  }

  isCurrentDecade (date: Date): boolean {
    return isSameDecade(date, this.currentDate)
  }

  currentYearCls (date: Date) {
    return this.isCurrentYear(date) ? 'is-current-year' : ''
  }

  selectedYearCls (date: Date) {
    return this.isSelectedYear(date) ? 'is-selected-year' : ''
  }

  currentDecadeCls (date: Date) {
    return this.isCurrentDecade(date) ? 'is-current-decade' : ''
  }
}
</script>

<style src="../style/widgets/v-year-panel.scss" lang="scss"></style>
