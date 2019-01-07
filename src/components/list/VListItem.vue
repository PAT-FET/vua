<template>
  <div :class="[b(), layoutCls]">
    <div :class="[e('main')]">
      <div :class="[e('meta')]" v-if="$slots.meta"><slot name="meta"></slot></div>
      <div :class="[e('content')]"><slot></slot></div>
      <div :class="[e('action')]" v-if="$slots.action"><slot name="action"></slot></div>
    </div>
    <div :class="[e('extra')]" v-if="$slots.extra"><slot name="extra"></slot></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { ListItemLayout } from './type'

@Component({
  components: {
  },
  name: 'v-list-item'
  })
export default class VListItem extends mixins(Themeable, Bemable) {
  @Inject() getLayout!: () => ListItemLayout

  get actualLayout () {
    return this.getLayout() || 'horizontal'
  }

  get layoutCls () {
    return this.m(this.actualLayout)
  }
}
</script>

<style src="./style/v-list-item.scss" lang="scss"></style>
