<template>
<div :class="[b(), sizeCls]">
  <div :class="[e('header'), headerCls]" v-if="hasHeader">
    <div :class="[e('title')]">
      <slot name="title">{{title}}</slot>
    </div>
    <div :class="[e('extra')]"><slot name="extra"></slot></div>
  </div>
  <div :class="[e('cover')]" v-if="$slots.cover">
    <slot name="cover"></slot>
  </div>
  <div :class="[e('body'), bodyCls]"><slot></slot></div>
  <div :class="[e('footer'), footerCls]" v-if="$slots.footer">
    <slot name="footer"></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { CardSize } from './type'

@Component({
  components: {
  },
  name: 'v-card'
  })
export default class VCard extends mixins(Themeable, Bemable) {
  @Prop(String) title!: string

  @Prop({type: String, default: 'md'}) size!: CardSize

  @Prop(String) headerCls!: string

  @Prop(String) bodyCls!: string

  @Prop(String) footerCls!: string

  get hasHeader (): boolean {
    return !!this.title || !!this.$slots.title || !!this.$slots.extra
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }
}
</script>

<style src="./style/v-card.scss" lang="scss"></style>
