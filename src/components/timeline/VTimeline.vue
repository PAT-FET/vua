<template>
  <ul :class="[b(),classes]">
      <slot></slot>
  </ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-timeline'
})
export default class VTimeline extends mixins(Themeable, Bemable) {
  @Prop(Boolean) pending!: boolean

  get classes () {
    return [
      {
        [`v-timeline__pending`]: this.pending
      }
    ]
  }
}
</script>

<style src="./style/v-timeline.scss" lang="scss"></style>
