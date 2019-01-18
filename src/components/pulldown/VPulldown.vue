<template>
<div :class="[b()]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-pulldown'
  })
export default class VPulldown extends mixins(Themeable, Bemable, Colorable) {
  @Prop([String, Number]) value!: string | number

  @Emit() input (value: string | number) {}

  localValue: string | number = ''

  get actualValue (): string | number {
    return this.value || this.localValue
  }

  set actualValue (value: string | number) {
    this.localValue = value
    this.input(value)
  }

  @Provide() getValue (): string | number {
    return this.actualValue
  }

  @Provide() setValue (value: string | number) {
    this.actualValue = value
  }
}
</script>

<style src="./style/v-pulldown.scss" lang="scss"></style>
