<template>
<div :class="[b(), activeCls]">
  <div :class="[e('content')]" v-if="loading || !$slots.default">
    <div :class="[e('header')]" v-if="normalizedAvatar">
      <div :class="[e('avatar'), avatarCls]"></div>
    </div>
    <div :class="[e('body')]">
      <div :class="[e('title')]" :style="[titleStyle]" v-if="normalizedTitle"></div>
      <div :class="[e('paragraph')]" v-if="normalizedParagraph">
        <ul>
          <li v-for="row in normalizedParagraph.rows" :key="row" :style="[paragraphStyles[row - 1]]"></li>
        </ul>
      </div>
    </div>
  </div>
  <slot v-if="!loading"></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { SkeletonAvatar, SkeletonParagraph, SkeletonTitle } from './type'

@Component({
  components: {
  },
  name: 'v-skeleton'
  })
export default class VSkeleton extends mixins(Themeable, Bemable) {
  @Prop(Boolean) active!: boolean

  @Prop(Boolean) loading!: boolean

  @Prop() avatar!: SkeletonAvatar | boolean

  @Prop({default: true}) paragraph!: SkeletonParagraph | boolean

  @Prop({default: true}) title!: SkeletonTitle | boolean

  get normalizedTitle (): SkeletonTitle | null {
    if (!this.title) return null
    if (this.title === true) {
      return {
        width: '40%'
      }
    }
    return this.title
  }

  get normalizedParagraph (): SkeletonParagraph | null {
    if (!this.paragraph) return null
    if (this.paragraph === true) {
      return {
        width: '100%',
        rows: 3
      }
    }
    return this.paragraph
  }

  get normalizedAvatar (): SkeletonAvatar | null {
    if (!this.avatar) return null
    if (this.avatar === true) {
      return {
        size: 'lg',
        shape: 'circle'
      }
    }
    return this.avatar
  }

  get titleStyle () {
    if (!this.normalizedTitle) return {}
    return {
      width: this.normalizedTitle.width
    }
  }

  get paragraphStyles (): any[] {
    if (!this.normalizedParagraph) return []
    let rows = this.normalizedParagraph.rows || 1
    return new Array(rows).fill(1).map((v, i) => {
      let width = this.normalizedParagraph && this.normalizedParagraph.width
      if (Array.isArray(width)) width = width[i]
      return {
        width: i === rows -1 ? '60%' : width
      }
    })
  }

  get avatarCls () {
    if (!this.normalizedAvatar) return ''
    return `is-${this.normalizedAvatar.shape} is-${this.normalizedAvatar.size}`
  }

  get activeCls () {
    return this.active ? this.m('active') : ''
  }
}
</script>

<style src="./style/v-skeleton.scss" lang="scss"></style>
