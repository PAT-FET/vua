<template>
<i class="anticon" :class="[typeCls, spinCls]" :style="[colorStyle]"></i>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-icon'
  })
export default class VAlert extends mixins(Themeable, Bemable, Colorable) {
  @Prop(String) type!: string

  @Prop(String) color!: string

  @Prop(Boolean) spin!: boolean

  get typeCls () {
    return !this.type ? '' : `anticon-${this.type}`
  }

  get spinCls () {
    return !this.spin ? '' : `anticon-spin`
  }

  get colorStyle () {
    if (!this.color) return {}
    let color = this.parseColor(this.color)
    return color ? { color: color } : {}
  }
}
</script>

<style lang="scss" src="./style/v-icon.scss"></style>
