<template>
  <div :class="[b()]"><slot></slot></div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import InputGroupable from '@/mixins/InputGroupable'

@Component({
  components: {
  },
  name: 'v-input-group'
  })
export default class VInputGroup extends mixins(Themeable, Bemable) {
  mounted () {
    this.$children.forEach(v => {
      let $group = v as InputGroupable
      $group.inputGrouped = true
    })
  }
}
</script>

<style src="./style/v-input-group.scss" lang="scss"></style>
