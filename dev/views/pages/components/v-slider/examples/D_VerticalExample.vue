<template>
<div>
 <div class="m-3 d-flex">
    <div class="mx-3">
     <v-slider v-model="value" vertical class="h-24"></v-slider>
   </div>

   <div class="mx-3">
     <v-slider v-model="value1" vertical range class="h-24"></v-slider>
   </div>

    <div class="mx-3">
     <v-slider v-model="value3"  vertical class="h-24" :marks="marks"></v-slider>
   </div>

   <div class="mx-3">
     <v-slider v-model="value4"  vertical range class="h-24" :marks="marks"></v-slider>
  </div>
 </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 垂直
 * @desc 垂直方向的 Slider。
 */
@Component({
  components: {
  },
  })
export default class VerticalExample extends Vue {
  value: number = 30

  value1: number[] = [10, 30]

  value2: number[] = [10, 30]

  value3: number = 30

  value4: number[] = [30, 60]

  marks = {
    0: '0 °C',
    10: '10 °C',
    30: '30 °C',
    60: '60 °C',
    100: '100 °C'
  }
}
</script>
