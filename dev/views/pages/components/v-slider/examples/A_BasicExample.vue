<template>
<div>
   <div class="my-3">
     <v-slider v-model="value" class="w-24"></v-slider>
   </div>

   <div class="my-3">
     <v-slider v-model="value1" range class="w-24"></v-slider>
   </div>

    <div class="my-3">
     <v-slider v-model="value2" class="w-24" :marks="marks"></v-slider>
   </div>

    <div class="my-3">
     <v-slider v-model="value3" class="w-24" :marks="marks" :step="0"></v-slider>
   </div>

   <div class="my-3">
     <v-slider v-model="value4" class="h-24" vertical></v-slider>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 基本使用。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: number = 30

  value1: number[] = [10, 30]

  value2: number = 30

  value3: number = 30

  value4: number = 30

  marks = {
    0: '0 C',
    10: '10 C',
    30: '30 C',
    60: '60 C',
    100: '100 C'
  }
}
</script>
