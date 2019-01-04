<template>
<div>

   <div class="my-3">
     <v-slider v-model="value" class="w-24" :tooltip-visible="true"></v-slider>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  控制 ToolTip 的显示
 * @desc 当 tooltipVisible 为 true 时，将始终显示ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
 */
@Component({
  components: {
  },
  })
export default class TooltipExample extends Vue {
  value: number = 30
}
</script>
