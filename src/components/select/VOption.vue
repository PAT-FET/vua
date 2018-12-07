<template>
<div :class="[b()]"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Group from '@/mixins/Group'
import Groupable from '@/mixins/Groupable'

@Component({
  components: {
  },
  name: 'v-option'
  })
export default class VOption extends mixins(Themeable, Bemable, Groupable) {
  @Prop(String) label!: string

  @Prop(String) value!: string

  @Prop(Boolean) disabled!: boolean
}
</script>

<style src="./style/v-option.scss" lang="scss"></style>
