<template>
<li :class="[b(), disabledCls, dividerCls]" @click="onClick">
  <slot></slot>
</li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Localeable } from '../../mixins'
import { DropdownTrigger } from './type'

@Component({
  components: {
  },
  name: 'v-dropdown-item'
  })
export default class VDropdownItem extends mixins(Themeable, Bemable, Localeable) {
  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) divider!: boolean

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get dividerCls () {
    return this.divider ? this.m('divider') : ''
  }

  @Inject() close!: () => void

  onClick () {
    if (!this.disabled) this.close()
  }
}
</script>

<style src="./style/v-dropdown-item.scss" lang="scss"></style>
