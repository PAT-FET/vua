import Vue from 'vue'
import { hyphenate } from '../utils'
import Component from 'vue-class-component'

@Component
export default class Bemable extends Vue {
  b (block?: string): string {
    if (block) return hyphenate(block)
    if (this.$options.name) return hyphenate(this.$options.name)
    throw new Error('bem: component name required')
  }

  e (ele: string, block?: string): string {
    return this.b(block) + '__' + ele
  }

  m (modifier: string, ele?: string, block?: string): string {
    if (ele) return this.e(ele, block) + '--' + modifier
    return this.b(block) + '--' + modifier
  }
}
