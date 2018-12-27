<template>
<div :class="[b(), readonlyCls]" tabindex="0">
  <ul :class="[e('star-container')]">
      <li :class="[e('star'), starCls(star)]" v-for="star in stars" :key="star" tabindex="0">
          <div :class="[e('star-first')]"
                @click="onSelect(star - 0.5)"
                @mouseover="onHover(star - 0.5)"
                @mouseout="onOut">
              <span v-if="char">{{char}}</span>
              <i class="anticon" :class="[iconName]" v-else></i>
          </div>
          <div :class="[e('star-second')]"
                @click="onSelect(star)"
                @mouseover="onHover(star)"
                @mouseout="onOut">
              <span v-if="char">{{char}}</span>
              <i class="anticon" :class="[iconName]" v-else></i>
          </div>
      </li>
  </ul>
  <span :class="[e('text')]"><slot></slot></span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-rate'
  })
export default class VRate extends mixins(Themeable, Bemable) {
  @Prop(Number) @Model('input') value!: number

  @Prop(Boolean) clearable!: boolean

  @Prop(Boolean) allowHalf!: boolean

  @Prop(Boolean) readonly!: boolean

  @Prop({type: String, default: 'star'}) icon!: string

  @Prop(String) char!: string

  stars: number = 5

  hoverStar: number = 0

  get readonlyCls (): string {
    return !this.readonly ? '' : 'readonly'
  }

  get iconName () {
    return `anticon-${this.icon}`
  }

  @Emit() input (star: number) {}

  starCls (star: number): string {
    let current = this.hoverStar || this.value || 0
    if (!current || current <= 0) return ''
    if (current >= star) return this.m('full', 'star')
    if (current <= star - 1) return ''
    return this.m('half', 'star')
  }

  onSelect (star: number) {
    let value = this.allowHalf ? star : Math.ceil(star)
    if (this.clearable && value === this.value) {
      this.hoverStar = 0
      this.input(0)
    } else this.input(value)
  }

  onHover (star: number) {
    this.hoverStar = this.allowHalf ? star : Math.ceil(star)
  }

  onOut () {
    this.hoverStar = 0
  }
}
</script>

<style src="./style/v-rate.scss" lang="scss"></style>
