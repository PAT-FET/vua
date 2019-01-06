<template>
<div>

   <div class="my-3">
    <div class="d-flex">
      <v-slider v-model="value" class="w-24"></v-slider>
      <div>
        <v-input-number v-model="value" :min="0" :max="100" class="ml-3 w-4" size="sm"></v-input-number>
      </div>
    </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  带输入框的滑块
 * @desc 和数字输入框 组件保持同步。
 */
@Component({
  components: {
  },
  })
export default class InputNumberExample extends Vue {
  value: number = 30
}
</script>
