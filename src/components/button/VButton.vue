<template>
    <button :class="[b(), sizeCls, typeCls, loadingCls, shapeCls, blockls, slimCls, floatCls]"
     v-ripple="ripple && type !== 'text'"
     @click="onClick"
     :disabled="disabled">
        <span :class="[e(icon)]" v-show="hasIcon">
          <i v-if="icon && !loading" class="anticon" :class="[`anticon-${icon}`]"></i>
          <i class="anticon anticon-loading anticon-spin" v-if="loading"></i>
        </span>
        <span :class="[e('content'), hasIconCls]" v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Rippleable, Colorable, CssVariable } from '../../mixins'
import { ButtonType, ButtonSize, ButtonShape, ButtonCssVariable } from './type'
import { debounce } from '../../utils'

@Component({
  components: {
  },
  name: 'v-button' // it's required for production version
})
export default class VButton extends mixins(CssVariable, Bemable, Rippleable, Colorable) {
    @Prop({ type: String, default: 'solid' }) type!: ButtonType

    @Prop({ type: String, default: 'md' }) size !: ButtonSize

    @Prop(String) color!: string

    @Prop(Boolean) disabled!: boolean

    @Prop(String) shape!: ButtonShape

    @Prop(String) icon!: string

    @Prop(Boolean) loading!: boolean

    @Prop(Boolean) block!: boolean

    @Prop(Number) debounce!: number

    @Prop(Boolean) slim!: boolean

    @Prop(Boolean) float!: boolean

    @Prop(Boolean) ghost!: boolean

    @Emit() click () {}

    debounceClickFn = this.debounce ? debounce(this.click, this.debounce, null) : null

    // overwrite from css variable
    get localCssVariable (): ButtonCssVariable {
      let ret = {
        btnBgColor: undefined,
        btnBgActiveColor: undefined,
        btnBgFocusColor: undefined,
        btnTextColor: undefined,
        btnTextActiveColor: undefined,
        btnTextFocusColor: undefined,
        btnBorderColor: undefined,
        btnBorderActiveColor: undefined,
        btnBorderFocusColor: undefined
      }
      if (this.disabled) return ret
      let color: string | undefined = this.color
      if (!color && this.type === 'primary') color = 'primary'
      if (this.disabled) color = undefined
      let baseColor = color && this.parseColor(color)
      let activeColor = color && this.parseColor(color + '-darken-1')
      let focusColor = color && this.parseColor(color + '-lighten-1')
      let ext: ButtonCssVariable = {}
      if (this.type === 'primary') {
        ext = {
          btnBgColor: baseColor,
          btnBgActiveColor: activeColor,
          btnBgFocusColor: focusColor,
          btnBorderColor: baseColor,
          btnBorderActiveColor: activeColor,
          btnBorderFocusColor: focusColor,
          btnTextColor: '#fff',
          btnTextActiveColor: '#fff',
          btnTextFocusColor: '#fff'
        }
      } else if (this.type === 'solid' || this.type === 'dashed') {
        ext = {
          btnBgColor: this.ghost ? 'transparent' : undefined,
          btnBgActiveColor: this.ghost ? 'transparent' : activeColor,
          btnBgFocusColor: this.ghost ? 'transparent' : focusColor,
          btnBorderColor: baseColor,
          btnBorderActiveColor: activeColor,
          btnBorderFocusColor: focusColor,
          btnTextColor: baseColor,
          btnTextActiveColor: this.ghost ? activeColor : activeColor && '#fff',
          btnTextFocusColor: this.ghost ? focusColor : focusColor && '#fff'
        }
      } else if (this.type === 'text') {
        ext = {
          btnBgColor: 'transparent',
          btnBgActiveColor: 'transparent',
          btnBgFocusColor: 'transparent',
          btnBorderColor: 'transparent',
          btnBorderActiveColor: 'transparent',
          btnBorderFocusColor: 'transparent',
          btnTextColor: baseColor,
          btnTextActiveColor: activeColor,
          btnTextFocusColor: focusColor
        }
      }
      Object.assign(ret, ext)
      return ret
    }

    get hasIcon (): boolean {
      return this.loading || !!this.icon
    }

    get typeCls () {
      return this.m(this.type)
    }

    get sizeCls () {
      return this.m(`${this.size}`)
    }

    get shapeCls () {
      return this.shape ? `is-${this.shape}` : ''
    }

    get blockls () {
      return this.block ? this.m(`block`) : ''
    }

    get slimCls () {
      return this.slim ? this.m(`slim`) : ''
    }

    get loadingCls () {
      return this.loading ? 'is-loading' : ''
    }

    get floatCls () {
      return this.float ? this.m('float') : ''
    }

    get hasIconCls () {
      return this.hasIcon ? 'has-icon' : ''
    }

    onClick () {
      if (this.debounceClickFn) this.debounceClickFn()
      else this.click()
    }

    @Watch('debounce') debounceChange (newVal: number) {
      if (this.debounceClickFn) this.debounceClickFn.cancel()
      if (!newVal) this.debounceClickFn = null
      else this.debounceClickFn = debounce(this.click, this.debounce, null)
    }
}
</script>

<style src="./style/v-button.scss" lang="scss"></style>
