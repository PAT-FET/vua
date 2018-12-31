<template>
<div :class="[b()]">
    <slot></slot>
    <transition name="zoom">
        <sup :class="[e('text')]" :title="value" v-if="!dot && renderedValue">{{renderedValue}}</sup>
        <sup :class="[e('dot')]" v-if="dot"></sup>
    </transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-badge'
  })
export default class VBadge extends mixins(Themeable, Bemable) {
  @Prop([String, Number]) value!: string | number

  @Prop(Number) max!: number

  @Prop(Boolean) dot!: boolean

  get renderedValue (): string {
    if (!this.value) return ''
    if (typeof this.value === 'string') return this.value
    if (this.max && this.value > this.max) return this.max + '+'
    return this.value + ''
  }
}
</script>

<style src="./style/v-badge.scss" lang="scss"></style>
