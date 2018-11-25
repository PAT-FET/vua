<template>
<v-popper :visible.sync="visible"
  :options="options"
  :append-to-body="appendToBody"
  transition="fade-transition"
  :disabled="disabled"
  :trigger="trigger">
  <slot name="reference" slot="reference"></slot>
  <div :class="[e('content')]">
    <div :class="[e('title')]" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</v-popper>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { VPopper } from '../index'

@Component({
  components: {
  VPopper
  },
  name: 'v-popover'
  })
export default class Vpopover extends mixins(Themeable, Bemable) {
  @Prop({type: Boolean, default: true}) appendToBody!: boolean

  @Prop({type: String, default: 'top'}) placement!: string

  @Prop({type: String, default: 'hover'}) trigger!: string

  @Prop(Boolean) disabled!: boolean

  @Prop(String) title!: string

  @Prop() @Model('input') value!: boolean

  @Emit() input (value: boolean) {}

  localVisible: boolean = false

  get options () {
    return {
      placement: this.placement
    }
  }

  get visible () {
    return this.value !== undefined ? this.value : this.localVisible
  }

  set visible (visible: boolean) {
    this.localVisible = visible
    this.input(visible)
  }
}
</script>

<style lang="scss" src="./style/v-popover.scss"></style>
