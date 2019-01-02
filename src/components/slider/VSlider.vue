<template>
<div :class="[b()]" @click="onSliderClick">
  <div :class="[e('rail')]"></div>
  <div :class="[e('track')]" :style="[trackStyle]" ref="track"></div>
  <div :class="[e('step')]">
    <div :class="[e('dot'), dotInRangeCls(step)]" v-for="(mark, step) in normalMarks" :key="step" :style="[dotStyle(step)]"></div>
  </div>
  <div :class="[e('handle')]"
      tabindex="0"
      :style="[handleStyle2]"
      @click.stop
      @mousedown="e => onHandleDown(e, true)" v-if="range">
         <v-tooltip placement="top" :content="tip2" ref="tip2">
          <div :class="[e('handle-ref')]"></div>
        </v-tooltip>
      </div>
  <div :class="[e('handle')]"
    tabindex="0"
    :style="[handleStyle]"
    @click.stop
    @mousedown="onHandleDown">
       <v-tooltip placement="top" :content="tip" ref="tip">
          <div :class="[e('handle-ref')]"></div>
       </v-tooltip>
    </div>
  <div :class="[e('mark')]">

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

  @Emit() input (value: number | number[]) {}

  currentX: number = -1

  currentY: number = -1

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
    return {
      left: this.startRadio * 100 + '%',
      width: (this.endRadio - this.startRadio) * 100 + '%'
    }
  }

  get handleStyle () {
    return {
      left: this.endRadio * 100 + '%'
    }
  }

  get handleStyle2 () {
    return {
      left: this.startRadio * 100 + '%'
    }
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
    return {
      left: value / this.len * 100 + '%'
    }
  }

  onSliderClick (e: any) {
    let x
    if (e.srcElement !== this.$el) {
      x = e.offsetX + e.srcElement.offsetLeft
    } else {
      x = e.offsetX
    }
    let width = this.$el.offsetWidth
    let ratio = x / width
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

  onHandleDown (e: Event, isStart?: boolean) {
    e.preventDefault()
    if (isStart) {
      this.isStartDraging = true
    } else {
      this.isStartDraging = false
    }
    this.currentX = -1
    this.currentY = -1
    window.addEventListener('mousemove', this.onDragging)
    window.addEventListener('mouseup', this.onDragEnd)
  }

  onDragging (e: any) {
    let delta = 0
    if (this.currentX > 0) {
      let diffX = e.pageX - this.currentX
      delta = diffX / this.$el.offsetWidth * this.len
    }
    this.currentX = e.pageX
    if (delta !== 0) {
      let ret: number | number[]
      if (this.range) {
        let start = (this.value as number[])[0]
        let end = (this.value as number[])[1]
        let num
        if (this.isStartDraging) {
          num = start + delta
          if (num > end) this.isStartDraging = false
          this.$refs.tip2.scheduleUpdate()
        } else {
          num = end + delta
          if (num < start) this.isStartDraging = true
          this.$refs.tip.scheduleUpdate()
        }
        if (num < start) ret = [num, end]
        else if (num > end) {
          ret = [start, num]
        } else {
          if (this.isStartDraging) ret = [num, end]
          else ret = [start, num]
        }
      } else {
        ret = this.value as number + delta
        this.$refs.tip.scheduleUpdate()
      }
      this.input(this.fixRange(ret))
    }
  }

  onDragEnd (e: Event) {
    window.removeEventListener('mousemove', this.onDragging)
    window.removeEventListener('mouseup', this.onDragEnd)
    this.currentX = -1
    this.currentY = -1
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
    if (this.step <= 0) { // only mark
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

  $refs!: {
    track: HTMLElement,
    tip: VTooltip,
    tip2: VTooltip
  }
}
</script>

<style src="./style/v-slider.scss" lang="scss"></style>
