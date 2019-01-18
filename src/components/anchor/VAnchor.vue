<template>
<div :class="[b()]">
  <div :class="[e('ink')]">
      <span v-show="true" :class="[e('ink__ball')]" :style="{top: `${inkTop}px`}"></span>
  </div>
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { AnchorTargetFn } from './type'
import { throttle, easeInOutCubic } from '@/utils'

@Component({
  components: {
  },
  name: 'v-anchor'
})
export default class VAnchor extends mixins(Themeable, Bemable) {
  @Prop(Function) target!: AnchorTargetFn

  @Provide() getAnchorCom () {
    return this
  }

  onScrollDelay = throttle(this.handleScroll, 350)

  localTarget: HTMLElement = document.body

  currentLink: String = ''

  currentId: string = ''

  animating: boolean = false // if is scrolling now

  scrollContainer:any = null
  scrollElement: any = null
  titlesOffsetArr:any[] = []
  upperFirstTitle: boolean = true

  @Watch('$route') routeChange (route: string) {
    console.log('route change')
    this.handleHashChange()
    this.$nextTick(() => {
      this.handleScrollTo()
    })
  }

  @Watch('currentLink') currentLinkChange (newHref: string, oldHref:string) {
    this.$emit('on-change', newHref, oldHref)
  }

  handleScroll () {
    if (this.animating) return
    this.updateTitleOffset()
    const scrollTop = this.localTarget.scrollTop
    this.getCurrentScrollAtTitleId(scrollTop)
  }
  handleHashChange () {
    const url = window.location.href
    const sharpLinkMatch = /#([^#]+)$/.exec(url)
    if (!sharpLinkMatch) return
    this.currentLink = sharpLinkMatch[0]
    this.currentId = sharpLinkMatch[1]
  }
  handleScrollTo () {
    const anchor = document.getElementById(this.currentId)
    const currentLinkElementA = document.querySelector(`a[data-href="${this.currentLink}"]`)
    if (!anchor) return
    const offsetTop = anchor.offsetTop - this.localTarget.offsetTop
    this.animating = true
    this.scrollTop(offsetTop, () => {
      this.animating = false
    })
  }
  scrollTop (offsetTop:number, callback:Function) {
    if (this.localTarget) {
      const target = this.localTarget
      const scrollTop = target.scrollTop
      const startTime = Date.now()
      const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        target.scrollTop = easeInOutCubic(time, scrollTop, offsetTop, 450)
        if (time < 450) {
          requestAnimationFrame(frameFunc)
        } else {
          target.scrollTop = offsetTop
        }
      }
      requestAnimationFrame(frameFunc)
    }
    callback()
  }
  findComponentsDownward (context:any, componentName:string) {
    return context.$children.reduce((components:any, child:any) => {
      if (child.$options.name === componentName) components.push(child)
      const foundChilds = this.findComponentsDownward(child, componentName)
      return components.concat(foundChilds)
    }, [])
  }
  updateTitleOffset () {
    const links = this.findComponentsDownward(this, 'v-anchor-link').map((link:any) => {
      return link.href
    })
    const idArr = links.map((link:string) => {
      return link.split('#')[1]
    })
    let offsetArr:any[] = []
    idArr.forEach((id:string) => {
      const titleEle = document.getElementById(id)
      if (titleEle) {
        offsetArr.push({
          link: `#${id}`,
          offset: titleEle.offsetTop - this.localTarget.offsetTop
        })
      }
    })
    this.titlesOffsetArr = offsetArr
  }
  getCurrentScrollAtTitleId (scrollTop:number) {
    let len = this.titlesOffsetArr.length
    let titleItem = {
      link: '#',
      offset: 0
    }
    for (let i = 0; i < len; i++) {
      let currentEle = this.titlesOffsetArr[i]
      let nextEle = this.titlesOffsetArr[i + 1]
      if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
        titleItem = this.titlesOffsetArr[i]
        this.currentLink = titleItem.link
        return
      }
    }
  }

  resolveTarget (): HTMLElement {
    if (this.target) return this.target()
    return this.$el.parentElement || document.body
  }

  init () {
    this.handleHashChange()
    this.$nextTick(() => {
      this.handleScrollTo()
      this.updateTitleOffset()
    })
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

<style src="./style/v-anchor.scss" lang="scss"></style>
