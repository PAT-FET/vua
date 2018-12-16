<template>
<ul :class="[b()]">
  <slot></slot>
</ul>
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
  name: 'v-dropdown-menu'
  })
export default class VDropdownMenu extends mixins(Themeable, Bemable, Localeable) {

}
</script>

<style src="./style/v-dropdown-menu.scss" lang="scss"></style>
