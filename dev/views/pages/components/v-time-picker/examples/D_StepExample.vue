<template>
<div>
   <div class="m-3">
     <v-time-picker v-model="value" placeholder="请选择时间" clearable :hour-step="3" :min-step="30" :sec-step="60"></v-time-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 步长选项
 * @desc 可以使用 hourStep minStep secStep 按步长展示可选的时分秒。
 */
@Component({
  components: {
  },
  })
export default class StepExample extends Vue {
  value: string = ''
}
</script>
