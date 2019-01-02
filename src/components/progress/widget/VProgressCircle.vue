<template>
<div :class="[b(), statusCls]">
    <svg :class="[e('circle')]" :style="[sizeStyle]">
        <path :class="[e('trail')]" :stroke-linecap="strokeLinecap" :d="d" :stroke-width="strokeWidth"></path>
        <path :class="[e('path')]" :stroke-linecap="strokeLinecap" :d="d" :stroke-width="strokeWidth" :style="[strokeDasharrayStyle]"></path>
    </svg>
    <span :class="[e('text')]" :style="[fontSizeCls]" v-if="showInfo">
        <slot>
          <i class="anticon anticon-close" v-if="actualStatus === 'exception'"></i>
          <i class="anticon anticon-check" v-else-if="actualStatus === 'success'"></i>
          <template v-else>{{percent}}%</template>
        </slot>
    </span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../../mixins'
import { ProgressType, ProgressStatus } from '../type'

@Component({
  components: {
  },
  name: 'v-progress-circle'
  })
export default class VProgressCircle extends mixins(Themeable, Bemable, Colorable) {
  @Prop({type: String, default: 'line'}) type!: ProgressType

  @Prop({type: Number, default: 0}) percent!: number

  @Prop(String) status!: ProgressStatus

  @Prop({type: Number, default: 120}) width!: number

  @Prop({type: Number, default: 8}) strokeWidth!: number

  @Prop({type: Boolean, default: true}) showInfo!: boolean

  @Prop({type: String, default: 'round'}) strokeLinecap!: 'round' | 'square'

  get sizeStyle () {
    return {
      width: this.width + 'px',
      height: this.width + 'px'
    }
  }

  get r () {
    return this.width / 2
  }

  get realR () {
    return this.r - this.strokeWidth / 2
  }

  get d () {
    return `M ${this.r},${this.r} m 0,${-this.realR}
    a ${this.realR},${this.realR} 0 1 1 0,${2 * this.realR}
    a ${this.realR},${this.realR} 0 1 1 0,${-2 * this.realR}`
  }

  get strokeDasharrayStyle () {
    let total = this.realR * Math.PI * 2
    let actual = total * this.percent / 100
    return {
      strokeDasharray: `${actual}px ${total}px`
    }
  }

  get actualStatus (): ProgressStatus {
    if (this.status) return this.status
    if (this.percent >= 100) return 'success'
    return 'normal'
  }

  get statusCls () {
    return this.m(`status-${this.actualStatus}`)
  }

  get fontSizeCls () {
    return {
      fontSize: this.width / 5 + 'px'
    }
  }
}
</script>

<style src="../style/v-progress-circle.scss" lang="scss"></style>
