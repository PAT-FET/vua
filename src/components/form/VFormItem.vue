<template>
<div :class="[b(), labelPositionCls, layoutCls, validateStatusCls]" @change="onChange" @focusout="onBlur">
  <div :class="[e('label'), requiredCls]" :style="labelWidthStyle">
    <slot name="label"><label v-if="label">{{label}}</label></slot>
  </div>
  <div :class="[e('content')]">
    <div :class="[e('control')]">
      <slot></slot>
    </div>
    <div :class="[e('message'), messageStatusCls]" >
      <span v-show="actualShowMessage">
        <i class="anticon mr-2" :class="[iconCls]" v-show="iconCls"></i>
        <span>{{actualMessage}}</span>
      </span>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import FormInjector from './mixins/FormInjector'

@Component({
  components: {
  },
  name: 'v-form-item'
  })
export default class VFormItem extends mixins(Themeable, Bemable, FormInjector) {
  @Prop(String) label!: string

  @Prop(Boolean) required!: boolean

  get labelPositionCls () {
    return this.m(`label-${this.actualLabelPosition}`)
  }

  get layoutCls () {
    return this.m(`layout-${this.layout}`)
  }

  get labelWidthStyle () {
    return {
      width: this.actualLabelWidth
    }
  }

  get validateStatusCls () {
    return this.m(this.actualValidateStatus)
  }

  get iconCls () {
    let status = this.actualValidateStatus
    if (status === 'invalid') {
      return 'anticon-close-circle text-error'
    } else if (status === 'warning') {
      return 'anticon-exclamation-circle text-warning'
    } else if (status === 'validating') {
      return 'anticon-loading anticon-spin text-secondary'
    }
    return ''
  }

  get messageStatusCls () {
    return this.actualValidateStatus
  }

  get requiredCls () {
    return this.required ? 'is-required' : ''
  }

  onChange () {
    // wait untill value actually changed
    this.$nextTick().then(() => {
      this.validate('change')
    })
  }

  onBlur () {
    // wait untill value actually changed
    this.$nextTick().then(() => {
      this.validate('blur')
    })
  }
}
</script>

<style src="./style/v-form-item.scss" lang="scss"></style>
