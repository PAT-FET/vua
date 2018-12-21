<template>
<div :class="[b(), labelPositionCls, layoutCls, validateStatusCls]" @change="onChange" @focusout="onBlur">
  <div :class="[e('label')]" :style="labelWidthStyle">
    <label>{{label}}</label>
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
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import FormInjector from './mixins/FormInjector'

@Component({
  components: {
  },
  name: 'v-form-item'
  })
export default class VFormItem extends mixins(Themeable, Bemable, FormInjector) {
  @Prop(String) label!: string

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

  onChange () {
    this.validate('change')
  }

  onBlur () {
    this.validate('blur')
  }
}
</script>

<style src="./style/v-form-item.scss" lang="scss"></style>
