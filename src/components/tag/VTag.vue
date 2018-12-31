<template>
<transition name="zoom-transition">
<div :class="[b(), typeCls, shapeCls]" :style="[colorStyle]">
  <slot></slot>
  <span :class="[e('close')]" v-if="closable" @click="close()"><i class="anticon anticon-close"></i></span>
</div>
</transition>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'
import { TagType, TagShape } from '../type'

@Component({
  components: {
  },
  name: 'v-tag'
  })
export default class VTag extends mixins(Themeable, Bemable, Colorable) {
  @Prop({type: String, default: 'outline'}) type!: TagType

  @Prop(String) color!: string

  @Prop(String) shape!: TagShape

  @Prop(Boolean) closable!: boolean

  @Emit() close () {}

  get typeCls () {
    return this.m(`type-${this.type}`)
  }

  get shapeCls () {
    return !this.shape ? '' : this.m(`shape-${this.shape}`)
  }

  get colorStyle () {
    if (!this.color) return {}
    let color = this.parseColor(this.color)
    let backgroundColor: any = color
    if (this.type === 'outline') {
      if (this.isActualDark) {
        backgroundColor = undefined
      } else {
        backgroundColor = this.parseColor(`${color}-lighten-5`)
      }
    }
    return {
      borderColor: color,
      color: this.type === 'outline' ? color : '#fff',
      backgroundColor: backgroundColor
    }
  }
}
</script>

<style src="./style/v-tag.scss" lang="scss"></style>
