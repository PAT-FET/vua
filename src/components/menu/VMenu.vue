<template>
<ul :class="[b(), modeCls, collapseCls]">
    <slot></slot>
</ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Select, Group } from '../../mixins'
import { MenuMode } from './type'
import MenuProvider from './mixins/MenuProvider'
import MenuTheme from './mixins/MenuTheme'
import { VMenuItem } from './index'
import { ReactiveSet } from '../../utils'

@Component({
  components: {
  },
  name: 'v-menu'
  })
export default class VMenu extends mixins(Bemable, MenuProvider, Select, Group) {
  groupNames: string[] = ['v-sub-menu', 'v-menu-group', 'v-menu-item']

  groupNestedLevel: number = -1

  openedSubMenuSet = new ReactiveSet<any>()

  @Provide() provideGetOpenedSubMenuSet (): ReactiveSet<any> {
    return this.openedSubMenuSet
  }

  @Provide() provideCascadeOpen (opened?: boolean): void {
    // do nothing
  }

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

  @Watch('defaultActive') defaultActiveChange () {
    this.handleDefaultActive()
  }

  created () {
    this.handleDefaultActive()
  }
}
</script>

<style lang="scss" src="./style/v-menu.scss"></style>
