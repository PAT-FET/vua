<template>
  <div :class="[b(), activeCls]">
    <div :class="[e('title'), activeCls]" @click="link"><slot name="title">{{title}}</slot></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Groupable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-scrollspy-item'
  })
export default class VScrollspyItem extends mixins(Themeable, Bemable, Groupable) {
  @Prop(String) href!: string

  @Prop(String) title!: string

  @Inject() getCurrentHref!: () => string

  @Inject() scroll!: (top: number) => void

  get active () {
    let currentHref = this.getCurrentHref()
    return currentHref && currentHref === this.href
  }

  get activeCls () {
    return this.active ? 'active' : ''
  }

  link () {
    const $target = document.querySelector(this.href) as HTMLElement
    if ($target) this.scroll($target.offsetTop)
  }
}
</script>
<style src="./style/v-scrollspy-item.scss" lang="scss"></style>
