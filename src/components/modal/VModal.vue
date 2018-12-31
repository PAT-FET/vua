<template>
<transition name="fade-transition">
<div :class="[b(), maskCls, centeredCls]" :style="[zIndexStyle]" v-show="visible" @click.self="onMaskClick" @keyup.esc="onMaskEsc">
    <div :class="[e('inner')]" :style="[topStyle, widthStyle]" ref="inner">
      <div tabindex="0" ref="tab"></div>
      <transition name="zoom-transition">
        <div :class="[e('content')]" :style="[transformOriginStyle]" v-show="contentVisible">
          <div :class="[e('header')]" v-if="title">{{title}}</div>
          <div :class="[e('body')]"><slot></slot></div>
          <div :class="[e('footer')]" v-if="$slots.footer"><slot name="footer"></slot></div>
          <div :class="[e('close')]" v-if="closable" @click="close"><i class="anticon anticon-close"></i></div>
        </div>
      </transition>
    </div>
</div>
</transition>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

const zIndexs: number[] = []

@Component({
  components: {
  },
  name: 'v-modal'
  })
export default class VModal extends mixins(Themeable, Bemable) {
  @Prop({type: Boolean, default: true}) mask!: boolean

  @Prop(Boolean) visible!: boolean

  @Prop({type: String, default: '15vh'}) top!: string

  @Prop({type: String, default: '520px'}) width!: string

  @Prop(String) title!: string

  @Prop({type: Boolean, default: true}) maskClosable!: boolean

  @Prop({type: Boolean, default: true}) keyboard!: boolean

  @Prop({type: Boolean, default: true}) closable!: boolean

  @Prop(Boolean) centered!: boolean

  // @Prop({type: Number, default: 1050}) zIndex!: number

  @Emit('update:visible') visibleUpdate (visible: boolean) {}

  clickPosition: {x: number, y: number} | null = null

  transformOriginStyle: any = {}

  contentVisible: boolean = false

  actualZIndex: number = 1050

  get maskCls () {
    return this.mask ? this.m('mask') : ''
  }

  get centeredCls () {
    return this.centered ? this.m('centered') : ''
  }

  get topStyle () {
    if (this.centered) {
      return {
        top: '0'
      }
    }
    return {
      top: this.top
    }
  }

  get widthStyle () {
    return {
      width: this.width
    }
  }

  get zIndexStyle () {
    return {
      zIndex: this.actualZIndex + ''
    }
  }

  @Emit() close () {
    this.visibleUpdate(false)
  }

  onMaskClick () {
    if (this.maskClosable) this.close()
  }

  onMaskEsc () {
    if (this.keyboard) this.close()
  }

  handleVisible () {
    if (this.visible) {
      this.$nextTick().then(() => { // wait until modal visible
        if (this.clickPosition) {
          let x = this.clickPosition.x - this.$refs.inner.offsetLeft
          let y = this.clickPosition.y - this.$refs.inner.offsetTop
          this.transformOriginStyle = { transformOrigin: `${x}px ${y}px 0px` }
        }
        this.contentVisible = true
        this.$refs.tab.focus()
      })
      if (zIndexs.length > 0) {
        this.actualZIndex = zIndexs[zIndexs.length - 1] + 1
      }
      zIndexs.push(this.actualZIndex)
    }
  }

  mounted () {
    const updateTargetOrigin = (e: MouseEvent) => {
      this.clickPosition = { x: e.pageX, y: e.pageY }
      // 200ms cancel, in case not triggered by click
      setTimeout(() => {
        this.clickPosition = null
      }, 200)
    }
    document.addEventListener('click', updateTargetOrigin)
    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('click', updateTargetOrigin)
    })
    this.handleVisible()
  }

  beforeDestroy () {
    if (this.visible) {
      let idx = zIndexs.findIndex(v => v === this.actualZIndex)
      if (idx >=0) zIndexs.splice(idx, 1)
    }
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) {
      this.handleVisible()
    } else {
      zIndexs.pop()
      this.contentVisible = false
    }
  }

  $refs!: {
    inner: HTMLElement,
    tab: HTMLElement
  }

  $slots!: {
    footer: VNode[]
  }
}
</script>

<style lang="scss" src="./style/v-modal.scss"></style>
