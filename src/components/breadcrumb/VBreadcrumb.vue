<template>
<div :class="[b()]">
  <slot></slot>
  <span hidden><slot name="separator"></slot></span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-breadcrumb'
  })
export default class VBreadcrumb extends mixins(Themeable, Bemable) {
  @Prop({type: String, default: '/'}) separator!: string

  @Provide() getBreadcrumb (): VBreadcrumb {
    return this
  }
}
</script>

<style src="./style/v-breadcrumb.scss" lang="scss"></style>
