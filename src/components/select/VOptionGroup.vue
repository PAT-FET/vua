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
  name: 'v-option-group'
  })
export default class VOptionGroup extends mixins(Themeable, Bemable) {
  @Prop(String) title!: string
}
</script>

<style src="./style/v-option-group.scss" lang="scss"></style>
