<template>
<div :class="[b()]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Group } from '../../mixins'
import { VScrollspyItem } from './'
import { throttle, easeInOutCubic } from '@/utils'

@Component({
  components: {
  },
  name: 'v-scrollspy'
  })
export default class VScrollspy extends mixins(Themeable, Bemable, Group) {
  @Prop(String) target!: string

  @Prop({type: Number, default: 10}) offset!: number

  groupNames = ['v-scrollspy-item']

  currentHref: string = ''

  onScrollDelay = throttle(this.onScroll, 100)

  unregisterFn: Function | null = null

  actualTarget: HTMLElement | null = null

  get items (): VScrollspyItem[] {
    return this.groupItems as VScrollspyItem[]
  }

  @Provide() getCurrentHref (): string {
    return this.currentHref
  }

  @Provide() scroll (top: number) {
    let target = this.actualTarget as HTMLElement
    if (target) {
      const scrollTop = target.scrollTop
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        target.scrollTop = easeInOutCubic(time, scrollTop, top, 450)
        if (time < 450) {
          requestAnimationFrame(frameFunc)
        } else {
          target.scrollTop = top
        }
      }
      requestAnimationFrame(frameFunc)
    }
  }

  onScroll () {
    let target = this.actualTarget
    if (!target) return
    let scrollTop = target.scrollTop
    let items = this.items.slice(0).reverse()
    items.some((v, i) => {
      let $e = document.querySelector(v.href) as HTMLElement
      if (!$e) return false
      let offsetTop = $e.offsetTop
      // let offsetHeight = $e.offsetHeight
      if (Math.abs(scrollTop - offsetTop) < this.offset) {
        this.currentHref = v.href
        return true
      }
      return false
    })
  }

  register () {
    let target = document.querySelector(this.target) as HTMLElement
    this.actualTarget = target
    if (target) {
      if (this.unregisterFn) this.unregisterFn()
      target.addEventListener('scroll', this.onScrollDelay)
      this.unregisterFn = () => {
        if (target) target.removeEventListener('scroll', this.onScrollDelay)
      }
    }
  }

  mounted () {
    this.register()
    this.onScrollDelay()
  }

  beforeDestroy () {
    if (this.unregisterFn) this.unregisterFn()
  }
}
</script>

<style src="./style/v-scrollspy.scss" lang="scss"></style>
