<template>
<li :class="[b(), positionCls, placementCls]">
  <div :class="[e('tail')]"></div>
  <div :class="[e('head')]" :style="[headStyle]">
    <div :class="[e('head-inner')]">
      <slot name="icon">
        <i class="anticon" :class="[iconCls]" v-if="icon"></i>
        <div :class="[e('icon')]" :style="[iconStyle]" v-else></div>
      </slot>
    </div>
  </div>
  <div :class="[e('body')]">
    <div :class="[e('content')]"><slot></slot></div>
    <div :class="[e('timestamp')]" v-if="timestamp">{{timestamp}}</div>
  </div>
</li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  name: 'v-timeline-item'
  })
export default class VTimelineItem extends mixins(Themeable, Bemable, Colorable) {
  @Prop(String) timestamp!: string

  @Prop({type: String, default: 'bottom'}) placement!: 'bottom' | 'top'

  @Prop({type: String, default: 'primary'}) color!: string

  @Prop(String) icon!: string

  @Prop({ type: String, default: 'left'}) position!: 'left' | 'right'

  get iconCls () {
    return `anticon-${this.icon}`
  }

  get rbg () {
    return this.parseColor(this.color)
  }

  get headStyle () {
    return {
      color: this.rbg
    }
  }

  get iconStyle () {
    return {
      borderColor: this.rbg
    }
  }

  get positionCls () {
    return this.m(this.position)
  }

  get placementCls () {
    return this.m(`placement-${this.placement}`)
  }
}
</script>

<style src="./style/v-timeline-item.scss" lang="scss"></style>
