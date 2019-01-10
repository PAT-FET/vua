<template>
<div :class="[b()]">
  <transition name="zoom-transition">
    <v-button shape="circle" color="error" type="primary" float size="lg" icon="to-top" @click="toTop" v-if="visible"></v-button>
  </transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { BackTopTargetFn } from './type'
import { throttle, easeInOutCubic } from '@/utils'
import { VButton } from '../button'

@Component({
  components: {
  VButton
  },
  name: 'v-back-top'
  })
export default class VBackTop extends mixins(Themeable, Bemable) {
  @Prop(Function) target!: BackTopTargetFn

  @Prop({type: Number, default: 200}) offset!: number

  visible: boolean = false

  onScrollDelay = throttle(this.onScroll, 350)

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
      const target = this.localTarget
      const scrollTop = target.scrollTop
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        target.scrollTop = easeInOutCubic(time, scrollTop, 0, 450)
        if (time < 450) {
          requestAnimationFrame(frameFunc)
        } else {
          target.scrollTop = 0
        }
      }
      requestAnimationFrame(frameFunc)
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
