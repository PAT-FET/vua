<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Inject, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'

@Component({
  components: {
  },
  name: 'v-sider'
  })
export default class VSider extends mixins(Themeable, Bemable) {
  @Prop(Boolean) collapse!: boolean

  // @Prop({type: String, default: '80px'}) collapseWidth!: string

  // @Prop(String) width!: string

  @Inject() setSider!: (has: boolean) => any

  created () {
    this.setSider(true)
  }

  beforeDestroy () {
    this.setSider(false)
  }
}
</script>
<style lang="scss" src="./style/v-sider.scss"></style>
