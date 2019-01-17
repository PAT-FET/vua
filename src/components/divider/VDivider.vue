<template>
<div :class="[b(), typeCls, orientationCls, dashedCls]">
  <div :class="[e('text')]" v-if="showText"><slot></slot></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { DividerOrientation, DividerType } from './type'

@Component({
  components: {
  },
  name: 'v-divider'
  })
export default class VDivider extends mixins(Themeable, Bemable) {
  @Prop(Boolean) dashed!: boolean

  @Prop({type: String, default: 'center'}) orientation!: DividerOrientation

  @Prop({type: String, default: 'horizontal'}) type!: DividerType

  get showText () {
    return this.type === 'horizontal' && !!this.$slots.default
  }

  get typeCls () {
    return this.m(this.type)
  }

  get orientationCls () {
    return this.m(this.orientation)
  }

  get dashedCls () {
    return this.dashed ? this.m('dashed') : ''
  }
}
</script>

<style src="./style/v-divider.scss" lang="scss"></style>
