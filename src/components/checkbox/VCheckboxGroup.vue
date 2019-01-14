<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { CheckboxValue } from './type'

@Component({
  components: {
  },
  name: 'v-checkbox-group'
  })
export default class VCheckboxGroup extends mixins(Themeable, Bemable) {
  @Prop() @Model('input') value!: CheckboxValue

  @Emit() input (value: CheckboxValue) {}

  @Provide() getCheckboxGroup (): VCheckboxGroup | null {
    return this
  }
}
</script>

<style src="./style/v-checkbox-group.scss" lang="scss"></style>
