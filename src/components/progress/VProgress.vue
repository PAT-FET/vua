<template>
<div :class="[b(), typeCls]">
  <v-progress-line v-bind="$props" v-if="type === 'line'">
    <slot></slot>
  </v-progress-line>
  <v-progress-circle v-bind="$props" v-else>
    <slot></slot>
  </v-progress-circle>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'
import VProgressLine from './widget/VProgressLine.vue'
import VProgressCircle from './widget/VProgressCircle.vue'
import { ProgressType, ProgressStatus } from './type'

@Component({
  components: {
  VProgressLine,
  VProgressCircle
  },
  name: 'v-progress'
  })
export default class VProgress extends mixins(Themeable, Bemable, Colorable) {
  @Prop({type: String, default: 'line'}) type!: ProgressType

  @Prop({type: Number, default: 0}) percent!: number

  @Prop(String) status!: ProgressStatus

  @Prop({type: Number, default: 120}) width!: number

  @Prop({type: Number, default: 8}) strokeWidth!: number

  @Prop({type: Boolean, default: true}) showInfo!: boolean

  get typeCls () {
    return this.m(`type-${this.type}`)
  }
}
</script>

<style src="./style/v-progress.scss" lang="scss"></style>
