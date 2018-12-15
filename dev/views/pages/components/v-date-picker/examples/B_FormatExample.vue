<template>
<div>
   <div class="m-3">
     <p>日期选择器</p>
     <v-alert class="my-2" :description="value || '>'"></v-alert>
     <v-date-picker format="YYYY-MM-D" v-model="value" placeholder="请选择日期" clearable></v-date-picker>
   </div>

   <div class="m-3">
     <p>月份选择器</p>
     <v-alert class="my-2" :description="value1 || '>'"></v-alert>
     <v-month-picker format="YYYY-M" v-model="value1" placeholder="请选择月份" clearable></v-month-picker>
   </div>

   <div class="m-3">
     <p>年份选择器</p>
     <v-alert class="my-2" :description="value2 || '>'"></v-alert>
     <v-year-picker format="YY" v-model="value2" placeholder="请选择年份" clearable></v-year-picker>
   </div>

    <div class="m-3">
      <p>周选择器</p>
     <v-alert class="my-2" :description="value3 || '>'"></v-alert>
     <v-week-picker format="YYYY-WW" v-model="value3" placeholder="请选择周数" clearable></v-week-picker>
   </div>

   <div class="m-3">
      <p>日期范围选择器</p>
     <v-alert class="my-2" :description="'' + value4 || '>'"></v-alert>
     <v-range-picker format="YYYY-MM-DD" v-model="value4" start-placeholder="开始日期" end-placeholder="结束日期" clearable></v-range-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   日期格式
 * @desc 使用 format 属性，可以自定义日期显示格式。 具体格式请访问 fecha.js 文档
 */
@Component({
  components: {
  },
  })
export default class FormatExample extends Vue {
  value: string = '2018-12-1'

  value1: string = '2018-12'

  value2: string = '18'

  value3: string = '2018-45'

  value4: string[] = ['2018-12-10', '2019-02-25']
}
</script>
