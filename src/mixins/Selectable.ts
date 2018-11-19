import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Inject } from 'vue-property-decorator'

@Component
export default class Selectable extends Vue {
  @Inject('toggleSelect') injectToggleSelect!: (item: Selectable) => void

  @Inject('select') injectSelect!: (item: Selectable) => void

  @Inject('unselect') injectUnselect!: (item: Selectable) => void

  @Inject('isSelected') injectIsSelected!: (item: Selectable) =>boolean

  get selected (): boolean {
    return this.injectIsSelected(this)
  }

  select () {
    return this.injectSelect(this)
  }

  unselect () {
    return this.injectUnselect(this)
  }

  toggleSelect () {
    return this.injectToggleSelect(this)
  }
}
