import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Provide } from 'vue-property-decorator'
import Selectable from './Selectable'

@Component
export default class Select extends Vue {
  @Prop(Boolean) multiple!: boolean

  // in the future, maybe provide a Set instead of Array to improve performance
  selectedItems: Selectable[] = []

  @Provide('toggleSelect') provideToggleSelect (item: Selectable) {
    let exist = this.selectedItems.includes(item)
    if (exist) this.provideUnselect(item)
    else this.provideSelect(item)
  }

  @Provide('select') provideSelect (item: Selectable) {
    if (!this.multiple) this.selectedItems = [item]
    else {
      let exist = this.selectedItems.includes(item)
      if (!exist) this.selectedItems.push(item)
    }
  }

  @Provide('unselect') provideUnselect (item: Selectable) {
    let idx = this.selectedItems.findIndex(v => v === item)
    if (idx >= 0) this.selectedItems.splice(idx, 1)
  }

  @Provide('isSelected') provideIsSelected (item: Selectable): boolean {
    return this.selectedItems.includes(item)
  }
}
