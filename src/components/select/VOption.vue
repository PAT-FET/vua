<template>
<div :class="[b()]"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group, Groupable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-option'
  })
export default class VOption extends mixins(Themeable, Bemable, Groupable) {
  @Prop() label!: string

  @Prop() value!: string

  @Prop(Boolean) disabled!: boolean
}
</script>

<style src="./style/v-option.scss" lang="scss"></style>
