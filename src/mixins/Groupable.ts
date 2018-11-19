import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { noop } from '@/utils/lang'

@Component
export default class Groupable extends Vue {
  groupName: string = this.$options.name || ''

  groupNestedLevel: number = 0

  @Inject({ from: 'addGroupItem', default: () => noop }) injectAddGroupItem!: (item: Groupable) => void

  @Inject({ from: 'removeGroupItem', default: () => noop }) injectRemoveGroupItem!: (item: Groupable) => void

  @Inject({ from: 'inGroup', default: () => () => false }) injectInGroup!: (item: Groupable) => boolean

  @Inject({ from: 'activateGroupItem', default: () => noop }) injectActivateGroupItem!: (item: Groupable, multiple?: boolean) => void

  @Inject({ from: 'unactivateGroupItem', default: () => noop }) injectUnactivateGroupItem!: (item: Groupable) => void

  @Inject({ from: 'inActiveGroup', default: () => () => false }) injectInActiveGroup!: (item: Groupable) => boolean

  @Inject({ from: 'groupNestedLevel', default: () => () => -1 }) injectGroupNestedLevel!: () => number

  // whether belong to a group
  get grouped (): boolean {
    return this.injectInGroup(this)
  }

  // whethwe belong to active group
  get activeGrouped (): boolean {
    return this.injectInActiveGroup(this)
  }

  joinGroup () {
    this.injectAddGroupItem(this)
    this.groupNestedLevel = this.injectGroupNestedLevel() + 1
  }

  exitGroup () {
    this.injectRemoveGroupItem(this)
    this.groupNestedLevel = 1
  }

  joinActiveGroup (multiple?: boolean) {
    this.injectActivateGroupItem(this, multiple)
  }

  exitActiveGroup () {
    this.injectUnactivateGroupItem(this)
  }

  created () {
    this.joinGroup()
  }

  beforeDestroy () {
    this.exitGroup()
  }
}
