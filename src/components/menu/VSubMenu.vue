<template>
<v-expand-transition>
<li :class="[b(), modeCls, activeCls, topCls, disabledCls]">
  <template v-if="this.parsedMode === 'inline'">
    <div :class="[e('title'), activeCls, disabledCls]" :style="[paddingStyle]" @click="onTitleClick">
      <span v-if="$slots.icon" :class="[e('icon')]"><slot name="icon"></slot></span>
      <span v-if="$slots.title" :class="[e('text')]"><slot name="title"></slot></span>
      <i :class="[e('arrow'), openCls]"></i>
    </div>
     <v-expand-transition>
      <ul :class="[e('content')]" v-show="isOpen">
        <slot></slot>
      </ul>
     </v-expand-transition>
  </template>
  <v-popper :visible.sync="visible" :arrow="false" :append-to-body="appendToBody"
   :delay="200"
   :disabled="disabled"
   :trigger="trigger" :options="options" style="display: block;" v-else>
    <div slot="reference" :class="[e('title'), activeCls, collapseCls, topCls, disabledCls]" :style="[paddingStyle]">
      <span v-if="$slots.icon" :class="[e('icon')]"><slot name="icon"></slot></span>
      <span v-if="$slots.title" :class="[e('text'), collapseCls]"><slot name="title"></slot></span>
      <i :class="[e('arrow'), collapseCls]"></i>
    </div>
    <ul :class="[e('content')]" ref="popper">
      <slot></slot>
    </ul>
  </v-popper>
</li>
</v-expand-transition>
</template>
<script lang="ts">
import { Component, Watch, Vue, Provide, Inject, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group, Groupable, CssVariable } from '../../mixins'
import MenuInjector from './mixins/MenuInjector'
import { VPopper, VExpandTransition, VMenuItem, VMenu } from '../../components'
import { ReactiveSet } from '../../utils'
import { MenuCssVariable } from '../..'

@Component({
  components: {
  VPopper,
  VExpandTransition
  },
  name: 'v-sub-menu'
  })
export default class VSubMenu extends mixins(Bemable, MenuInjector, Group, Groupable, CssVariable) {
  @Prop(Boolean) disabled!: boolean

  groupNames: string[] = ['v-menu-item', 'v-sub-menu']

  visible: boolean = false

  openedSubMenuSet = new ReactiveSet<any>()

  @Provide() provideGetOpenedSubMenuSet (): ReactiveSet<any> {
    return this.openedSubMenuSet
  }

  @Provide() provideCascadeOpen (opened?: boolean): void {
    this.open(opened)
    this.cascadeOpen(opened)
  }

  @Provide('close') provideClose () {
    if (this.parsedMode !== 'inline') {
      this.visible = false
      if (this.groupNestedLevel > 0) this.injectClose()
    }
  }

  @Inject({from: 'close', default: () => () => {}}) injectClose!: () => {}

  @Inject('provideGetOpenedSubMenuSet') getOpenedSubMenuSet!: () => ReactiveSet<any>

  @Inject('provideCascadeOpen') cascadeOpen!: (opened?: boolean) => void

  get isCollapsed (): boolean {
    return (this.mode === 'inline' && this.collapse && this.groupNestedLevel === 0)
  }

  get isTop (): boolean {
    return this.groupNestedLevel === 0
  }

  get isActive (): boolean {
    return this.groupItems.some(v => {
      if (v.$options.name === 'v-menu-item') return (v as VMenuItem).selected
      else if (v.$options.name === 'v-sub-menu') return (v as VSubMenu).isActive
      return false
    })
  }

  get isOpen (): boolean {
    return this.getOpenedSubMenuSet().has(this.key)
  }

  get modeCls () {
    return this.parsedMode ? this.m(`mode-${this.parsedMode}`) : ''
  }

  get activeCls (): string {
    return this.isActive ? 'active' : ''
  }

  get openCls (): string {
    return this.isOpen ? 'open' : ''
  }

  get collapseCls () {
    return this.isCollapsed ? 'is-collapse' : ''
  }

  get topCls () {
    return this.isTop ? 'is-top' : ''
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get paddingStyle () {
    if (this.parsedMode === 'inline') {
      return {
        paddingLeft: (this.groupNestedLevel + 1)*1.5 + 'rem'
      }
    }
    return {}
  }

  get options () {
    let placement = 'right-start'
    if (this.mode === 'horizontal' && this.groupNestedLevel === 0) placement = 'bottom'
    return {
      placement: placement
      // positionFixed: false,
    }
  }

  get appendToBody () {
    return this.groupNestedLevel === 0
  }

  onTitleClick () {
    if (this.disabled) return
    this.open()
  }

  open (opened?: boolean) {
    if (this.parsedMode !== 'inline') return
    let ret = opened === undefined ? !this.isOpen : opened
    if (ret) {
      if (this.uniqueOpened) this.getOpenedSubMenuSet().clear()
      this.getOpenedSubMenuSet().add(this.key)
    } else {
      this.getOpenedSubMenuSet().delete(this.key)
    }
  }

  setMenuCssVariable () {
    if (this.isTop && this.parsedMode !== 'inline') {
      this.setCssVariable(this.$el, this.menuCssVariable)
      if (this.$refs.popper) this.setCssVariable(this.$refs.popper, this.menuCssVariable)
    }
  }

  @Watch('menuCssVariable', {deep: true}) menuCssVariableChange (menuCssVariable: MenuCssVariable) {
    this.setMenuCssVariable()
  }

  @Watch('parsedMode') parsedModeChange (parsedMode: string) {
    this.$nextTick().then(() => {
      this.setMenuCssVariable()
    })
  }

  mounted () {
    this.setMenuCssVariable()
  }

  $refs!: {
    popper: HTMLElement
  }
}
</script>
<style lang="scss" src="./style/v-sub-menu.scss"></style>
