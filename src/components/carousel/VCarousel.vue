<template>
<div :class="[b(), directionCls]">
  <div :class="[e('container')]">
    <div :class="[e('list')]" :style="[offsetStyle]"><slot></slot></div>
  </div>
  <ul :class="[e('indicators')]">
    <li :class="[e('indicator'), activeIndicator(i)]" v-for="(key, i) in count" :key="i" @click="onSelect(i)" @mouseenter="onHoverSelect(i)"></li>
  </ul>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-carousel'
  })
export default class VCarousel extends mixins(Themeable, Bemable, Group) {
  @Prop({type: String, default: 'click'}) trigger!: 'click' | 'hover'

  @Prop({type: String, default: 'bottom'}) direction!: 'top' | 'bottom' | 'left' | 'right'

  @Prop({type: Boolean, default: true}) autoplay!: boolean

  @Prop({type: Number, default: 3000}) interval!: number

  groupNames: string[] = ['v-carousel-item']

  activeIdx: number = 0

  timer: any = null

  get offsetStyle () {
    const revert = ['left', 'right'].includes(this.direction)
    const offset = -this.activeIdx * 100
    return {
      transform: `translate${revert ? 'Y' : 'X'}(${offset}%)`
    }
  }

  get count () {
    return this.groupItems.length
  }

  get directionCls () {
    return this.direction ? this.m(`direction-${this.direction}`) : ''
  }

  activeIndicator (i: number) {
    return i === this.activeIdx ? 'is-active' : ''
  }

  onSelect (i: number) {
    this.activeIdx = i
  }

  onHoverSelect (i: number) {
    if (this.trigger === 'hover') this.onSelect(i)
  }

  startTimer () {
    if (this.timer) clearInterval(this.timer)
    const fn = () => {
      let idx = this.activeIdx + 1
      if (idx >= this.count) idx = 0
      this.activeIdx = idx
    }
    this.timer = setInterval(fn, this.interval)
  }

  stopTimer () {
    if (this.timer) clearInterval(this.timer)
  }

  beforeDestory () {
    this.stopTimer()
  }

  @Watch('autoplay', {immediate: true}) autoplayChange (autoplay: boolean) {
    if (autoplay) this.startTimer()
    else this.stopTimer()
  }
}
</script>

<style src="./style/v-carousel.scss" lang="scss"></style>
