<template>
<li :class="[b(), modeCls, collapseCls, topCls]">
  <div :class="[e('title'), topCls]" :style="[paddingStyle]"><slot name="title"></slot></div>
  <ul :class="[e('content')]">
    <slot></slot>
  </ul>
</li>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Groupable } from '../../mixins'
import MenuInjector from './mixins/MenuInjector'

@Component({
  components: {
  },
  name: 'v-menu-group'
  })
export default class VMenuGroup extends mixins(Themeable, Bemable, MenuInjector, Groupable) {
  get isCollapsed (): boolean {
    return (this.mode === 'inline' && this.collapse && this.groupNestedLevel === 0)
  }

  get isTop (): boolean {
    return this.groupNestedLevel === 0
  }

  get modeCls () {
    return this.parsedMode ? this.m(`mode-${this.parsedMode}`) : ''
  }

  get collapseCls () {
    return this.isCollapsed ? 'is-collapse' : ''
  }

  get topCls () {
    return this.isTop ? 'is-top' : ''
  }

  get paddingStyle () {
    if (this.parsedMode === 'inline') {
      return {
        paddingLeft: (this.groupNestedLevel + 0.5)*1.5 + 'rem'
      }
    }
    return {}
  }
}
</script>

<style lang="scss" src="./style/v-menu-group.scss"></style>
