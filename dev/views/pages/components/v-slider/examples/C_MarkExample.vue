<template>
<div>
  <div class="my-5">
     <v-slider v-model="value" class="w-24" :marks="marks"></v-slider>
  </div>

  <div class="my-5">
     <p>只能选择刻度</p>
     <v-slider v-model="value1" class="w-24" :marks="marks" dots></v-slider>
   </div>

   <div class="my-5">
     <v-slider v-model="value2" range class="w-24" :marks="marks"></v-slider>
  </div>

  <div class="my-5">
     <p>只能选择刻度</p>
     <v-slider v-model="value3" range class="w-24" :marks="marks" dots></v-slider>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  带标签的滑块
 * @desc 使用 marks 属性标注分段式滑块。
 */
@Component({
  components: {
  },
  })
export default class MarkExample extends Vue {
  value: number = 30

  value1: number = 60

  value2: number[] = [10, 30]

  value3: number[] = [30, 60]

  marks = {
    0: '0 °C',
    10: '10 °C',
    30: '30 °C',
    60: '60 °C',
    100: {
      label: '100 °C',
      class: ['text-error']
    }
  }
}
</script>
