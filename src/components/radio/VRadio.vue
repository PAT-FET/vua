<template>
<label :class="[b(), checkedCls, disabledCls]">
  <span :class="[e('inner')]">
    <input type="radio" :class="[e('radio')]" :disabled="disabled" :value="label" @click="onClick">
    <div :class="[e('dot')]" v-ripple="ripple"></div>
  </span>
  <span :class="[e('text')]"><slot></slot></span>
</label>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Rippleable } from '../../mixins'
import { VRadioGroup } from '../..'

@Component({
  components: {
  },
  name: 'v-radio'
  })
export default class VRadio extends mixins(Themeable, Bemable, Rippleable) {
  @Prop({type: [String, Number, Boolean]}) @Model('input') value!: string| number| boolean

  @Prop([String, Boolean, Number]) label!: string | number | boolean

  @Prop(Boolean) disabled!: boolean

  @Emit()input (value: string | number | boolean) {}

  @Inject({default: () => () => null}) getRadioGroup!: () => VRadioGroup | null

  get radioGroup (): VRadioGroup | null {
    let group = this.getRadioGroup()
    if (group && group.$options.name === 'v-radio-group') return group
    return null
  }

  get checked () {
    if (this.radioGroup) {
      return this.radioGroup.value !== undefined && this.radioGroup.value === this.label
    }
    return this.value !== undefined && this.label === this.value
  }

  get checkedCls () {
    return this.checked ? this.m('checked') : ''
  }

  get disabledCls () {
    return this.disabled ? this.m('disabled') : ''
  }

  onClick () {
    if (this.radioGroup) {
      this.radioGroup.input(this.label)
    } else {
      this.input(this.label)
    }
  }

  created () {
    // const $parent = this.$parent
    // if ($parent && $parent.$options.name === 'v-radio-group') {
    //   this.radioGroup = $parent as VRadioGroup
    // }
  }
}
</script>

<style src="./style/v-radio.scss" lang="scss"></style>
