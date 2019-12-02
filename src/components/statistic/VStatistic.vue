<template>
<div :class="[b()]">
  <div :class="[e('title')]">{{title}}</div>
  <div :class="[e('content')]" :style="[colorStyle]">
    <span :class="[e('prefix')]"><slot name="prefix">{{prefix}}</slot></span>
    <span :class="[e('value')]" :style="[colorStyle]">
      <span :class="[e('int')]">{{integer}}</span>
      <span :class="[e('decimal')]" v-if="decimal">.{{decimal}}</span>
    </span>
    <span :class="[e('suffix')]"><slot name="suffix">{{suffix}}</slot></span>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-statistic'
  })
export default class VStatistic extends mixins(Themeable, Bemable, Colorable) {
  @Prop(Number) value!: number

  @Prop(String) title!: string

  @Prop({type: Number, default: 0}) precision!: number

  @Prop(String) prefix!: string

  @Prop(String) suffix!: string

  @Prop(String) color!: string

  get integer () {
    if (this.value === null || this.value === undefined) return ''
    let regex = /([\d]{3}\B)/g
    return reverse(reverse((+this.value).toFixed(0)).replace(regex, (_, c) => _ + ','))

    function reverse (str: string) {
      return str.split('').reverse().join('')
    }
  }

  get decimal () {
    if (this.value === null || this.value === undefined) return ''
    return (+this.value).toFixed(this.precision).split('.')[1]
  }

  get colorStyle () {
    if (!this.color) return {}
    return {
      color: this.parseColor(this.color)
    }
  }
}
</script>

<style src="./style/v-statistic.scss" lang="scss"></style>
