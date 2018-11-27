<template>
<transition name="fade-transition">
  <div :class="[b(), sizeCls]" v-show="value">
    <div :class="[e('body')]">
      <div :class="[e('content')]">
        <div :class="[e('icon')]">
          <slot name="icon">
            <div :class="[e('icon-dot')]">
              <i :class="[e('dot-1')]"></i>
              <i :class="[e('dot-2')]"></i>
              <i :class="[e('dot-3')]"></i>
              <i :class="[e('dot-4')]"></i>
            </div>
          </slot>
        </div>
        <div :class="[e('text')]" v-if="tip">{{tip}}</div>
      </div>
    </div>
  </div>
</transition>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'
import { SpinSize } from './spin'

@Component({
  components: {
  },
  name: 'v-spin'
  })
export default class VSpin extends mixins(Themeable, Bemable) {
  @Prop(Boolean) @Model('input') value!: boolean

  @Prop({type: String, default: 'md'}) size!: SpinSize

  @Prop(String) tip!: string

  @Emit() input (value: boolean) {}

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  mounted () {
    const $parent = this.$el.parentNode as HTMLElement
    if ($parent) $parent.classList.add(this.e('parent'))
    this.setParentLoading(this.value)
  }

  setParentLoading (loading: boolean) {
    const $parent = this.$el.parentNode as HTMLElement
    if ($parent) {
      if (loading) $parent.classList.add(this.m('loading', 'parent'))
      else $parent.classList.remove(this.m('loading', 'parent'))
    }
  }

  @Watch('value') valueChange (value: boolean) {
    this.setParentLoading(value)
  }
}
</script>

<style lang="scss" src="./style/v-spin.scss"></style>
