<template>
<div>

   <div class="my-3">
     <v-slider :disabled="disabled" v-model="value" class="w-24"></v-slider>
   </div>

   <div class="my-3">
     <v-slider :disabled="disabled" v-model="value1" range class="w-24"></v-slider>
   </div>

    <div class="my-3">
     <span>Disabled: </span> <v-switch v-model="disabled"></v-switch>
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

  disabled: boolean = false
}
</script>
