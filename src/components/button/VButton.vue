<template>
    <button :class="[b(), typeCls, sizeCls, colorCls, shapeCls, loadingCls, blockls, groupedCls, slimCls]"
     v-ripple="ripple"
     @click="onClick"
     :disabled="disabled">
        <slot>
            <i v-if="icon" class="anticon" :class="[`anticon-${icon}`]"></i>
        </slot>
        <transition name="fade-transition">
            <div v-if="loading" :class="[e('loader')]"><i class="anticon anticon-loading anticon-spin"></i></div>
        </transition>
    </button>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Rippleable from '@/mixins/Rippleable'
import { ButtonType, ButtonSize, ButtonShape } from './button'
import { VuaTheme } from '@/vua'
import { debounce } from '@/utils/perf'

@Component({
  components: {
  },
  name: 'v-button' // it's required for production version
  })
export default class VButton extends mixins(Themeable, Bemable, Rippleable) {
    @Prop({type: String, default: 'bulge'}) type!: ButtonType

    @Prop({type: String, default: 'md'}) size !: ButtonSize

    @Prop(String) color!: VuaTheme

    @Prop(Boolean) disabled!: boolean

    @Prop(String) shape!: ButtonShape

    @Prop(String) icon!: string

    @Prop(Boolean) loading!: boolean

    @Prop(Boolean) block!: boolean

    @Prop(Number) debounce!: number

    @Prop(Boolean) slim!: boolean

    @Emit() click () {}

    // access by button-group and so on.
    grouped: boolean = false

    debounceClickFn = this.debounce ? debounce(this.click, this.debounce, null) : null

    get typeCls () {
      return this.m(`type-${this.type}`)
    }

    get sizeCls () {
      return this.m(`size-${this.size}`)
    }

    get colorCls () {
      return this.color ? this.m(`color-${this.color}`) : ''
    }

    get shapeCls () {
      return this.shape ? this.m(`shape-${this.shape}`) : ''
    }

    get loadingCls () {
      return this.loading ? this.m(`loading`) : ''
    }

    get blockls () {
      return this.block ? this.m(`block`) : ''
    }

    get groupedCls () {
      return this.grouped ? this.m(`grouped`) : ''
    }

    get slimCls () {
      return this.slim ? this.m(`slim`) : ''
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
