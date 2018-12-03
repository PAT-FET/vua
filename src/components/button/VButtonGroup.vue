<template>
    <div :class="[b()]">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import { VButton } from '../..'

@Component({
  components: {
  },
  name: 'v-button-group'
  })
export default class VButtonGroup extends mixins(Themeable, Bemable) {

}
</script>

<style src="./style/v-button-group.scss" lang="scss"></style>
