<template>
<label :class="[b(), checkedCls, disabledCls, indeterminateCls]" tabindex="0">
  <span :class="[e('inner')]">
    <input v-model="model" type="checkbox" :class="[e('checkbox')]" :disabled="disabled" :value="label" @change="onChange">
    <div :class="[e('dot')]" v-ripple="ripple"></div>
  </span>
  <span :class="[e('text')]" v-if="$slots.default"><slot></slot></span>
</label>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Rippleable } from '../../mixins'
import { CheckboxValue, CheckboxLabel } from './type'
import { VCheckboxGroup } from '../..'

@Component({
  components: {
  },
  name: 'v-checkbox'
  })
export default class VCheckbox extends mixins(Themeable, Bemable, Rippleable) {
  @Prop() @Model('input') value!: CheckboxValue

  @Prop([String, Boolean, Number]) label!: CheckboxLabel

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) indeterminate!: boolean

  @Emit()input (value: CheckboxValue) {}

  @Emit() change (value: string) {}

  @Inject({default: () => () => null}) getCheckboxGroup!: () => VCheckboxGroup | null

  get checkboxGroup (): VCheckboxGroup | null {
    let group = this.getCheckboxGroup()
    if (group && group.$options.name === 'v-checkbox-group') {
      return group
    }
    return null
  }

  get model (): CheckboxValue {
    if (this.checkboxGroup) {
      return this.checkboxGroup.value
    } else {
      return this.value
    }
  }

  set model (value: CheckboxValue) {
    if (this.checkboxGroup) {
      this.checkboxGroup.input(value)
    } else {
      this.input(value)
    }
  }

  get checked () {
    if (Array.isArray(this.model)) {
      return (this.model as any[]).includes(this.label)
    } else {
      return !!this.model
    }
  }

  get checkedCls () {
    return this.checked ? this.m('checked') : ''
  }

  get disabledCls () {
    return this.disabled ? this.m('disabled') : ''
  }

  get indeterminateCls () {
    return this.indeterminate ? this.m('indeterminate') : ''
  }

  onChange (e: any) {
    this.change(e && e.target.value)
  }

  created () {
    // const $parent = this.$parent
    // if ($parent && $parent.$options.name === 'v-checkbox-group') {
    //   this.checkboxGroup = $parent as VCheckboxGroup
    // }
  }
}
</script>

<style src="./style/v-checkbox.scss" lang="scss"></style>
