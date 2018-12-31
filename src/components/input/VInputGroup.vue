<template>
  <div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-input-group'
  })
export default class VInputGroup extends mixins(Themeable, Bemable) {

}
</script>

<style src="./style/v-input-group.scss" lang="scss"></style>
