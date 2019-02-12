<template>
<div :class="[b(), placementCls, openCls]" :style="[indexStyle]">
  <transition name="fade-transition">
    <div :class="[e('mask')]" v-show="visible" @click="onMaskClose"></div>
  </transition>
   <transition :name="placementTransition">
    <div :class="[e('wrap')]" :style="[sizeStyle, offsetStyle]" v-if="visible">
      <div :class="[e('content')]">
        <div :class="[e('header')]" v-show="title || $slots.header">
          <slot name="header"><div :class="[e('title')]">{{title}}</div></slot>
        </div>
        <div :class="[e('body')]"><slot></slot></div>
      </div>
    </div>
  </transition>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { DrawerPlacement } from './type'

const stack: VDrawer[] = []

@Component({
  components: {
  },
  name: 'v-drawer'
  })
export default class VDrawer extends mixins(Themeable, Bemable) {
  @Prop({type: String, default: 'right'}) placement!: DrawerPlacement

  @Prop({type: String, default: '16rem'}) width!: string

  @Prop({type: String, default: '16rem'}) height!: string

  @Prop(Boolean) visible!: boolean

  @Prop(String) title!: string

  @Prop({type: Boolean, default: true}) mask!: boolean

  @Prop({type: Boolean, default: true}) maskClosable!: boolean

  @Prop({type: Number, default: 1000}) zIndex!: number

  @Emit('update:visible') updateVisible (visible: boolean) {}

  offset: number = 0

  get placementTransition () {
    let dir: string = this.placement
    if (dir === 'top') dir = 'up'
    if (dir === 'bottom') dir = 'down'
    return `move-${dir}-transition`
  }

  get openCls () {
    return this.visible ? this.m('open') : ''
  }

  get placementCls () {
    return this.m(this.placement)
  }

  get sizeStyle () {
    if (['top', 'bottom'].includes(this.placement)) {
      return {
        height: this.height
      }
    }
    return {
      width: this.width
    }
  }

  get indexStyle () {
    return {
      zIndex: this.zIndex
    }
  }

  get offsetStyle () {
    if (this.offset <= 0) return {}
    let axis = ['top', 'bottom'].includes(this.placement) ? 'Y' : 'X'
    let sign = ['bottom', 'right'].includes(this.placement) ? '-' : ''
    return {
      transform: `translate${axis}(${sign}${this.offset}px)`
    }
  }

  onMaskClose () {
    if (this.maskClosable) this.close()
  }

  close () {
    this.updateVisible(false)
  }

  pushStack () {
    stack.push(this)
    stack.forEach(v => v.computeOffset())
  }

  popStack () {
    let idx = stack.findIndex(v => v === this)
    if (idx !== -1) stack.splice(idx, 1)
    stack.forEach(v => v.computeOffset())
  }

  computeOffset () {
    let list = stack.filter(v => v.placement === this.placement)
    if (list.length < 2) {
      this.offset = 0
      return
    }
    let idx = list.findIndex(v => v === this)
    let level = list.length - idx - 1
    this.offset = 180 * level
  }

  mounted () {
    document.body.appendChild(this.$el)
  }

  beforeDestory () {
    document.body.removeChild(this.$el)
    this.popStack()
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) this.pushStack()
    else this.popStack()
  }
}
</script>

<style src="./style/v-drawer.scss" lang="scss"></style>
