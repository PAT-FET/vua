<template>
<div :class="[b(), typeCls, positionCls]">
  <div :class="[e('bar')]" :style="[backgroundColorStyle]">
    <div :class="[e('nav')]">
      <div :class="[e('tab'), tabActiveCls(tab.name), tabDisabledCls(tab)]"
       :style="[tabBorderColorStyle(tab.name), textColorStyle]"
       v-ripple="ripple"
       v-for="tab in tabPanes" :key="tab.name"
       @click="onTabClick(tab)">
        <span :class="[e('icon')]" v-if="tab.icon"><i class="anticon" :class="[`anticon-${tab.icon}`]"></i></span>
        <span>{{tab.label}}</span>
       </div>
    </div>
  </div>
  <div :class="[e('content')]" :style="[contentAnimateStyle]">
    <slot></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Rippleable from '@/mixins/Rippleable'
import Colorable from '@/mixins/Colorable'
import Group from '@/mixins/Group'
import VTabPane from '@/components/tabs/VTabPane.vue'
import { TabsSize, TabsPosition, TabsType } from './tabs'

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

  @Emit() input (value: string) {}

  multipleActiveItem: boolean = false

  localActiveName: string = ''

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
    return {
      backgroundColor: this.parseColor(this.backgroundColor)
    }
  }

  get textColorStyle () {
    if (!this.textColor) return {}
    return {
      color: this.parseColor(this.textColor)
    }
  }

  tabActiveCls (name: string) {
    if (!name) return ''
    return this.activeName === name ? 'active' : ''
  }

  tabBorderColorStyle (name: string) {
    if (!this.borderColor || !name || this.activeName !== name) return {}
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
}
</script>

<style src="./style/v-tabs.scss" lang="scss"></style>
