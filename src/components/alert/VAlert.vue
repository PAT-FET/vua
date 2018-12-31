<template>
<v-expand-transition>
  <div :class="[b(), typeCls, darkCls]" v-show="visible">
    <div :class="[e('icon')]" :style="[bigIconStyle]" v-if="showIcon">
      <i class="anticon" :class="[`anticon-${iconName}`, `text-${type}`]"></i>
    </div>
    <div :class="[e('content')]">
      <div :class="[e('title')]" v-if="title">{{title}}</div>
      <div :class="[e('description')]" v-if="description+''">{{description}}</div>
    </div>
    <div :class="[e('close')]" v-if="closable" @click="onClose">
      <slot name="close"><i class="anticon anticon-close"></i></slot>
    </div>
  </div>
</v-expand-transition>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { AlertType } from './type'
import { statusIconMap } from '../../utils'
import { VExpandTransition } from '../../components'

@Component({
  components: {
  VExpandTransition
  },
  name: 'v-alert'
  })
export default class VAlert extends mixins(Themeable, Bemable) {
  @Prop() @Model('input') value!: boolean

  @Prop({type: String, default: 'info'}) type!: AlertType

  @Prop(String) title!: string

  @Prop() description!: any

  @Prop(Boolean) showIcon!: boolean

  @Prop(Boolean) closable!: boolean

  @Emit() input (value: boolean) {}

  localVisible: boolean = true

  get visible () {
    if (this.value !== undefined) return this.value
    return this.localVisible
  }

  set visible (visible: boolean) {
    if (this.value !== undefined) this.input(visible)
    this.localVisible = visible
  }

  get typeCls () {
    return this.m(`type-${this.type}`)
  }

  get bigIconStyle () {
    if (!this.title) return {}
    return {
      fontSize: '1.5rem'
    }
  }

  get iconName () {
    return statusIconMap[this.type]
  }

  onClose () {
    this.visible = false
  }
}
</script>

<style lang="scss" src="./style/v-alert.scss"></style>
