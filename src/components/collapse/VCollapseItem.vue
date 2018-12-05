<template>
<div :class="[b(), disabledCls, borderedCls]">
  <div :class="[e('header'), disabledCls]" @click="onClick">
    <span :class="[e('icon'), activeCls]"><i class="anticon anticon-right"></i></span>
    <span>{{title}}</span>
  </div>
  <v-expand-transition>
    <div :class="[e('content')]" v-show="active">
      <div :class="[e('content-box')]"><slot></slot></div>
    </div>
  </v-expand-transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Groupable from '@/mixins/Groupable'
import { VExpandTransition } from '../transitions/index'

@Component({
  components: {
  VExpandTransition
  },
  name: 'v-collapse-item'
  })
export default class VCollapseItem extends mixins(Themeable, Bemable, Groupable) {
  @Prop(String) name!: string

  @Prop(String) title!: string

  @Prop(Boolean) disabled!: boolean

  @Inject() toggle!: (name: string) => void

  @Inject() isActive!: (name: string) => boolean

  @Inject() getBordered!: () => boolean

  get active (): boolean {
    return this.isActive(this.name)
  }

  get activeCls () {
    return this.active ? 'active' : ''
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get borderedCls () {
    return this.getBordered() ? this.m('bordered') : ''
  }

  onClick () {
    this.toggle(this.name)
  }
}
</script>

<style src="./style/v-collapse-item.scss" lang="scss"></style>
