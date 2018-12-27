<template>
<li :class="[b(), modeCls, selectedCls, collapseCls, topCls, disabledCls, darkCls]" :style="[paddingStyle]" @click="onClick">
    <span v-if="$slots.icon" :class="[e('icon')]"><slot name="icon"></slot></span>
    <span :class="[e('text'), collapseCls]"><slot></slot></span>
</li>
</template>
<script lang="ts">
import { Component, Vue, Inject, Watch, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Selectable, Groupable } from '../../mixins'
import MenuInjector from './mixins/MenuInjector'

@Component({
  components: {
  },
  name: 'v-menu-item'
  })
export default class VMenuItem extends mixins(Themeable, Bemable, MenuInjector, Selectable, Groupable) {
  @Prop(Boolean) disabled!: boolean

  @Inject({from: 'close', default: () => () => {}}) injectClose!: () => {}

  @Inject('provideCascadeOpen') cascadeOpen!: (opened?: boolean) => void

  get isCollapsed (): boolean {
    return (this.mode === 'inline' && this.collapse && this.groupNestedLevel === 0)
  }

  get isTop (): boolean {
    return this.groupNestedLevel === 0
  }

  get modeCls () {
    return this.parsedMode ? this.m(`mode-${this.parsedMode}`) : ''
  }

  get selectedCls (): string {
    return this.selected ? 'selected' : ''
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

  onClick () {
    if (this.disabled) return
    this.select()
    if (this.parsedMode !== 'inline' && this.groupNestedLevel > 0) this.injectClose()
  }

  handleSelected (selected: boolean) {
    if (selected && this.parsedMode === 'inline') {
      this.cascadeOpen(true)
    }
  }

  @Watch('selected') selectedChange (selected: boolean) {
    this.handleSelected(selected)
  }

  mounted () {
    this.handleSelected(this.selected)
  }
}
</script>
<style lang="scss" src="./style/v-menu-item.scss"></style>
