<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'

@Component({
  components: {
  },
  name: 'v-radio-group'
  })
export default class VRadioGroup extends mixins(Themeable, Bemable) {
  @Prop({type: [String, Number, Boolean]}) @Model('input') value!: string| number| boolean

  @Emit() input (value: string | number | boolean) {}
}
</script>

<style src="./style/v-radio-group.scss" lang="scss"></style>
