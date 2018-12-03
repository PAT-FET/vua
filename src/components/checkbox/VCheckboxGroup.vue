<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { CheckboxValue } from '@/components/checkbox/checkbox'

@Component({
  components: {
  },
  name: 'v-checkbox-group'
  })
export default class VCheckboxGroup extends mixins(Themeable, Bemable) {
  @Prop() @Model('input') value!: CheckboxValue

  @Emit() input (value: CheckboxValue) {}
}
</script>

<style src="./style/v-checkbox-group.scss" lang="scss"></style>
