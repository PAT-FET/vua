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
   :gutter="gutter"
   :trigger="trigger">
    <v-input
        slot="reference"
        readonly
        :value="model"
        :class="[e('input')]"
        :clearable="clearable"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        @clear="onClear">
        <i slot="suffix" class="anticon anticon-clock-circle-o"></i>
      </v-input>
    <div :class="[e('content')]">
        <div :class="[e('panel-input-wrap')]">
            <input :class="[e('panel-input')]" v-model.lazy="model">
            <div :class="[e('clear')]" v-if="clearable" @click="onClear"><i class="anticon anticon-close-circle"></i></div>
        </div>

        <div :class="[e('combobox')]">
            <div :class="[e('select')]">
                <ul>
                    <li v-for="hour in hours" :key="hour"
                      v-scroll-into-view="selectedHour(hour) && actualVisible"
                      @click="onSelectHour(hour)"
                      :class="[selectedHourCls(hour), disabledHourCls(hour)]">{{hour}}</li>
                </ul>
            </div>
            <div :class="[e('select')]">
                <ul>
                    <li v-for="min in minutes" :key="min"
                     v-scroll-into-view="selectedMin(min) && actualVisible"
                     @click="onSelectMin(min)"
                     :class="[selectedMinCls(min), disabledMinCls(min)]">{{min}}</li>
                </ul>
            </div>
            <div :class="[e('select')]">
                <ul>
                    <li v-for="sec in seconds" :key="sec"
                     v-scroll-into-view="selectedSec(sec) && actualVisible"
                     @click="onSelectSec(sec)"
                     :class="[selectedSecCls(sec), disabledSecCls(sec)]">{{sec}}</li>
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
import { Bemable, Themeable, DateHelper } from '../../mixins'
import { TimePickerSize, TimePickerDisabledTimeFunc } from './type'
import { range, trimDate } from '../../utils'
import { ScrollIntoView } from '../../directives'

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

  @Prop(Number) hourStep!: number

  @Prop(Number) minStep!: number

  @Prop(Number) secStep!: number

  @Prop(Function) disabledTime!: TimePickerDisabledTimeFunc

  visible: boolean = false

  actualVisible: boolean = false

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
    if (!model) {
      this.input('')
    } else {
      let ret = this.parseDate(model)
      if (ret) this.input(this.formatDate(ret as Date))
    }
  }

  get gutter () {
    if (this.size === 'md') {
      return -32
    } else if (this.size === 'sm') {
      return -24
    } else if (this.size === 'lg') {
      return -40
    }
    return 5
  }

  get hours (): number[] {
    return range(0, 23, this.hourStep || 1)
  }

  get minutes (): number[] {
    return range(0, 59, this.minStep || 1)
  }

  get seconds (): number[] {
    return range(0, 59, this.secStep || 1)
  }

  get date (): Date| null {
    let ret = this.parseDate(this.model)
    return ret ? (ret as Date) : null
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

  onClear () {
    this.model = ''
  }

  isDisabledTime (hour: number, min: number, sec: number): boolean {
    if (!this.disabledTime) return false
    return this.disabledTime(hour, min, sec)
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

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) {
      // it should be listen the popper event to confirm the actucalVisible, here simplify it
      setTimeout(() => {
        this.actualVisible = true
      }, 200)
    } else {
      this.actualVisible = false
    }
  }
}
</script>

<style src="./style/v-time-picker.scss" lang="scss"></style>
