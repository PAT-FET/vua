<template>
<div :class="[b()]">
  <transition name="zoom-transition">
    <v-button shape="circle" color="error" size="lg" icon="to-top" @click="toTop" v-if="visible"></v-button>
  </transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { BackTopTargetFn } from './type'
import { debounce } from '@/utils'

@Component({
  components: {
  },
  name: 'v-back-top'
  })
export default class VBackTop extends mixins(Themeable, Bemable) {
  @Prop(Function) target!: BackTopTargetFn

  @Prop({type: Number, default: 200}) offset!: number

  visible: boolean = false

  onScrollDelay = debounce(this.onScroll, 200)

  localTarget: HTMLElement | null = null

  resolveTarget (): HTMLElement {
    if (this.target) return this.target()
    return this.$el.parentElement || document.body
  }

  onScroll () {
    let target = this.localTarget
    if (!target) return
    if (target.scrollTop >= this.offset) {
      this.visible = true
    } else {
      this.visible = false
    }
  }

  toTop () {
    if (this.localTarget) {
      this.localTarget.scrollTop = 0
    }
  }

  mounted () {
    this.localTarget = this.resolveTarget()
    if (!this.localTarget) return
    this.localTarget.addEventListener('scroll', this.onScrollDelay)
  }

  beforeDestory () {
    if (this.localTarget) {
      this.localTarget.removeEventListener('scroll', this.onScrollDelay)
    }
  }
}
</script>

<style src="./style/v-back-top.scss" lang="scss"></style>
