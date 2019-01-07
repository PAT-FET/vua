<template>
<div :class="[b(), coloredCls]">
  <div :class="[e('avatar')]">
    <slot name="avatar"></slot>
  </div>
  <div :class="[e('content')]">
    <div :class="[e('title')]">
      <slot name="title">{{title}}</slot>
    </div>
    <div :class="[e('description')]">
       <slot name="description">{{description}}</slot>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-list-item-meta'
  })
export default class VListItemMeta extends mixins(Themeable, Bemable) {
  @Prop(String) title!: string

  @Prop(String) description!: string

  @Prop(Boolean) colored!: boolean

  get coloredCls () {
    return this.colored ? this.m('colored') : ''
  }
}
</script>

<style src="./style/v-list-item-meta.scss" lang="scss"></style>
