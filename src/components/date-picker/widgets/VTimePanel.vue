<template>
<div :class="[b()]" v-show="visible">
  <div :class="[e('header')]">
    <span>
        <a :class="[e('ymd-select')]"> {{year}} 年 {{month + 1}} 月 {{day}} 日</a>
    </span>
  </div>
  <div :class="[e('body')]">
    <div :class="[e('combobox')]">
        <div :class="[e('select'), 'is-first']">
            <ul>
                <li v-for="hour in hours" :key="hour"
                 v-scroll-into-view="selectedHour(hour) && visible"
                 @click="onSelectHour(hour)"
                 :class="[selectedHourCls(hour), disabledHourCls(hour)]">{{hour}}</li>
            </ul>
        </div>
        <div :class="[e('select')]">
            <ul>
                <li v-for="min in minutes" :key="min"
                 v-scroll-into-view="selectedMin(min) && visible"
                 @click="onSelectMin(min)"
                 :class="[selectedMinCls(min), disabledMinCls(min)]">{{min}}</li>
            </ul>
        </div>
        <div :class="[e('select')]">
            <ul>
                <li v-for="sec in seconds" :key="sec"
                 v-scroll-into-view="selectedSec(sec) && visible"
                 @click="onSelectSec(sec)"
                 :class="[selectedSecCls(sec), disabledSecCls(sec)]">{{sec}}</li>
            </ul>
        </div>
    </div>
  </div>
  <div :class="[e('footer')]"></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, DateHelper, DateLocale } from '../../../mixins'
import { trimDate, range } from '../../../utils'
import { PickerPanelType, PickerDisabledTimeFunc } from '../type'
import { ScrollIntoView } from '../../../directives'

@Component({
  components: {
  },
  directives: {ScrollIntoView},
  name: 'v-time-panel'
  })
export default class VTimePanel extends mixins(Themeable, Bemable, DateLocale) {
  @Prop(Number) hourStep!: number

  @Prop(Number) minStep!: number

  @Prop(Number) secStep!: number

  @Prop(Boolean) visible!: boolean

  @Prop(Function) disabledTime!: PickerDisabledTimeFunc

  @Prop() date!: Date

  @Emit('update:date') dateUpdate (date: Date) {}

  get hours (): number[] {
    return range(0, 23, this.hourStep || 1)
  }

  get minutes (): number[] {
    return range(0, 59, this.minStep || 1)
  }

  get seconds (): number[] {
    return range(0, 59, this.secStep || 1)
  }

  get year (): number {
    return this.date.getFullYear()
  }

  get month (): number {
    return this.date.getMonth()
  }

  get day (): number {
    return this.date.getDate()
  }

  get hour () {
    return (this.date && this.date.getHours()) || 0
  }

  get min () {
    return (this.date && this.date.getMinutes()) || 0
  }

  get sec () {
    return (this.date && this.date.getSeconds()) || 0
  }

  selectedHour (hour: number): boolean {
    if (!this.date) return false
    return this.date.getHours() === hour
  }

  selectedMin (min: number): boolean {
    if (!this.date) return false
    return this.date.getMinutes() === min
  }

  selectedSec (sec: number): boolean {
    if (!this.date) return false
    return this.date.getSeconds() === sec
  }

  isDisabledTime (hour: number, min: number, sec: number): boolean {
    if (!this.disabledTime) return false
    return this.disabledTime(hour, min, sec, this.date)
  }

  disabledHourCls (hour: number) {
    return this.isDisabledTime(hour, this.min, this.sec) ? 'disabled': ''
  }

  disabledMinCls (min: number) {
    return this.isDisabledTime(this.hour, min, this.sec) ? 'disabled': ''
  }

  disabledSecCls (sec: number) {
    return this.isDisabledTime(this.hour, this.min, sec) ? 'disabled': ''
  }

  selectedHourCls (hour: number): string {
    return !this.selectedHour(hour) ? '' : 'selected'
  }

  selectedMinCls (min: number): string {
    return !this.selectedMin(min) ? '' : 'selected'
  }

  selectedSecCls (sec: number): string {
    return !this.selectedSec(sec) ? '' : 'selected'
  }

  onSelectHour (hour: number) {
    let date: Date = this.date || trimDate(new Date())
    date.setHours(hour)
    this.dateUpdate(date)
  }

  onSelectMin (min: number) {
    let date: Date = this.date || trimDate(new Date())
    date.setMinutes(min)
    this.dateUpdate(date)
  }

  onSelectSec (sec: number) {
    let date: Date = this.date || trimDate(new Date())
    date.setSeconds(sec)
    this.dateUpdate(date)
  }
}
</script>

<style src="../style/widgets/v-time-panel.scss" lang="scss"></style>
