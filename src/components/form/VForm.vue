<template>
<div :class="[b(), layoutCls]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import FormProvider from './mixins/FormProvider'

@Component({
  components: {
  },
  name: 'v-form'
  })
export default class VForm extends mixins(Themeable, Bemable, FormProvider) {
  get layoutCls () {
    return this.m(this.layout)
  }
}
</script>

<style src="./style/v-form.scss" lang="scss"></style>
