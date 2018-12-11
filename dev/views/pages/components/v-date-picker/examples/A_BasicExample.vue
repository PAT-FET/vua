<template>
<div>
   <div class="m-3">
     <p>日期选择器</p>
     <v-alert class="my-2" :description="value || '>'"></v-alert>
     <v-date-picker v-model="value" placeholder="请选择日期" clearable></v-date-picker>
   </div>

   <div class="m-3">
     <p>月份选择器</p>
     <v-alert class="my-2" :description="value1 || '>'"></v-alert>
     <v-month-picker v-model="value1" placeholder="请选择月份" clearable></v-month-picker>
   </div>

   <div class="m-3">
     <p>年份选择器</p>
     <v-alert class="my-2" :description="value2 || '>'"></v-alert>
     <v-year-picker v-model="value2" placeholder="请选择年份" clearable></v-year-picker>
   </div>

    <div class="m-3">
      <p>周选择器</p>
     <v-alert class="my-2" :description="value3 || '>'"></v-alert>
     <v-week-picker v-model="value3" placeholder="请选择周数" clearable></v-week-picker>
   </div>

   <div class="m-3">
      <p>日期范围选择器</p>
     <v-alert class="my-2" :description="'' + value4 || '>'"></v-alert>
     <v-range-picker v-model="value4" start-placeholder="开始日期" end-placeholder="结束日期" clearable></v-range-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = '2018/12/11'

  value1: string = '2018/12'

  value2: string = '2018'

  value3: string = '2018/45'

  value4: string[] = ['2018/12/10', '2019/02/25']
}
</script>
