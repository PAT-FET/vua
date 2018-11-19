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
import { VMenuItem } from './index'

@Component({
  components: {
  },
  name: 'v-menu'
  })
export default class VMenu extends mixins(Themeable, Bemable, MenuProvider, Select, Group) {
  groupNames: string[] = ['v-sub-menu']

  groupNestedLevel: number = -1

  // overwrite
  resolveSelectedKey (item: VMenuItem) {
    return item.index || item
  }

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

  handleDefaultActive () {
    this.provideSelect(this.defaultActive, true)
  }

  @Watch('uniqueOpened') uniqueOpenedChang (uniqueOpened: boolean) {
    this.multipleActiveItem = !uniqueOpened
  }

  @Watch('defaultActive') defaultActiveChange () {
    this.handleDefaultActive()
  }

  created () {
    this.multipleActiveItem = !this.uniqueOpened
    this.handleDefaultActive()
  }
}
</script>

<style lang="scss" src="./style/v-menu.scss"></style>
