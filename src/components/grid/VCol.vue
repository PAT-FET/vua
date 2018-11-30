<template>
<div :class="[b(), bpCls]" :style="[gutterStyle]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit, Inject } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { GridBreakpointOption } from './grid'

@Component({
  components: {
  },
  name: 'v-col'
  })
export default class VCol extends mixins(Themeable, Bemable) {
  @Prop(Number) offset!: number

  @Prop(Number) order!: number

  @Prop(Number) pull!: number

  @Prop(Number) push!: number

  @Prop(Number) span!: number

  @Prop([Number, Object]) xs!: GridBreakpointOption | number

  @Prop([Number, Object]) sm!: GridBreakpointOption | number

  @Prop([Number, Object]) md!: GridBreakpointOption | number

  @Prop([Number, Object]) lg!: GridBreakpointOption | number

  @Prop([Number, Object]) xl!: GridBreakpointOption | number

  @Inject() gutter!: () => number

  get bpCls (): string[] {
    return [
      ...this.makeBpCls('span'),
      ...this.makeBpCls('offset'),
      ...this.makeBpCls('order'),
      ...this.makeBpCls('pull'),
      ...this.makeBpCls('push')
    ]
  }

  get gutterStyle () {
    let gutter = this.gutter()
    if (!gutter) return {}
    return {
      paddingLeft: gutter/2 + 'px',
      paddingRight: gutter/2 + 'px'
    }
  }

  makeBpCls (name: 'offset' | 'order' | 'pull' | 'push' | 'span') {
    let ret: string[] = []
    const vm = this
    if (this[name] !== undefined) ret.push(this.m(`${name}-${this[name]}`))
    one('xs')
    one('sm')
    one('md')
    one('lg')
    one('xl')
    return ret
    function one (bp: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
      if (vm[bp] !== undefined) {
        let t = (typeof vm[bp] === 'number' ? { span: vm[bp] } : vm[bp]) as GridBreakpointOption
        if (t[name] !== undefined) ret.push(vm.m(`${bp}-${name}-${t[name]}`))
      }
    }
  }
}
</script>
<style lang="scss" src="./style/v-col.scss"></style>
