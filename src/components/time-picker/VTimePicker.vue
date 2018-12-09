<template>
<div :class="[b()]">
  <v-popper
   :class="[e('popper')]"
   :visible.sync="visible"
   :arrow="false"
   :append-to-body="appendToBody"
   :delay="50"
   :disabled="disabled"
   :options="options"
   :trigger="trigger">
    <v-input
        slot="reference"
        readonly
        :value="model"
        :class="[e('input')]"
        :size="size"
        :placeholder="placeholder"
        :clearable="clearable"
        :disabled="disabled">
        <i slot="suffix" class="anticon anticon-clock-circle-o"></i>
      </v-input>
    <div :class="[e('content')]">
        <div :class="[e('panel-input-wrap')]">
            <input :class="[e('panel-input')]" v-model.lazy="model">
        </div>

        <div :class="[e('combobox')]">
            <div :class="[e('select')]">
                <ul>
                    <li v-for="hour in hours" :key="hour" v-scroll-into-view="selectedHour(hour)" @click="onSelectHour(hour)" :class="[selectedHourCls(hour)]">{{hour}}</li>
                </ul>
            </div>
            <div :class="[e('select')]">
                <ul>
                    <li v-for="min in minutes" :key="min" v-scroll-into-view="selectedMin(min)" @click="onSelectMin(min)" :class="[selectedMinCls(min)]">{{min}}</li>
                </ul>
            </div>
            <div :class="[e('select')]">
                <ul>
                    <li v-for="sec in seconds" :key="sec" v-scroll-into-view="selectedSec(sec)" @click="onSelectSec(sec)" :class="[selectedSecCls(sec)]">{{sec}}</li>
                </ul>
            </div>
        </div>
    </div>
  </v-popper>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { TimePickerSize } from './time-picker'
import DateHelper from '@/mixins/DateHelper'
import { range } from '@/utils/lang'
import { trimDate } from '@/utils/date'
import { ScrollIntoView } from '@/directives'

@Component({
  components: {
  },
  directives: {ScrollIntoView},
  name: 'v-time-picker'
  })
export default class VTimePicker extends mixins(Themeable, Bemable, DateHelper) {
  @Prop(String) @Model('input') value!: string

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) clearable!: boolean

  @Prop({type: String, default: 'md'}) size!: TimePickerSize

  @Prop(String) placeholder!: string

  visible: boolean = false

  appendToBody: boolean = true

  trigger: string = 'click'

  @Emit() input (input: string) {}

  get options () {
    return {
      placement: 'bottom-start'
    }
  }

  get model (): string {
    return this.parseDate(this.value) ? this.value : ''
  }

  set model (model: string) {
    let ret = this.parseDate(model)
    if (ret) this.input(this.formatDate(ret as Date))
  }

  get hours (): number[] {
    return range(0, 23)
  }

  get minutes (): number[] {
    return range(0, 59)
  }

  get seconds (): number[] {
    return range(0, 59)
  }

  get date (): Date| null {
    let ret = this.parseDate(this.model)
    return ret ? (ret as Date) : null
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
    this.input(this.formatDate(date))
  }

  onSelectMin (min: number) {
    let date: Date = this.date || trimDate(new Date())
    date.setMinutes(min)
    this.input(this.formatDate(date))
  }

  onSelectSec (sec: number) {
    let date: Date = this.date || trimDate(new Date())
    date.setSeconds(sec)
    this.input(this.formatDate(date))
  }
}
</script>

<style src="./style/v-time-picker.scss" lang="scss"></style>
