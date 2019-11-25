<template>
<div :class="[b()]">
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Groupable } from '../../mixins'

@Component({
  name: 'v-carousel-item'
  })
export default class VCarouselItem extends mixins(Themeable, Bemable, Groupable) {

}
</script>

<style src="./style/v-carousel-item.scss" lang="scss"></style>
