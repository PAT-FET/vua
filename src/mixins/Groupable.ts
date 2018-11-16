import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { noop } from '@/utils/lang'

@Component
export default class Groupable extends Vue {
  groupName: string = this.$options.name || ''

  @Inject({ default: () => noop }) register!: (item: Groupable) => void

  @Inject({ default: () => noop }) unregister!: (item: Groupable) => void

  @Inject({ default: () => () => false }) inGroup!: (item: Groupable) => boolean

  // has belong to a group
  get grouped (): boolean {
    return this.inGroup(this)
  }

  created () {
    this.register(this)
  }

  beforeDestroy () {
    this.unregister(this)
  }
}
