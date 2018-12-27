<template>
<div :class="[b(), typeCls, positionCls, sizeCls]">
  <div :class="[e('bar')]" :style="[backgroundColorStyle]">
    <div :class="[e('nav-scroll'), navScrollHasArrowCls]">
      <div :class="[e('nav')]" :style="[justifyStyle]" ref="nav">
        <div :class="[e('tab'), tabActiveCls(tab.name), tabDisabledCls(tab)]"
        :style="[tabBorderColorStyle(tab.name), textColorStyle, justifyStyle]"
        v-ripple="ripple"
        v-for="tab in tabPanes" :key="tab.name"
        @click="onTabClick(tab)">
          <span :class="[e('icon')]" v-if="tab.icon"><i class="anticon" :class="[`anticon-${tab.icon}`]"></i></span>
          <span>{{tab.label}}</span>
          <span :class="[e('close')]" v-if="isClosable" @click.stop="onClose(tab)"><i class="anticon anticon-close"></i></span>
        </div>
      </div>
      <div :class="[e('arrow-left'), leftArrowDisabledCls]" v-if="hasArrow" @click="onMove(-1)"><i class="anticon anticon-left"></i></div>
      <div :class="[e('arrow-right'), rightArrowDisabledCls]" v-if="hasArrow" @click="onMove(1)"><i class="anticon anticon-right"></i></div>
    </div>
    <div :class="[e('extra')]" v-if="$slots.extra"><slot name="extra"></slot></div>
  </div>
  <div :class="[e('content')]" :style="[contentAnimateStyle]">
    <slot></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Rippleable, Colorable, Group } from '../../mixins'
import { VTabPane } from './index'
import { TabsSize, TabsPosition, TabsType } from './type'
import { VNode } from 'vue'

@Component({
  components: {
  },
  name: 'v-tabs'
  })
export default class VTabs extends mixins(Themeable, Bemable, Group, Rippleable, Colorable) {
  @Prop(String) @Model('input') value!: string

  @Prop({type: String, default: 'md'}) size!: TabsSize

  @Prop({type: String, default: 'top'}) position!: TabsPosition

  @Prop({type: String, default: 'line'}) type!: TabsType

  @Prop(String) backgroundColor!: string

  @Prop(String) textColor!: string

  @Prop(String) borderColor!: string

  @Prop(String) justify!: string

  @Prop(Boolean) closable!: boolean

  @Emit() input (value: string) {}

  multipleActiveItem: boolean = false

  localActiveName: string = ''

  hasArrow: boolean = false

  rightArrowDisabled: boolean = false

  leftArrowDisabled: boolean = false

  get tabPanes (): VTabPane[] {
    return this.groupItems as VTabPane[]
  }

  get activeName () {
    if (this.value !== undefined) return this.value
    return this.localActiveName
  }

  set activeName (name: string) {
    this.localActiveName = name
    this.input(name)
  }

  get isClosable () {
    return this.closable && this.type === 'card'
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get typeCls () {
    return this.m(`type-${this.type}`)
  }

  get positionCls () {
    return this.m(this.position)
  }

  get contentAnimateStyle () {
    if (this.position !== 'top' && this.position !== 'bottom') return {}
    let idx = this.tabPanes.findIndex(v => (!!v.name && v.name === this.activeName))
    if (idx >= 0) {
      return {
        marginLeft: `-${idx * 100}%`
      }
    }
    return {}
  }

  get backgroundColorStyle () {
    if (!this.backgroundColor) return {}
    if (this.type === 'card') return // hasn't handle this for now
    return {
      backgroundColor: this.parseColor(this.backgroundColor)
    }
  }

  get textColorStyle () {
    if (!this.textColor) return {}
    if (this.type === 'card') return // hasn't handle this for now
    return {
      color: this.parseColor(this.textColor)
    }
  }

  get justifyStyle () {
    if (!this.justify) return {}
    return {
      justifyContent: this.justify
    }
  }

  get navScrollHasArrowCls () {
    return this.hasArrow ? 'has-arrow' : ''
  }

  get leftArrowDisabledCls () {
    return this.leftArrowDisabled ? 'disabled' : ''
  }

  get rightArrowDisabledCls () {
    return this.rightArrowDisabled ? 'disabled' : ''
  }

  tabActiveCls (name: string) {
    if (!name) return ''
    return this.activeName === name ? 'active' : ''
  }

  tabBorderColorStyle (name: string) {
    if (!this.borderColor || !name || this.activeName !== name) return {}
    if (this.type === 'card') return // hasn't handle this for now
    return {
      borderColor: this.parseColor(this.borderColor)
    }
  }

  tabDisabledCls (tab: VTabPane) {
    return tab.disabled ? 'disabled' : ''
  }

  @Provide() getActiveName () {
    return this.activeName
  }

  @Provide() getPosition () {
    return this.position
  }

  onTabClick (tab: VTabPane) {
    this.activeName = tab.name
  }

  onClose (tab: VTabPane) {
    let idx = this.tabPanes.findIndex(v => v === tab || v.name === tab.name)
    if (idx >= 0) this.tabPanes.splice(idx, 1)
  }

  onMove (dir: number) {
    let step = 50
    let scrollLeft = this.$refs.nav.scrollLeft
    let scrollWidth = this.$refs.nav.scrollWidth
    let offsetWidth = this.$refs.nav.offsetWidth
    let value = 0
    if (dir < 0) { // left
      value = scrollLeft - step
    } else {
      value = scrollLeft + step
    }
    if (value <= 0) value = 0
    if (value >= (scrollWidth - offsetWidth)) value = scrollWidth - offsetWidth
    this.$refs.nav.scrollLeft = value
    this.updateArrow()
  }

  updateArrow () {
    let scrollWidth = this.$refs.nav.scrollWidth
    let offsetWidth = this.$refs.nav.offsetWidth
    let scrollLeft = this.$refs.nav.scrollLeft
    if (scrollWidth - offsetWidth > 0) {
      this.hasArrow = true
    } else {
      this.hasArrow = false
      return
    }
    if (scrollLeft <= 0) this.leftArrowDisabled = true
    else this.leftArrowDisabled = false
    if (scrollLeft >= scrollWidth - offsetWidth) this.rightArrowDisabled = true
    else this.rightArrowDisabled = false
  }

  updated () {
    this.updateArrow()
  }

  $refs!: {
    nav: HTMLElement
  }

  $slots!: {
    extra: VNode[]
  }
}
</script>

<style src="./style/v-tabs.scss" lang="scss"></style>
