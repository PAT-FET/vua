<template>
<v-button
:class="[activeCls]"
:style="[activeColorStyle, activeFillStyle]"
:color="color"
:type="type"
:disabled="disabled"
@click="onClick" >
  <slot></slot>
</v-button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { VCheckboxGroup } from './index'
import { getDefaultColor } from '@/utils/theme'
import { CheckboxValue, CheckboxLabel } from './checkbox'

@Component({
  components: {
  },
  name: 'v-checkbox-button'
  })
export default class VCheckboxButton extends mixins(Themeable, Bemable) {
  @Prop() @Model('input') value!: CheckboxValue

  @Prop([String, Boolean, Number]) label!: CheckboxLabel

  @Prop(Boolean) disabled!: boolean

  @Prop(String) activeFill!: string

  @Prop(String) activeColor!: string

  @Emit()input (value: CheckboxValue) {}

  checkboxGroup: VCheckboxGroup | null = null

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

  get color () {
    if (this.checked) return 'primary'
    return 'secondary'
  }

  get type () {
    // if (this.checked) return  'outline'
    return 'outline'
  }

  get activeFillStyle () {
    if (!this.activeFill || !this.checked) return {}
    return {
      backgroundColor: (getDefaultColor() as any)[this.activeFill] || this.activeFill
    }
  }

  get activeColorStyle () {
    if (!this.activeColor || !this.checked) return {}
    return {
      color: (getDefaultColor() as any)[this.activeColor] || this.activeColor
    }
  }

  get activeCls () {
    return this.checked ? 'active' : ''
  }

  onClick () {
    if (this.checkboxGroup) {
      if (this.checked) {
        this.checkboxGroup.input((this.model as any[]).filter(v => v !== this.label))
      } else {
        this.checkboxGroup.input([this.label, ...(this.model as any[])])
      }
    } else {
      // do nothing
    }
  }

  created () {
    const $parent = this.$parent
    if ($parent && $parent.$options.name === 'v-checkbox-group') {
      this.checkboxGroup = $parent as VCheckboxGroup
    }
  }
}
</script>
