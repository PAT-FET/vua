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
import Group from '@/mixins/Group'

@Component({
  components: {
  },
  })
export default class VButtonGroup extends mixins(Themeable, Bemable, Group) {
  groupNames: string[] = ['button']
}
</script>

<style src="./style/v-button-group.scss" lang="scss"></style>
