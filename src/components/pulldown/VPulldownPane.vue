<template>
<div :class="[b(), tagCls]">
  <div :class="[e('title'), activeCls]" @click="toggle">
    <div :class="[e('text'), activeCls]"><slot name="title">{{title}}</slot></div>
  </div>

  <v-expand-transition>
    <div :class="[e('content')]" v-show="active && $slots.default">
      <slot></slot>
    </div>
  </v-expand-transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-pulldown-pane'
  })
export default class VPulldownPane extends mixins(Themeable, Bemable, Colorable) {
  @Prop(String) title!: string

  @Prop([String, Number]) index!: string | number

  @Prop(Boolean) tag!: boolean

  @Inject() getValue!: () => string | number

  @Inject() setValue!: (value: string | number) => void

  get value (): string | number {
    return this.getValue()
  }

  set value (value: string | number) {
    this.setValue(value)
  }

  get active (): boolean {
    return !!this.index && this.index === this.value
  }

  get activeCls () {
    return this.active ? 'active' : ''
  }

  get tagCls () {
    return this.tag ? this.m('tag') : ''
  }

  toggle () {
    if (this.active) this.value = ''
    else this.value = this.index
  }
}
</script>

<style src="./style/v-pulldown-pane.scss" lang="scss"></style>
