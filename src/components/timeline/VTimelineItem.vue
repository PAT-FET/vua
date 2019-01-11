<template>
  <li :class="[b()]">
      <div :class="[e('content-left')]">
          <slot name="left"></slot>
      </div>
      <div :class="[e('tail')]"></div>
      <div :class="[e('head'),headClasses]" :style="customColor" ref="dot"><slot name="dot"></slot></div>
      <div :class="[e('content-right')]">
          <slot name="right"></slot><slot></slot>
      </div>
  </li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { AnchorTargetFn } from './type'
import { throttle, easeInOutCubic } from '@/utils'

@Component({
  components: {
  },
  name: 'v-timeline-item'
})
export default class VTimelineItem extends mixins(Themeable, Bemable) {
  @Prop(String) color!: string

  dot:boolean = false

  mounted () {
    this.dot = !!(this.$refs.dot as any).innerHTML.length
  }

  get headClasses () {
    return [
      {
        [`v-timeline-item__head-custom`]: this.dot
      }
    ]
  }
  get customColor () {
    let style = {}
    if (this.color) {
      style = {
        'color': this.color,
        'border-color': this.color
      }
    }
    return style
  }
}
</script>

<style src="./style/v-timeline-item.scss" lang="scss"></style>
<style scoped>
/* .v-timeline.v-timeline__pending .v-timeline-item:nth-last-of-type(2) .v-timeline-item__tail
{border-left:1px dotted #e8eaec} */
</style>
