import Vue from 'vue'
import Component from 'vue-class-component'
import { Provide } from 'vue-property-decorator'
import Groupable from './Groupable'

@Component
export default class Group extends Vue {
  groupNames: string[] = []

  groupItems: Groupable[] = []

  @Provide() register (item: Groupable) {
    if (!this.groupNames.includes(item.groupName)) return
    if (this.groupItems.includes(item)) return
    this.groupItems.push(item)
  }

  @Provide() unregister (item: Groupable) {
    let idx = this.groupItems.findIndex(v => v === item)
    if (idx >= 0) this.groupItems.splice(idx, 1)
  }

  @Provide() inGroup (item: Groupable): boolean {
    return this.groupItems.includes(item)
  }
}
