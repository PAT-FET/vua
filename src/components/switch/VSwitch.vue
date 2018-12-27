<template>
  <div :class="[b(), checkedCls, sizeCls, disabledCls, loadingCls]" tabindex="0" @click="toggle">
    <div :class="[e('active-text')]" v-if="value">
      <i class="anticon" :class="[`anticon-${activeIcon}`]" v-if="activeIcon"></i>
      <span v-if="activeText">{{activeText}}</span>
    </div>
    <div :class="[e('inactive-text')]" v-else>
      <i class="anticon" :class="[`anticon-${inactiveIcon}`]" v-if="inactiveIcon"></i>
      <span v-if="inactiveText">{{inactiveText}}</span>
    </div>
    <div :class="[e('dot'), disabledCls]">
      <i class="anticon anticon-loading anticon-spin" v-if="loading"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { SwitchSize } from './type'

@Component({
  components: {
  },
  name: 'v-switch'
  })
export default class VSwitch extends mixins(Themeable, Bemable) {
  @Prop(Boolean) value!: boolean

  @Prop({type: String, default: 'md'}) size!: SwitchSize

  @Prop(Boolean) disabled!: boolean

  @Prop(String) activeText!: String

  @Prop(String) inactiveText!: String

  @Prop(String) activeIcon!: String

  @Prop(String) inactiveIcon!: String

  @Prop(Boolean) loading!: boolean

  @Emit() input (value: boolean) {
    this.change(value)
  }

  @Emit() change (value: boolean) {}

  get sizeCls () {
    return this.m(`size-${this.size}`)
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get checkedCls () {
    return this.value ? this.m('checked') : ''
  }

  get loadingCls () {
    return this.loading ? this.m('loading') : ''
  }

  toggle () {
    if (this.disabled) return
    this.input(!this.value)
  }
}
</script>

<style src="./style/v-switch.scss" lang="scss"></style>
