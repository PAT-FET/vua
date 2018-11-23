<template>
<v-popper :visible.sync="visible"
  :options="options"
  :append-to-body="appendToBody"
  popper-class="v-tooltip__popper"
  transition="fade-transition"
  :disabled="disabled"
  :trigger="trigger">
  <slot slot="reference"></slot>
  <div :class="[e('content')]">
    {{content}}
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
  name: 'v-tooltip'
  })
export default class VTooltip extends mixins(Themeable, Bemable) {
  @Prop({type: Boolean, default: true}) appendToBody!: boolean

  @Prop({type: String, default: 'top'}) placement!: string

  @Prop(String) content!: string

  @Prop({type: String, default: 'hover'}) trigger!: string

  @Prop(Boolean) disabled!: boolean

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

<style lang="scss" src="./style/v-tooltip.scss"></style>
