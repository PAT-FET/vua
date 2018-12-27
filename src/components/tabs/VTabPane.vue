<template>
<div :class="[b(), inactiveCls, positionCls]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Groupable } from '../../mixins'
import { TabsPosition } from './type'

@Component({
  components: {
  },
  name: 'v-tab-pane'
  })
export default class VTabPane extends mixins(Themeable, Bemable, Groupable) {
  @Prop(String) name!: string

  @Prop(String) label!: string

  @Prop(Boolean) disabled!: boolean

  @Prop(String) icon!: string

  @Inject() getActiveName!: () => string

  @Inject() getPosition!: () => TabsPosition

  get active (): boolean {
    return !!this.name && this.name === this.getActiveName()
  }

  get position (): TabsPosition {
    return this.getPosition()
  }

  get inactiveCls () {
    return this.active ? '' : this.m('inactive')
  }

  get positionCls () {
    return this.m(this.position)
  }
}
</script>

<style src="./style/v-tabs-pane.scss" lang="scss"></style>
