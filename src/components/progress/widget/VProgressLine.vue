<template>
<div :class="[b(), statusCls]">
    <div :class="[e('outer')]">
        <div :class="[e('inner')]">
            <div :class="[e('bg')]" :style="[strokeWidthStyle, percentWidth]"></div>
        </div>
    </div>
    <span :class="[e('text')]" v-if="showInfo">
        <slot>
            <i class="anticon anticon-close-circle" v-if="actualStatus === 'exception'"></i>
            <i class="anticon anticon-check-circle" v-else-if="actualStatus === 'success'"></i>
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
  name: 'v-progress-line'
  })
export default class VProgressLine extends mixins(Themeable, Bemable, Colorable) {
  @Prop({type: String, default: 'line'}) type!: ProgressType

  @Prop({type: Number, default: 0}) percent!: number

  @Prop(String) status!: ProgressStatus

  @Prop({type: Number, default: 8}) strokeWidth!: number

  @Prop({type: Boolean, default: true}) showInfo!: boolean

  get strokeWidthStyle () {
    return {
      height: this.strokeWidth + 'px'
    }
  }

  get percentWidth () {
    return {
      width: this.percent + '%'
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
}
</script>

<style src="../style/v-progress-line.scss" lang="scss"></style>
