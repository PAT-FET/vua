<template>
<v-button :color="color" :type="type" :disabled="disabled" @click="onClick" :class="[groupCls]"><slot></slot></v-button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { VRadioGroup } from './index'

@Component({
  components: {
  },
  name: 'v-radio-button'
  })
export default class VRadioButton extends mixins(Themeable, Bemable) {
  @Prop({type: [String, Number, Boolean]}) @Model('input') value!: string| number| boolean

  @Prop([String, Boolean, Number]) label!: string | number | boolean

  @Prop(Boolean) disabled!: boolean

  @Emit()input (value: string | number | boolean) {}

  radioGroup: VRadioGroup | null = null

  get checked () {
    if (this.radioGroup) {
      return this.radioGroup.value !== undefined && this.radioGroup.value === this.label
    }
    return this.value !== undefined && this.label === this.value
  }

  get color () {
    if (this.checked) return 'primary'
    return ''
  }

  get type () {
    // if (this.checked) return 'depressed'
    return 'outline'
  }

  get groupCls () {
    return this.radioGroup ? 'input-grouped' : ''
  }

  onClick () {
    if (this.radioGroup) {
      this.radioGroup.input(this.label)
    } else {
      this.input(this.label)
    }
  }

  created () {
    const $parent = this.$parent
    if ($parent && $parent.$options.name === 'v-radio-group') {
      this.radioGroup = $parent as VRadioGroup
    }
  }
}
</script>
