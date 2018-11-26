<template>
  <v-popover trigger="click" v-model="visible" :disabled="disabled">
    <slot slot="reference"></slot>
    <div>
      <div :class="[e('title')]">
        <i class="anticon mr-1" :class="[`anticon-${iconName}`, `text-${type}`]"></i>
        {{title}}
      </div>
      <div :class="[e('footer')]">
        <v-button size="sm" type="flat" class="mr-2" @click="onCancel">{{cancelText}}</v-button>
        <v-button size="sm" type="flat" color="primary" @click="onConfirm">{{okText}}</v-button>
      </div>
    </div>
  </v-popover>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import Localeable from '@/mixins/Localeable'
import { VPopover } from '../index'
import { PopconfirmType } from './popconfirm'
import { statusIconMap } from '@/utils/constant'

@Component({
  components: {
  VPopover
  },
  name: 'v-popconfirm'
  })
export default class VPopconfirm extends mixins(Themeable, Bemable, Localeable) {
  @Prop(String) title!: string

  @Prop(Function) cancelFn!: ()=>void

  @Prop(Function) confirmFn!: ()=>void

  @Prop({type: String, default: 'primary'}) type!: PopconfirmType

  @Prop(String) icon!: string

  @Prop(Boolean) disabled!: boolean

  visible: boolean = false

  get iconName () {
    if (this.icon) return this.icon
    if (this.type) return statusIconMap[this.type]
  }

  get okText () {
    return this.t('ok')
  }

  get cancelText () {
    return this.t('cancel')
  }

  onCancel () {
    this.visible = false
    if (this.cancelFn) this.cancelFn()
  }

  onConfirm () {
    this.visible = false
    if (this.confirmFn) this.confirmFn()
  }
}
</script>

<style lang="scss" src="./style/v-popconfirm.scss"></style>
