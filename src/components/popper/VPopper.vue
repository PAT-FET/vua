<template>
<div :class="[b()]">
    <slot name="reference" @click="onClick"><a>&nbsp;</a></slot>
    <transition :name="transitionName">
      <div :class="[e('popper'), popperClass]" :style="[gutterStyle, zIndexStyle]" ref="popper" v-show="actualVisible && !disabled">
        <slot></slot>
        <div :class="[e('arrow'), arrowPlacementCls]" v-if="arrow"></div>
      </div>
    </transition>
</div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { VNode } from 'vue'
import Popper, { PopperOptions, Data } from './popper.js'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-popper'
  })
export default class VPopper extends mixins(Bemable, Themeable) {
  @Prop({type: String, default: 'hover'}) trigger!: 'hover' | 'click' | 'focus'

  @Prop(Boolean) visible!: boolean

  @Prop([Object, String]) transition!: Record<string, string> | string

  @Prop(Object) options!: PopperOptions

  @Prop({type: Number, default: 100}) delay!: number

  @Prop(Boolean) disabled!: boolean

  @Prop({type: Number, default: 5}) gutter!: number

  @Prop({type: Number, default: 1000}) zIndex!: number

  @Prop({type: Boolean, default: true}) arrow!: boolean

  @Prop({type: Boolean, default: true}) appendToBody!: boolean

  @Prop(String) reference!: string

  @Prop(String) popperClass!: string

  popper: Popper | null = null

  actualVisible: boolean = false

  state: Data | null = null

  callbacks: Function[] = []

  defaultOptions: PopperOptions = {
    modifiers: {
      computeStyle: {
        gpuAcceleration: false
      },
      preventOverflow: {
        boundariesElement: 'viewport' // fix the aside menu issue
      }
    },
    // positionFixed: true,
    onUpdate: this.onUpdate,
    onCreate: this.onCreate
  }

  unRegisterEvents: () => void = () => {}

  @Emit('update:visible') updateVisible (visible: boolean) {}

  onClick () {
    this.visible = !this.visible
  }

  onUpdate (data: Data) {
    this.state = data
  }

  onCreate (data: Data) {
    this.state = data
  }

  get refEle (): HTMLElement {
    if (this.reference) {
      let $ele = (this.$slots.reference[0].elm as HTMLElement).querySelector(this.reference) as HTMLElement
      if ($ele) return $ele
    }
    return this.$slots.reference && this.$slots.reference[0].elm as HTMLElement
  }

  get transitionName () {
    if (this.transition) return this.transition
    if (this.state) {
      let placement = this.state.placement
      if (placement.startsWith('top')) {
        return 'slide-down-transition'
      } else if (placement.startsWith('bottom')) {
        return 'slide-up-transition'
      } else if (placement.startsWith('left')) {
        return 'zoom-right-transition'
      } else if (placement.startsWith('right')) {
        return 'zoom-left-transition'
      }
    }
  }

  get gutterStyle () {
    const $popper = this.$refs.popper
    let gutter = this.gutter + 'px'
    let placement = this.state && this.state.placement
    if (!$popper || !placement) return {}

    if (placement.startsWith('top')) {
      return { marginBottom: gutter }
    } else if (placement.startsWith('bottom')) {
      return { marginTop: gutter }
    } else if (placement.startsWith('left')) {
      return { marginRight: gutter }
    } else if (placement.startsWith('right')) {
      return { marginLeft: gutter }
    }
  }

  get arrowPlacementCls () {
    const $popper = this.$refs.popper
    let placement = this.state && this.state.placement
    if (!$popper || !placement) return {}
    return this.m(placement, 'arrow')
  }

  get zIndexStyle () {
    return {
      zIndex: this.zIndex + ''
    }
  }

  // overwrite
  getCssVarEles (): HTMLElement[] {
    return [this.$el as HTMLElement, this.$refs.popper]
  }

  scheduleUpdate () {
    this.popper && this.popper.scheduleUpdate()
  }

  updateActualVisible () {
    let visible = this.visible
    if (visible) {
      let display = this.$refs.popper.style.display
      this.$refs.popper.style.display = 'block'
      this.$refs.popper.style.visibility = 'hidden'
      if (this.popper) this.popper.scheduleUpdate()
      setTimeout(() => {
        this.$refs.popper.style.visibility = 'visible'
        this.$refs.popper.style.display = display
        setTimeout(() => {
        // this.$refs.popper.style.visibility = 'visible'
        // this.$refs.popper.style.display = display
          this.actualVisible = true
        }, 50)
      }, 50)
    } else {
      this.actualVisible = false
    }
  }

  @Watch('visible') visibleChange (visible: boolean) {
    this.updateActualVisible()
  }

  @Watch('options', {deep: true}) optionsChange (options: PopperOptions) {
    // only change placement dynamically, because replace all have problem
    if (this.popper && options.placement) {
      this.popper.options.placement = options.placement
    }
  }

  @Watch('trigger') triggerChange (trigger: string) {
    this.registerEvents()
  }

  mounted () {
    let refEle = this.refEle
    if (!refEle) return
    if (this.appendToBody) {
      document.body.appendChild(this.$refs.popper)
    }
    let option = Object.assign(this.defaultOptions, this.options || {})
    this.popper = new Popper(refEle, this.$refs.popper, option)
    this.registerEvents()

    this.updateActualVisible()
  }

  beforeDestroy () {
    this.unRegisterEvents()
    if (this.popper) this.popper.destroy()
    if (document.body.contains(this.$refs.popper)) document.body.removeChild(this.$refs.popper)
  }

  scheduleCallback () {
    setTimeout(() => {
      if (this.callbacks.length > 0) {
        let cb = this.callbacks[this.callbacks.length - 1]
        this.callbacks = []
        cb()
      }
    }, this.delay)
  }

  registerEvents () {
    const show = () => {
      this.callbacks.push(() => this.updateVisible(true))
      this.scheduleCallback()
    }
    const hide = () => {
      this.callbacks.push(() => this.updateVisible(false))
      this.scheduleCallback()
    }
    const toggle = () => {
      this.callbacks.push(() => this.updateVisible(!this.visible))
      this.scheduleCallback()
    }
    const clickOutSide = (e: Event) => {
      let target = e.target as HTMLElement
      if (!target) return
      if (!this.$el || !this.refEle ||
          this.$el.contains(target) ||
          this.refEle.contains(target) ||
          !this.$refs.popper || this.$refs.popper.contains(target)
      ) {
        return
      }
      this.callbacks.push(() => {
        this.updateVisible(false)
      })
      this.scheduleCallback()
    }
    this.unRegisterEvents() // remove first
    const $refEle = this.refEle
    const $popperEle = this.$refs.popper
    if (this.trigger === 'hover') {
      $refEle.addEventListener('mouseover', show)
      $refEle.addEventListener('mouseout', hide)
      $refEle.addEventListener('focus', show)
      $popperEle.addEventListener('mouseover', show)
      $popperEle.addEventListener('mouseout', hide)
      $popperEle.addEventListener('focus', show)
      this.unRegisterEvents = () => {
        $refEle.removeEventListener('mouseover', show)
        $refEle.removeEventListener('mouseout', hide)
        $refEle.removeEventListener('focus', show)
        $popperEle.removeEventListener('mouseover', show)
        $popperEle.removeEventListener('mouseout', hide)
        $popperEle.removeEventListener('focus', show)
      }
    } else if (this.trigger === 'click') {
      $refEle.addEventListener('click', toggle)
      document.addEventListener('click', clickOutSide)
      this.unRegisterEvents = () => {
        $refEle.removeEventListener('click', toggle)
        document.removeEventListener('click', clickOutSide)
      }
    } else if (this.trigger === 'focus') {
      $refEle.addEventListener('focus', show)
      $refEle.addEventListener('blur', hide)
      document.addEventListener('click', clickOutSide)
      this.unRegisterEvents = () => {
        $refEle.removeEventListener('focus', show)
        $refEle.addEventListener('blur', hide)
        document.removeEventListener('click', clickOutSide)
      }
    }
  }

  $refs!: {
    popper: HTMLElement,
    reference: HTMLElement
  }

  $slots!: {
    reference: VNode[]
  }
}
</script>

<style lang="scss" src="./style/v-popper.scss"></style>
