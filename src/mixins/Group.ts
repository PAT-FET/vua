import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import Groupable from './Groupable'

@Component
export default class Group extends Vue {
  groupNames: string[] = []

  groupItems: Groupable[] = []

  activeGroupItems: Groupable[] = []

  multipleActiveItem: boolean = true

  groupNestedLevel: number = 0

  @Provide('addGroupItem') provideAddGroupItem (item: Groupable) {
    if (this.groupNames.length > 0 && !this.groupNames.includes(item.groupName)) return
    if (this.groupItems.includes(item)) return
    this.groupItems.push(item)
  }

  @Provide('removeGroupItem') provideRemoveGroupItem (item: Groupable) {
    let idx = this.groupItems.findIndex(v => v === item)
    if (idx >= 0) this.groupItems.splice(idx, 1)
    // remove from activeGroup
    idx = this.activeGroupItems.findIndex(v => v === item)
    if (idx >= 0) this.activeGroupItems.splice(idx, 1)
  }

  @Provide('inGroup') provideInGroup (item: Groupable): boolean {
    return this.groupItems.includes(item)
  }

  @Provide('activateGroupItem') provideActivateGroupItem (item: Groupable, multiple?: boolean): void {
    if (!this.groupItems.includes(item)) return
    if (this.activeGroupItems.includes(item)) return
    if (multiple || this.multipleActiveItem) this.activeGroupItems.push(item)
    else this.activeGroupItems = [item]
  }

  @Provide('unactivateGroupItem') provideUnactivateGroupItem (item: Groupable): void {
    let idx = this.activeGroupItems.findIndex(v => v === item)
    if (idx >= 0) this.activeGroupItems.splice(idx, 1)
  }

  @Provide('inActiveGroup') provideInActiveGroup (item: Groupable): boolean {
    return this.activeGroupItems.includes(item)
  }

  @Provide('groupNestedLevel') provideGroupNestedLevel (): number {
    return this.groupNestedLevel
  }
}
