<template>
<v-button
:class="[activeCls]"
v-bind="$attrs"
:disabled="disabled"
@click="onClick" >
  <slot></slot>
</v-button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { VCheckboxGroup } from './index'
import { getDefaultColor } from '../..//utils/theme'
import { CheckboxValue, CheckboxLabel } from './type'

@Component({
  components: {
  },
  name: 'v-checkbox-button'
  })
export default class VCheckboxButton extends mixins(Themeable, Bemable) {
  @Prop() @Model('input') value!: CheckboxValue

  @Prop([String, Boolean, Number]) label!: CheckboxLabel

  @Prop(Boolean) disabled!: boolean

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
    this.$nextTick().then(() => {
      this.$el.blur()
    })
  }

  created () {
    const $parent = this.$parent
    if ($parent && $parent.$options.name === 'v-checkbox-group') {
      this.checkboxGroup = $parent as VCheckboxGroup
    }
  }
}
</script>
