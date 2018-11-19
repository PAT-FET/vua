<template>
<li :class="[b(), modeCls, selectedCls, collapseCls, topCls, disabledCls]" :style="[paddingStyle]" @click="onClick">
    <span v-if="$slots.icon" :class="[e('icon')]"><slot name="icon"></slot></span>
    <span :class="[e('text'), collapseCls]"><slot></slot></span>
</li>
</template>
<script lang="ts">
import { Component, Vue, Inject, Watch, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import Selectable from '@/mixins/Selectable'
import MenuInjector from './mixins/MenuInjector'
import Groupable from '@/mixins/Groupable'

@Component({
  components: {
  },
  name: 'v-menu-item'
  })
export default class VMenuItem extends mixins(Themeable, Bemable, MenuInjector, Selectable, Groupable) {
  @Prop(Boolean) disabled!: boolean

  @Prop(String) index!: string

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
    this.select()
    if (this.parsedMode !== 'inline' && this.groupNestedLevel > 0) this.injectClose()
  }

  handleDefaultActive () {
    if (!this.defaultActive || !this.index) return
    if (this.defaultActive === this.index) this.select()
  }

  @Watch('selected') selectedChange (selected: boolean) {
    if (selected) this.joinActiveGroup()
    else {
      this.$nextTick().then(() => {
        this.exitActiveGroup()
      })
    }
  }

  @Watch('defaultActive') defaultActiveChange () {
    this.handleDefaultActive()
  }

  created () {
    this.handleDefaultActive()
  }
}
</script>
<style lang="scss" src="./style/v-menu-item.scss"></style>
