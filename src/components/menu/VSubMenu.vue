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
      <ul :class="[e('content')]" v-show="visible">
        <slot></slot>
      </ul>
     </v-expand-transition>
  </template>
  <v-popper :visible.sync="visible" :arrow="false" :append-to-body="appendToBody"
   :trigger="trigger" :options="options" style="display: block;" v-else>
    <div slot="reference" :class="[e('title'), activeCls, collapseCls, topCls, disabledCls]" :style="[paddingStyle]">
      <span v-if="$slots.icon" :class="[e('icon')]"><slot name="icon"></slot></span>
      <span v-if="$slots.title" :class="[e('text'), collapseCls]"><slot name="title"></slot></span>
      <i :class="[e('arrow'), collapseCls]"></i>
    </div>
    <ul :class="[e('content')]">
      <slot></slot>
    </ul>
  </v-popper>
</li>
</v-expand-transition>
</template>
<script lang="ts">
import { Component, Watch, Vue, Provide, Inject, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import MenuInjector from './mixins/MenuInjector'
import Group from '@/mixins/Group'
import Groupable from '@/mixins/Groupable'
import { VPopper } from '../popper/index'
import { VExpandTransition } from '../transitions/index'

@Component({
  components: {
  VPopper,
  VExpandTransition
  },
  name: 'v-sub-menu'
  })
export default class VSubMenu extends mixins(Themeable, Bemable, MenuInjector, Group, Groupable) {
  @Prop(Boolean) disabled!: boolean

  @Prop(String) index!: string

  groupNames: string[] = ['v-menu-item', 'v-sub-menu']

  visible: boolean = false

  @Provide('close') provideClose () {
    if (this.parsedMode !== 'inline') {
      this.visible = false
      if (this.groupNestedLevel > 0) this.injectClose()
    }
  }

  @Inject({from: 'close', default: () => () => {}}) injectClose!: () => {}

  get isCollapsed (): boolean {
    return (this.mode === 'inline' && this.collapse && this.groupNestedLevel === 0)
  }

  get isTop (): boolean {
    return this.groupNestedLevel === 0
  }

  get modeCls () {
    return this.parsedMode ? this.m(`mode-${this.parsedMode}`) : ''
  }

  get activeCls (): string {
    return this.activeGroupItems.length > 0 ? 'active' : ''
  }

  get openCls (): string {
    return (this.parsedMode === 'inline' && this.visible) ? 'open' : ''
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

  get isActive (): boolean {
    return this.activeGroupItems.length > 0
  }

  onTitleClick () {
    if (this.parsedMode === 'inline') this.visible = !this.visible
  }

  @Watch('isActive') isActiveChange (isActive: boolean) {
    if (isActive) {
      this.joinActiveGroup()
      if (this.parsedMode === 'inline') this.visible = true
    } else this.exitActiveGroup()
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (this.parsedMode === 'inline' && this.groupNestedLevel === 0) {
      if (visible) this.joinActiveGroup()
      else this.exitActiveGroup()
    }
  }

  @Watch('activeGrouped') activeGroupedChange (activeGrouped: boolean) {
    if (this.uniqueOpened && !activeGrouped && this.groupNestedLevel ===0 && this.parsedMode === 'inline') {
      this.visible = false
    }
  }

  handleDefaultOpeneds () {
    if (!this.index || this.parsedMode !== 'inline') return
    if (this.defaultOpeneds.includes(this.index)) this.visible = true
  }
}
</script>
<style lang="scss" src="./style/v-sub-menu.scss"></style>
