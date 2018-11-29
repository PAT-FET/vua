<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import Bemable from '@/mixins/Bemable'
import Themeable from '@/mixins/Themeable'

@Component({
  components: {
  },
  name: 'v-content'
  })
export default class VContent extends mixins(Themeable, Bemable) {

}
</script>
<style lang="scss" src="./style/v-content.scss"></style>
