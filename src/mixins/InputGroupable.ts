import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class InputGroupable extends Vue {
  inputGrouped: boolean = false

  get inputGroupedCls () {
    return this.inputGrouped ? 'input-grouped' : ''
  }
}
