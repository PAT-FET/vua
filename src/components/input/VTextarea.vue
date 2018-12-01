<template>
    <div :class="[b(), disabledCls]">
      <textarea v-model="model"
          :class="[e('textarea'), disabledCls]"
          :style="[inputPaddingStyle, textareaAutosizeStyle]"
          :disabled="disabled"
          @change="onChange"
          v-bind="$attrs"></textarea>
          <div :class="[e('prefix')]" v-if="hasPrefix"><i class="anticon" :class="[`anticon-${prefix}`]"></i></div>
          <div :class="[e('suffix')]" v-if="hasSuffix"><i class="anticon" :class="[`anticon-${suffix}`]"></i></div>
          <div :class="[e('clear')]" v-if="hasClear" @click="onClear"><i class="anticon anticon-close-circle"></i></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { TextareaAutosizeOption } from './input'
import { getUnitRem } from '@/utils/dom'

@Component({
  components: {
  },
  name: 'v-textarea'
  })
export default class VTextarea extends mixins(Themeable, Bemable) {
  @Prop([String, Number]) value!: string | number

  @Prop(Boolean) disabled!: boolean

  @Prop(String) prefix!: string

  @Prop(String) suffix!: string

  @Prop(Boolean) clearable!: boolean

  @Prop([Boolean, Object]) autosize!: TextareaAutosizeOption & boolean

  @Emit() input (value: string | number) {}

  @Emit() change (value: string | number) {}

  get model (): string | number {
    return this.value
  }

  set model (model: string | number) {
    this.input(model)
  }

  get hasPrefix (): boolean {
    return !!this.prefix
  }

  get hasSuffix (): boolean {
    return !!this.suffix && (!this.hasClear)
  }

  get hasClear (): boolean {
    if (!this.clearable) return false
    if (this.disabled) return false
    if (!this.model) return false
    return true
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get inputPaddingStyle () {
    let ret = {}
    if (this.hasPrefix) Object.assign(ret, { paddingLeft: '1.5rem' })
    if (this.hasSuffix || this.hasClear) Object.assign(ret, { paddingRight: '1.5rem' })
    return ret
  }

  get textareaAutosizeStyle () {
    if (!this.autosize) return {}
    const minRows = (this.autosize && this.autosize.minRows) || 1
    const maxRows = (this.autosize && this.autosize.maxRows) || 1000
    let extra = 4 + 2 // padding + border
    // in order to reactive, should get value from vue, if need it, will improve later
    let lineHeight = 1.5 * getUnitRem() * 0.875
    let currentRow = (this.model + '').split(/\r*\n/).length
    return {
      maxHeight: (extra + lineHeight * maxRows) + 'px',
      minHeight: (extra + lineHeight * minRows) + 'px',
      height: (extra + lineHeight * currentRow) + 'px'
    }
  }

  onChange () {
    this.change(this.model)
  }

  onClear () {
    this.model = ''
  }
}
</script>

<style src="./style/v-textarea.scss" lang="scss"></style>
