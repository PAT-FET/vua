<template>
<div :class="[b()]">
  <div :class="[e('header')]">
    <a :class="[e('prev-century-btn')]" title="上一世纪" @click="nextCentury(true)"></a>
    <span>
        <a :class="[e('century-select')]"> {{century}} - {{century + 99}} </a>
    </span>
    <a :class="[e('next-century-btn')]" title="下一世纪" @click="nextCentury()"></a>
  </div>
  <div :class="[e('body')]">
    <table :class="[e('table')]">
        <tbody>
        <tr v-for="(row, i) in rows" :key="i">
            <td :class="[e('cell'), disabledCellCls(cell)]" v-for="(cell, j) in row" :key="j">
                <div :class="[e('decade'), currentDecadeCls(cell), selectedDecadeCls(cell), currentCenturyCls(cell)]"
                  @click="onSelectDecade(cell)">
                    {{decadeText(cell)}}
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
import { getRecentDayOfWeek, addYear, addMonth, addDay, addWeek, getWeekOfYear, isToday, isSameDay, isSameMonth, isSameYear, isSameDecade, isSameCentury } from '@/utils/date'
import { range } from '@/utils/lang'
import { PickerPanelType } from '@/components/date-picker/date-picker'
import DateLocale from '@/mixins/DateLocale'
import Panel from '@/components/date-picker/mixins/Panel'

@Component({
  components: {
  },
  name: 'v-decade-panel'
  })
export default class VDecadePanel extends mixins(Themeable, Bemable, DateLocale, Panel) {
  get rows (): Date[][] {
    let ret: Date[][] = []
    let century = Math.floor(this.currentDate.getFullYear() / 100) * 100
    let all = range(-1, 10).map(v => new Date(century + v * 10, this.currentDate.getMonth(), this.currentDate.getDate()))
    for (let i = 0; i < all.length; i = i +3) {
      ret.push(all.slice(i, i + 3))
    }
    return ret
  }

  onSelectDecade (date: Date) {
    this.select(date)
  }

  decadeText (date: Date) {
    return date.getFullYear() + '-' + (date.getFullYear() + 9)
  }

  isCurrentDecade (date: Date): boolean {
    return isSameDecade(date, this.currentDate)
  }

  isSelectedDecade (date: Date): boolean {
    return isSameDecade(date, this.selectedDate)
  }

  isCurrentCentury (date: Date): boolean {
    return isSameCentury(date, this.currentDate)
  }

  currentDecadeCls (date: Date) {
    return this.isCurrentDecade(date) ? 'is-current-decade' : ''
  }

  selectedDecadeCls (date: Date) {
    return this.isSelectedDecade(date) ? 'is-selected-decade' : ''
  }

  currentCenturyCls (date: Date) {
    return this.isCurrentCentury(date) ? 'is-current-century' : ''
  }
}
</script>

<style src="../style/widgets/v-decade-panel.scss" lang="scss"></style>
