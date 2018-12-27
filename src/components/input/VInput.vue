<template>
    <div :class="[b(), sizeCls, disabledCls, blockCls, hasPrependCls, hasApppendCls]">
      <div :class="[e('inner')]">
        <div :class="[e('prepend')]" v-if="hasPrepend">{{prepend}}</div>
        <div :class="[e('input-wrap'), hasClearCls]">
          <input v-model="model"
          :class="[e('input'), disabledCls, separatorCls]"
          :style="[inputPaddingStyle]"
          :disabled="disabled"
          @change="onChange"
          @focus="focus()"
          @blur="blur()"
          v-bind="$attrs">
          <div :class="[e('prefix')]" v-if="hasPrefix"><slot name="prefix"><i class="anticon" :class="[`anticon-${prefix}`]"></i></slot></div>
          <div :class="[e('suffix')]" v-if="hasSuffix"><slot name="suffix"><i class="anticon" :class="[`anticon-${suffix}`]"></i></slot></div>
          <div :class="[e('clear')]" v-if="hasClear" @click.stop="onClear"><i class="anticon anticon-close-circle"></i></div>
        </div>
        <div :class="[e('append')]" v-if="hasAppend">{{append}}</div>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { InputSize } from './type'
import { VNode } from 'vue'
import { debounce } from '../../utils'

@Component({
  components: {
  },
  name: 'v-input'
  })
export default class VInput extends mixins(Themeable, Bemable) {
  @Prop([String, Number]) value!: string | number

  @Prop({type: String, default: 'md'}) size!: InputSize

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) block!: boolean

  @Prop(String) prepend!: string

  @Prop(String) append!: string

  @Prop(String) prefix!: string

  @Prop(String) suffix!: string

  @Prop(Boolean) clearable!: boolean

  @Prop(Boolean) separator!: boolean

  @Prop(Number) debounce!: number

  @Emit() input (value: string | number) {}

  @Emit() change (value: string | number) {}

  @Emit() focus () {}

  @Emit() blur () {}

  @Emit() clear () {}

  debounceFn = this.debounce ? debounce(this.input, this.debounce, null) : null

  get model (): string | number {
    return this.value
  }

  set model (model: string | number) {
    if (this.debounceFn) {
      this.debounceFn(model)
    } else {
      this.input(model)
    }
  }

  get hasPrepend (): boolean {
    return !!this.prepend
  }

  get hasAppend (): boolean {
    return !!this.append
  }

  get hasPrefix (): boolean {
    return !!this.prefix || !!this.$slots.prefix
  }

  get hasSuffix (): boolean {
    return (!!this.suffix || !!this.$slots.suffix)
  }

  get hasClear (): boolean {
    if (!this.clearable) return false
    if (this.disabled) return false
    if (!this.model) return false
    return true
  }

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get blockCls () {
    return this.block ? this.m('block') : ''
  }

  get inputPaddingStyle () {
    let ret = {}
    if (this.hasPrefix) Object.assign(ret, { paddingLeft: '1.5rem' })
    if (this.hasSuffix || this.hasClear) Object.assign(ret, { paddingRight: '1.5rem' })
    return ret
  }

  get hasPrependCls () {
    return this.hasPrepend ? this.m('has-prepend') : ''
  }

  get hasApppendCls () {
    return this.hasAppend ? this.m('has-append') : ''
  }

  get separatorCls () {
    return this.separator ? 'separator' : ''
  }

  get hasClearCls () {
    return this.hasClear ? 'has-clear' : ''
  }

  onChange (e: Event) {
    this.change((e.target as any).value)
  }

  onClear () {
    this.model = ''
    this.clear()
  }

  @Watch('debounce') debounceChange (newVal: number) {
    if (this.debounceFn) this.debounceFn.cancel()
    if (!newVal) this.debounceFn = null
    else this.debounceFn = debounce(this.input, this.debounce, null)
  }

  $slots!: {
    suffix: VNode[],
    prefix: VNode[]
  }
}
</script>

<style src="./style/v-input.scss" lang="scss"></style>
