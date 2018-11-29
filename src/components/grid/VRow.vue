<template>
<div :class="[b()]" :style="[gutterStyle, alignStyle, justifyStyle]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { VCol } from '../..'

@Component({
  components: {
  },
  name: 'v-row'
  })
export default class VRow extends mixins(Themeable, Bemable) {
  @Prop(Number) gutter!: number

  @Prop({type: String, default: 'flex-start'}) align!: string

  @Prop({type: String, default: 'flex-start'}) justify!: string

  @Provide('gutter') provideGutter () {
    return this.gutter
  }

  get alignStyle () {
    return {
      alignItems: this.align
    }
  }

  get justifyStyle () {
    return {
      justifyContent: this.justify
    }
  }

  get gutterStyle () {
    if (this.gutter) {
      return {
        marginLeft: `-${this.gutter/2}px`,
        marginRight: `-${this.gutter/2}px`
      }
    }
    return {}
  }
}
</script>
<style lang="scss" src="./style/v-row.scss"></style>
