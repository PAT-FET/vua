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
import { Bemable, Themeable, Localeable } from '../../mixins'
import { DropdownTrigger } from './type'

@Component({
  components: {
  },
  name: 'v-dropdown'
  })
export default class VDropdown extends mixins(Themeable, Bemable, Localeable) {
  @Prop({type: String, default: 'hover'}) trigger!: DropdownTrigger

  @Prop({type: String, default: 'bottom-start'}) placement!: string

  appendToBody: boolean = true

  visible: boolean = false

  @Emit('open') emitOpen () {}

  @Emit('close') emitClose () {}

  get options () {
    return {
      placement: this.placement
    }
  }

  @Provide() close () {
    this.visible = false
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) this.emitOpen()
    else this.emitClose()
  }
}
</script>

<style src="./style/v-dropdown.scss" lang="scss"></style>
