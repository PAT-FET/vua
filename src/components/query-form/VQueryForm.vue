<template>
<div :class="[b()]">
  <div :class="[e('header')]">
    <div :class="[e('header-tags')]">
      <v-tag shape="round" color="primary" v-for="(tag, i) in tags" :key="tag.title+i" closable @close="onTagClose(tag)">
        <span class="caption">{{tag.title}} : </span> <span class="text-primary mr-2">{{tag.text}}</span>
      </v-tag>
    </div>
    <div :class="[e('header-extra')]">
      <slot name="extra"></slot>
    </div>
  </div>
  <div :class="[e('body')]">
    <v-form ref="form" :model="form" v-bind="formProps">
      <slot></slot>
    </v-form>
  </div>
  <div :class="[e('footer')]"></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'
import { QueryFormOptions, QueryFormTag } from './type'
import { ReactiveSet } from '../../utils'
import { VQueryFormItem } from './index'
import { VForm } from '../form/index'

@Component({
  components: {
  },
  name: 'v-query-form'
  })
export default class VQueryForm extends mixins(Themeable, Bemable, Colorable) {
  @Prop() form!: any

  @Prop() formProps!: any

  items: VQueryFormItem[] = []

  savedForm: any = null

  @Emit('update:form') updateForm (form: any) {}

  @Emit() submit (form: any) {}

  @Emit() close (tag: QueryFormTag) {}

  get tags (): QueryFormTag[] {
    let ret: QueryFormTag[] = []
    this.items.forEach(v => {
      ret.push(...v.tags)
    })
    return ret
  }

  @Provide() addItem (item: VQueryFormItem) {
    let has = this.items.some(v => v === item)
    if (!has) {
      this.items.push(item)
    }
  }

  @Provide() removeItem (item: VQueryFormItem) {
    let idx = this.items.findIndex(v => v === item)
    if (idx >= 0) {
      this.items.splice(idx, 1)
    }
  }

  @Provide() getForm () {
    return this.form
  }

  submitForm () {
    (this.$refs.form as VForm).validate().then(({ valid }) => {
      if (valid) {
        this.saveForm()
        this.submit(this.form)
      }
    })
  }

  cancelForm () {
    this.resetForm()
  }

  clearForm () {
    let form: any = {}
    Object.keys(this.form).forEach(key => {
      if (Array.isArray(this.form[key])) form[key] = []
      else form[key] = ''
    })
    this.updateForm(form)
  }

  saveForm () {
    this.savedForm = JSON.parse(JSON.stringify(this.form))
  }

  resetForm () {
    let form = JSON.parse(JSON.stringify(this.savedForm))
    this.updateForm(form)
  }

  onTagClose (tag: QueryFormTag) {
    tag.removeFn && tag.removeFn(this.form, tag.name)
    this.close(tag)
  }

  mounted () {
    this.saveForm()
  }

  refs!: {
    form: VForm
  }
}
</script>

<style src="./style/v-query-form.scss" lang="scss"></style>
