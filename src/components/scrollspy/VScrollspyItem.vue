<template>
  <div :class="[b()]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Groupable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-scrollspy-item'
  })
export default class VScrollspyItem extends mixins(Themeable, Bemable, Groupable) {
  @Prop(String) href!: string
}
</script>
<style src="./style/v-scrollspy-item.scss" lang="scss"></style>
