<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-radio-group'
  })
export default class VRadioGroup extends mixins(Themeable, Bemable) {
  @Prop({type: [String, Number, Boolean]}) @Model('input') value!: string| number| boolean

  @Emit() input (value: string | number | boolean) {}

  @Provide() getRadioGroup (): VRadioGroup | null {
    return this
  }
}
</script>

<style src="./style/v-radio-group.scss" lang="scss"></style>
