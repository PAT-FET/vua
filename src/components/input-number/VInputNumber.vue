<template>
  <div :class="[b()]">
    <v-input :value="renderValue"
     :size="size"
     :disabled="disabled"
     @keydown.up.native.prevent="add"
     @keydown.down.native.prevent="subtract"
     v-bind="$attrs"
     style="width: 100%;"
     @change="onChange"></v-input>

    <div :class="[e('controls')]">
      <div :class="[e('control-up'), addDisabledCls]" @click="add"><i class="anticon anticon-up"></i></div>
      <div :class="[e('control-down'), subtractDisabledCls]" @click="subtract"><i class="anticon anticon-down"></i></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { VInput } from '../input'
import { InputNumberSize } from './type'
import { fireEvent } from '../../utils/dom'

@Component({
  components: {
  VInput
  },
  name: 'v-input-number'
  })
export default class VInputNumber extends mixins(Themeable, Bemable) {
  @Prop() value!: number | null

  @Prop([ Number]) max!: number

  @Prop([ Number]) min!: number

  @Prop({type: Number, default: 1}) step!: number

  @Prop([ Number]) precision!: number

  // @Prop(String) placeholder!: string

  @Prop({type: String, default: 'md'}) size!: InputNumberSize

  @Prop(Boolean) disabled!: boolean

  @Emit() input (value: number | null) {
    this.change(value)
  }

  @Emit() change (value: number | null) {
    fireEvent(this.$el, 'change')
  }

  get actualValue (): number {
    let num: number = (this.value !== 0 && !this.value) ? 0 : +this.value
    if (this.precision !== undefined) num = +num.toFixed(this.precision)
    return num
  }

  get renderValue (): string {
    if (this.value === null) return ''
    return this.actualValue + ''
  }

  get addDisabled (): boolean {
    return this.max !== undefined && this.actualValue >= this.max
  }

  get subtractDisabled (): boolean {
    return this.min !== undefined && this.actualValue <= this.min
  }

  get addDisabledCls () {
    return this.addDisabled ? 'disabled' : ''
  }

  get subtractDisabledCls () {
    return this.subtractDisabled ? 'disabled' : ''
  }

  onChange (value: string) {
    if (isNaN(value as any)) {
      this.input(this.actualValue)
      this.$forceUpdate()
      return
    }
    if (!value) {
      this.input(null)
      this.$forceUpdate()
      return
    }
    let num = +value
    if (this.max !== undefined && num > this.max) num = this.max
    if (this.min !== undefined && num < this.min) num = this.min
    if (this.precision !== undefined) num = +num.toFixed(this.precision)
    this.input(num)
    this.$forceUpdate()
  }

  add () {
    let num = this.actualValue + this.step
    if (this.max !== undefined && num > this.max) num = this.max
    this.input(num)
  }

  subtract () {
    let num = this.actualValue - this.step
    if (this.min !== undefined && num < this.min) num = this.min
    this.input(num)
  }
}
</script>

<style src="./style/v-input-number.scss" lang="scss"></style>
