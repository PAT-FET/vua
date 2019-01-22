<template>
<div :class="[b()]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { QueryFormTag, QueryFormTagFn } from './type'

@Component({
  components: {
  },
  name: 'v-query-form-item'
  })
export default class VQueryFormItem extends mixins(Themeable, Bemable) {
  @Prop(String) name!: string

  @Prop(String) title!: string

  @Prop(Function) tagFn!: QueryFormTagFn

  @Inject() getForm!: () => any

  @Inject() addItem!: (item: VQueryFormItem) => void

  @Inject() removeItem!: (item: VQueryFormItem) => void

  get form (): any {
    return this.getForm()
  }

  get tags (): QueryFormTag[] {
    let param = {
      form: this.form,
      name: this.name,
      title: this.title
    }
    return (this.tagFn && this.tagFn(param)) || []
  }

  created () {
    this.addItem(this)
  }

  beforeDestroy () {
    this.removeItem(this)
  }
}
</script>

<style src="./style/v-query-form-item.scss" lang="scss"></style>
