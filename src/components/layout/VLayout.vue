<template>
<div :class="[b(), hasSiderCls]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-layout'
  })
export default class VLayout extends mixins(Themeable, Bemable) {
  hasSider: boolean = false

  @Provide() setSider (has: boolean) {
    this.hasSider = has
  }

  get hasSiderCls () {
    return this.hasSider ? this.m('has-sider') : ''
  }
}
</script>

<style lang="scss" src="./style/v-layout.scss"></style>
