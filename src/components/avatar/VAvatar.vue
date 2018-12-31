<template>
<div :class="[b(), shapeCls, typeCls]" :style="[sizeStyle, colorStyle]">
    <div :class="[e('content')]" ref="content"><slot></slot></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'
import { AvatarType, AvatarShape, AvatarSize } from './type'

const sizeMap: any = {
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem'
}

@Component({
  components: {
  },
  name: 'v-avatar'
  })
export default class VAvatar extends mixins(Themeable, Bemable, Colorable) {
  @Prop({type: String, default: 'char'}) type!: AvatarType

  @Prop({type: String, default: 'square'}) shape!: AvatarShape

  @Prop({type: String, default: 'md'}) size!: AvatarSize

  @Prop(String) backgroundColor!: string

  @Prop(String) color!: string

  get shapeCls () {
    return this.m(`shape-${this.shape}`)
  }

  get typeCls () {
    return this.m(`type-${this.type}`)
  }

  get sizeStyle () {
    let size = sizeMap[this.size] || this.size
    return {
      height: size,
      width: size,
      lineHeight: size,
      fontSize: size
    }
  }

  get colorStyle () {
    if (this.type === 'image') return {}
    return {
      backgroundColor: this.backgroundColor && this.parseColor(this.backgroundColor),
      color: this.color && this.parseColor(this.color)
    }
  }

  scale () {
    if (this.type !== 'char') return
    const $content = this.$refs.content
    if ($content && $content.style) {
      $content.style.transform = 'unset'
      $content.style.fontSize = 'unset'
      $content.style.transformOrigin = 'unset'
      $content.style.lineHeight = 'unset'
      let width = $content.scrollWidth
      let parentWidth = this.$el.offsetWidth * 0.75
      let scale = parentWidth/width
      if (scale < 0.75) {
        $content.style.transform = `scale(${parentWidth/width})`
        $content.style.transformOrigin = `20%`
        $content.style.lineHeight = '100%'
      } else {
        $content.style.fontSize = '50%'
        $content.style.lineHeight = 'inherit'
      }
    }
  }

  mounted () {
    this.scale()
  }

  updated () {
    this.scale()
  }

  $refs!: {
    content: HTMLElement
  }
}
</script>

<style src="./style/v-avatar.scss" lang="scss"></style>
