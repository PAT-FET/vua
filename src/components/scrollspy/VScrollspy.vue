<template>
<div :class="[b()]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-scrollspy'
  })
export default class VScrollspy extends mixins(Themeable, Bemable, Group) {
  @Prop(String) container!: string

  @Prop({type: Number, default: 0}) offset!: number
}
</script>

<style src="./style/v-scrollspy.scss" lang="scss"></style>
