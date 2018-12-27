import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import Groupable from './Groupable'

@Component
export default class Group extends Vue {
  groupNames: string[] = []

  groupItems: Groupable[] = []

  groupNestedLevel: number = 0

  @Provide('addGroupItem') provideAddGroupItem (item: Groupable) {
    if (this.groupNames.length > 0 && !this.groupNames.includes(item.groupName)) return
    if (this.groupItems.includes(item)) return
    this.groupItems.push(item)
  }

  @Provide('removeGroupItem') provideRemoveGroupItem (item: Groupable) {
    let idx = this.groupItems.findIndex(v => v === item)
    if (idx >= 0) this.groupItems.splice(idx, 1)
  }

  @Provide('inGroup') provideInGroup (item: Groupable): boolean {
    return this.groupItems.includes(item)
  }

  @Provide('groupNestedLevel') provideGroupNestedLevel (): number {
    return this.groupNestedLevel
  }
}
