import Vue from 'vue'
import { hyphenate } from '@/utils/lang'
import Component from 'vue-class-component'

@Component
export default class Bemable extends Vue {
  b (block?: string): string {
    return hyphenate((block || this.constructor.name))
  }

  e (ele: string, block?: string): string {
    return this.b(block) + '__' + ele
  }

  m (modifier: string, ele?: string, block?: string): string {
    if (ele) return this.e(ele, block) + '--' + modifier
    return this.b(block) + '--' + modifier
  }
}
