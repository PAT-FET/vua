<template>
<div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-footer'
  })
export default class VFooter extends mixins(Themeable, Bemable) {

}
</script>
<style lang="scss" src="./style/v-footer.scss"></style>
