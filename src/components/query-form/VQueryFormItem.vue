<template>
<div :class="[b()]">
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-query-form-item'
  })
export default class VQueryFormItem extends mixins(Themeable, Bemable, Colorable) {
  @Prop(String) name!: string

  @Prop(String) title!: string

  @Inject() isInFormGroup!: () => boolean

  get inGroup (): boolean {
    return this.isInFormGroup()
  }
}
</script>

<style src="./style/v-query-form-item.scss" lang="scss"></style>
