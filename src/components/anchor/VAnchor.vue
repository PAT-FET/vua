<template>
<div :class="[b()]">
  <div :class="[e('ink')]">
      <span v-show="showInk" :class="[e('ink-ball')]" :style="{top: `${inkTop}px`}"></span>
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
  showInk:boolean = false // current affixed state
  inkTop: number = 0
  animating: boolean = false // if is scrolling now
  scrollContainer:any = null
  scrollElement: any = null
  titlesOffsetArr:any[] = []
  wrapperTop: number = 0
  upperFirstTitle: boolean = true

  handleScroll () {
    // this.upperFirstTitle = e.target.scrollTop < this.titlesOffsetArr[0].offset;
    if (this.animating) return
    this.updateTitleOffset()
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
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
    let offset = 0 // this.scrollOffset;
    if (currentLinkElementA) {
      // offset = parseFloat(currentLinkElementA.getAttribute('data-scroll-offset'));
    }

    if (!anchor) return
    const offsetTop = anchor.offsetTop - this.wrapperTop - offset
    this.animating = true
    this.scrollTop(() => {
      this.animating = false
    })
    this.handleSetInkTop()
  }
  scrollTop (callback:Function) {
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
    callback()
  }
  handleSetInkTop () {
    /* const currentLinkElementA = document.querySelector(`a[data-href="${this.currentLink}"]`);
      if (!currentLinkElementA) return;
      const elementATop = currentLinkElementA.offsetTop;
      const top = (elementATop < 0 ? 0 : elementATop); */
    this.inkTop = 0
  }
  findComponentsDownward (context:any, componentName:string) {
    return context.$children.reduce((components:any, child:any) => {
      if (child.$options.name === componentName) components.push(child)
      const foundChilds = this.findComponentsDownward(child, componentName)
      return components.concat(foundChilds)
    }, [])
  }
  updateTitleOffset () {
    const links = this.findComponentsDownward(this, 'AnchorLink').map((link:any) => {
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
    let i = -1
    let len = this.titlesOffsetArr.length
    let titleItem = {
      link: '#',
      offset: 0
    }
    scrollTop += 5
    while (++i < len) {
      let currentEle = this.titlesOffsetArr[i]
      let nextEle = this.titlesOffsetArr[i + 1]
      if (scrollTop >= currentEle.offset && scrollTop < ((nextEle && nextEle.offset) || Infinity)) {
        titleItem = this.titlesOffsetArr[i]
        break
      }
    }
    this.currentLink = titleItem.link
    this.handleSetInkTop()
  }

  resolveTarget (): HTMLElement {
    if (this.target) return this.target()
    return this.$el.parentElement || document.body
  }

  init () {
    this.handleHashChange()
    this.$nextTick(() => {
      this.wrapperTop = 0
      this.handleScrollTo()
      this.handleSetInkTop()
      this.updateTitleOffset()
      this.upperFirstTitle = this.localTarget.scrollTop < this.titlesOffsetArr[0].offset
    })
  }

  mounted () {
    this.localTarget = this.resolveTarget()
    console.log(this.localTarget)
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
