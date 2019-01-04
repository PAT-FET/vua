<template>
<div :class="[b(), verticalCls, hasMarksCls, disabledCls]" @click="onSliderClick">
  <div :class="[e('rail'), disabledCls]"></div>
  <div :class="[e('track'), disabledCls]" :style="[trackStyle]" ref="track"></div>
  <div :class="[e('step')]">
    <div :class="[e('dot'), dotInRangeCls(step)]" v-for="(mark, step) in normalMarks" :key="step" :style="[dotStyle(step)]"></div>
  </div>
  <div :class="[e('handle'), disabledCls]"
      tabindex="0"
      :style="[handleStyle2]"
      @click.stop
      @mousedown="e => onHandleDown(e, true)" v-if="range">
         <v-tooltip placement="top" v-bind="tipProps" :content="tip2" ref="tip2">
          <div :class="[e('handle-ref')]"></div>
        </v-tooltip>
      </div>
  <div :class="[e('handle'), disabledCls]"
    tabindex="0"
    :style="[handleStyle]"
    @click.stop
    @mousedown="onHandleDown">
       <v-tooltip placement="top" v-bind="tipProps" :content="tip" ref="tip">
          <div :class="[e('handle-ref')]"></div>
       </v-tooltip>
    </div>
  <div :class="[e('mark')]">
    <div :class="[e('mark-text'), mark.class]" v-for="(mark, step) in normalMarks" :key="step" :style="[dotStyle(step)]">{{mark.label}}</div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { VTooltip } from '../tooltip'
import { SliderMarks } from './type'

@Component({
  components: {
  VTooltip
  },
  name: 'v-slider'
  })
export default class VSlider extends mixins(Themeable, Bemable) {
  @Prop([Number, Array]) value!: number | number[]

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) dots!: boolean

  @Prop() marks!: SliderMarks

  @Prop({type: Number, default: 100}) max!: number

  @Prop({type: Number, default: 0}) min!: number

  @Prop(Boolean) range!: boolean

  @Prop({type: Number, default: 1}) step!: number

  @Prop(Boolean) vertical!: boolean

  @Prop() tooltipVisible!: boolean

  @Emit() input (value: number | number[]) {}

  startX: number = -1

  startY: number = -1

  startValue: number = 0

  isStartDraging: boolean = false

  get len (): number {
    return this.max - this.min
  }

  get startRadio (): number {
    if (this.range) return (this.value as number[])[0] / this.len
    return 0
  }

  get endRadio (): number {
    if (this.range) return (this.value as number[])[1] / this.len
    return this.value as number / this.len
  }

  get trackStyle () {
    if (this.vertical) {
      return {
        top: this.startRadio * 100 + '%',
        height: (this.endRadio - this.startRadio) * 100 + '%'
      }
    }
    return {
      left: this.startRadio * 100 + '%',
      width: (this.endRadio - this.startRadio) * 100 + '%'
    }
  }

  get tipProps () {
    return {
      disabled: this.tooltipVisible === false,
      value: this.tooltipVisible === true ? true : undefined,
      trigger: this.tooltipVisible === true ? '' : 'hover'
    }
  }

  get handleStyle () {
    if (this.vertical) {
      return {
        top: this.endRadio * 100 + '%'
      }
    }
    return {
      left: this.endRadio * 100 + '%'
    }
  }

  get handleStyle2 () {
    if (this.vertical) {
      return {
        top: this.startRadio * 100 + '%'
      }
    }
    return {
      left: this.startRadio * 100 + '%'
    }
  }

  get verticalCls () {
    return this.vertical ? this.m('vertical') : ''
  }

  get hasMarksCls () {
    return this.marks ? this.m('has-marks') : ''
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get tip (): string {
    if (this.range) return (this.value as number[])[1] + ''
    return this.value + ''
  }

  get tip2 (): string {
    if (this.range) return (this.value as number[])[0] + ''
    return ''
  }

  get normalMarks (): SliderMarks {
    if (!this.marks) return {}
    let ret: SliderMarks = {}
    Object.entries(this.marks).forEach(([key, value]) => {
      let v = value
      if (typeof value === 'string') {
        v = {
          label: value
        }
      }
      ret[+key] = v
    })
    return ret
  }

  isDotInRange (value: number): boolean {
    return value >= this.startRadio * this.len && value <= this.endRadio * this.len
  }

  dotInRangeCls (value: number) {
    return this.isDotInRange(value) ? 'is-in-range' : ''
  }

  dotStyle (value: number) {
    if (this.vertical) {
      return {
        top: value / this.len * 100 + '%'
      }
    }
    return {
      left: value / this.len * 100 + '%'
    }
  }

  onSliderClick (e: any) {
    if (this.disabled) return
    let offset
    if (e.srcElement !== this.$el) {
      if (this.vertical) offset = e.offsetY + e.srcElement.offsetTop
      else offset = e.offsetX + e.srcElement.offsetLeft
    } else {
      if (this.vertical) offset = e.offsetY
      else offset = e.offsetX
    }
    let len = this.vertical ? this.$el.offsetHeight : this.$el.offsetWidth
    let ratio = offset / len
    ratio = ratio < 0 ? 0 : (ratio > 1 ? 1 : ratio)
    let value = ratio * this.len
    let ret: number | number[]
    if (this.range) {
      let start = (this.value as number[])[0]
      let end = (this.value as number[])[1]
      if (value > end) ret = [start, value]
      else if (value < start) ret = [value, end]
      else {
        let isStart = value - start < end - value
        if (isStart) ret = ([value, end])
        else ret = [start, value]
      }
    } else {
      ret = value
    }
    this.input(this.fixRange(ret))
  }

  onHandleDown (e: any, isStart?: boolean) {
    e.preventDefault()
    if (this.disabled) return
    if (isStart) {
      this.isStartDraging = true
      this.startValue = this.range ? (this.value as number[])[0] : this.value as number
    } else {
      this.isStartDraging = false
      this.startValue = this.range ? (this.value as number[])[1] : this.value as number
    }
    this.startX = e.pageX
    this.startY = e.pageY
    window.addEventListener('mousemove', this.onDragging)
    window.addEventListener('mouseup', this.onDragEnd)
  }

  onDragging (e: any) {
    if (this.disabled) return
    let num = this.startValue
    let diff = this.vertical ? e.pageY - this.startY : e.pageX - this.startX
    let len = this.vertical ? this.$el.offsetHeight : this.$el.offsetWidth
    num = diff / len * this.len + this.startValue

    if (num !== this.startValue) {
      let ret: number | number[]
      if (this.range) {
        let start = (this.value as number[])[0]
        let end = (this.value as number[])[1]
        if (this.isStartDraging) {
          if (num > end) this.isStartDraging = false
        } else {
          if (num < start) this.isStartDraging = true
        }
        if (num < start) ret = [num, end]
        else if (num > end) {
          ret = [start, num]
        } else {
          if (this.isStartDraging) ret = [num, end]
          else ret = [start, num]
        }
      } else {
        ret = num
      }
      this.input(this.fixRange(ret))
    }
  }

  onDragEnd (e: Event) {
    window.removeEventListener('mousemove', this.onDragging)
    window.removeEventListener('mouseup', this.onDragEnd)
  }

  fixRange (value: number | number[]): number | number[] {
    if (Array.isArray(value)) {
      let start = this.fixStep(value[0])
      let end = this.fixStep(value[1])
      start = start < this.min ? this.min : start
      start = start > this.max ? this.max : start
      end = end < this.min ? this.min : end
      end = end > this.max ? this.max : end
      return [start, end]
    } else {
      value = this.fixStep(value)
      value = value < this.min ? this.min : value > this.max ? this.max : value
      return value
    }
  }

  fixStep (value: number) {
    if (this.dots) { // only dots
      let marks: number[] = Object.keys(this.marks).map(key => {
        return +key
      })
      let min = marks[0]; let max = marks[marks.length - 1]
      marks.some((v, i) => {
        if (value <= v) {
          max = v
          min = i > 0 ? marks[i-1] : marks[0]
          return true
        }
        return false
      })
      let minDiff = Math.abs(value - min)
      let maxDiff = Math.abs(max - value)
      value = minDiff > maxDiff ? max : min
      return value
    } else {
      let ratio = Math.round((value - this.min) / this.step)
      return this.min + ratio * this.step
    }
  }

  @Watch('value') valueChange (value: number | number[]) {
    if (this.range) {
      this.$refs.tip.scheduleUpdate()
      this.$refs.tip2.scheduleUpdate()
    } else {
      this.$refs.tip.scheduleUpdate()
    }
  }

  $refs!: {
    track: HTMLElement,
    tip: VTooltip,
    tip2: VTooltip
  }
}
</script>

<style src="./style/v-slider.scss" lang="scss"></style>
