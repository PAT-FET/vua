import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { noop } from '../utils'

@Component
export default class Groupable extends Vue {
  groupName: string = this.$options.name || ''

  groupNestedLevel: number = 0

  @Inject({ from: 'addGroupItem', default: () => noop }) injectAddGroupItem!: (item: Groupable) => void

  @Inject({ from: 'removeGroupItem', default: () => noop }) injectRemoveGroupItem!: (item: Groupable) => void

  @Inject({ from: 'inGroup', default: () => () => false }) injectInGroup!: (item: Groupable) => boolean

  @Inject({ from: 'groupNestedLevel', default: () => () => -1 }) injectGroupNestedLevel!: () => number

  // whether belong to a group
  get grouped (): boolean {
    return this.injectInGroup(this)
  }

  joinGroup () {
    this.injectAddGroupItem(this)
    this.groupNestedLevel = this.injectGroupNestedLevel() + 1
  }

  exitGroup () {
    this.injectRemoveGroupItem(this)
    this.groupNestedLevel = 1
  }

  created () {
    this.joinGroup()
  }

  beforeDestroy () {
    this.exitGroup()
  }
}
