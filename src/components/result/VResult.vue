<template>
<div :class="[b()]">
  <div :class="[e('icon')]">
    <slot name="icon">
      <span><i :class="[iconCls]"></i></span>
    </slot>
  </div>
  <div :class="[e('title')]" v-if="title || $slots.title"><slot name="title">{{title}}</slot></div>
  <div :class="[e('subtitle')]" v-if="subtitle || $slots.subtitle"><slot name="subtitle">{{subtitle}}</slot></div>
  <div :class="[e('content')]" v-if="$slots.default"><slot></slot></div>
  <div :class="[e('extra')]"><slot name="extra"></slot></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { statusIconMap } from '../../utils'

@Component({
  name: 'v-result'
  })
export default class VResult extends mixins(Themeable, Bemable) {
  @Prop({type: String, default: 'info'}) type!: 'primary' | 'success' | 'info' | 'warning' | 'error'

  @Prop(String) title!: string

  @Prop(String) subtitle!: string

  get iconCls () {
    return `anticon anticon-${statusIconMap[this.type]} text-${this.type}`
  }
}
</script>

<style lang="scss" src="./style/v-result.scss"></style>
