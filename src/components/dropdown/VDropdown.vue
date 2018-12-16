<template>
<div :class="[b()]">
  <v-popper
   :class="[e('popper')]"
   :visible.sync="visible"
   :arrow="false"
   :append-to-body="appendToBody"
   :delay="200"
   :options="options"
   reference="[x-reference]"
   :trigger="trigger">
    <div slot="reference" :class="[e('reference')]"><slot></slot></div>
    <slot name="dropdown"></slot>
  </v-popper>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Localeable from '@/mixins/Localeable'
import { DropdownTrigger } from './dropdown'

@Component({
  components: {
  },
  name: 'v-dropdown'
  })
export default class VDropdown extends mixins(Themeable, Bemable, Localeable) {
  @Prop({type: String, default: 'hover'}) trigger!: DropdownTrigger

  appendToBody: boolean = true

  visible: boolean = false

  get options () {
    return {
      placement: 'bottom-start'
    }
  }

  @Provide() close () {
    this.visible = false
  }
}
</script>

<style src="./style/v-dropdown.scss" lang="scss"></style>
