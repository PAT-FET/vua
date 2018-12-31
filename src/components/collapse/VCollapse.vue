<template>
<div :class="[b(), borderedCls]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-collapse'
  })
export default class VCollapse extends mixins(Themeable, Bemable, Group) {
  @Prop([String, Array]) @Model('input') value!: string | string[]

  @Prop(Boolean) accordion!: boolean

  @Prop({type: Boolean, default: true}) bordered!: boolean

  @Emit() input (value: string | string[]) {}

  get borderedCls () {
    return this.bordered ? this.m('bordered') : ''
  }

  @Provide() toggle (name: string) {
    if (this.accordion) {
      this.input(name === this.value ? '' : name)
    } else {
      let has = this.value.includes(name)
      if (has) {
        this.input((this.value as string[]).filter(v => v !== name))
      } else {
        this.input([name, ...this.value])
      }
    }
  }

  @Provide() isActive (name: string) {
    if (this.accordion) return name === this.value
    return this.value.includes(name)
  }

  @Provide() getBordered () {
    return this.bordered
  }
}
</script>

<style src="./style/v-collapse.scss" lang="scss"></style>
