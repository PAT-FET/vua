<template>
<div>
   <div class="m-3">
     <p>日期选择器</p>
     <v-alert class="my-2" :description="value || '>'"></v-alert>
     <v-date-picker show-time v-model="value" placeholder="请选择日期" clearable></v-date-picker>
   </div>

   <div class="m-3">
      <p>日期范围选择器</p>
     <v-alert class="my-2" :description="'' + value1 || '>'"></v-alert>
     <v-range-picker show-time v-model="value1" start-placeholder="开始日期" end-placeholder="结束日期" clearable></v-range-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 日期时间选择
 * @desc 加选择时间功能，设置 showTime 属性。
 */
@Component({
  components: {
  },
  })
export default class TimeExample extends Vue {
  value: string = '2018/12/11 13:00:00'

  value1: string[] = ['2018/12/10 14:23:45', '2019/02/25 09:12:45']
}
</script>
