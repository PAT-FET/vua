<template>
<ul :class="[b(), modeCls, collapseCls]">
    <slot></slot>
</ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import Select from '@/mixins/Select'
import { MenuMode } from './menu'
import MenuProvider from './mixins/MenuProvider'
import Group from '@/mixins/Group'

@Component({
  components: {
  },
  name: 'v-menu'
  })
export default class VMenu extends mixins(Themeable, Bemable, MenuProvider, Select, Group) {
  groupNames: string[] = ['v-sub-menu']

  groupNestedLevel: number = -1

  get parsedMode (): string {
    if (this.mode === 'inline' && this.collapse) return 'vertical'
    return this.mode
  }

  get modeCls () {
    return this.parsedMode ? this.m(`mode-${this.parsedMode}`) : ''
  }

  get collapseCls () {
    return (this.mode === 'inline' && this.collapse) ? this.m('collapse') : ''
  }

  @Watch('uniqueOpened') uniqueOpenedChang (uniqueOpened: boolean) {
    this.multipleActiveItem = !uniqueOpened
  }

  created () {
    this.multipleActiveItem = !this.uniqueOpened
  }
}
</script>

<style lang="scss" src="./style/v-menu.scss"></style>
