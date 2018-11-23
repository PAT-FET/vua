import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Provide } from 'vue-property-decorator'
import Selectable from './Selectable'

@Component
export default class Select extends Vue {
  @Prop(Boolean) multiple!: boolean

  // in the future, maybe provide a Set instead of Array to improve performance
  selectedItems: any[] = []

  // over write this under specific circumstance
  resolveSelectedKey (item: Selectable): any {
    return item
  }

  @Provide('toggleSelect') provideToggleSelect (item: Selectable) {
    let exist = this.provideIsSelected(item)
    if (exist) this.provideUnselect(item)
    else this.provideSelect(item)
  }

  @Provide('select') provideSelect (item: Selectable| any, isKey?: boolean) {
    let key = isKey ? item : this.resolveSelectedKey(item)
    if (!this.multiple) this.selectedItems = [key]
    else {
      let exist = this.selectedItems.includes(key)
      if (!exist) this.selectedItems.push(key)
    }
  }

  @Provide('unselect') provideUnselect (item: Selectable) {
    let key = this.resolveSelectedKey(item)
    let idx = this.selectedItems.findIndex(v => v === key)
    if (idx >= 0) this.selectedItems.splice(idx, 1)
  }

  @Provide('isSelected') provideIsSelected (item: Selectable): boolean {
    let key = this.resolveSelectedKey(item)
    return this.selectedItems.includes(key)
  }
}
