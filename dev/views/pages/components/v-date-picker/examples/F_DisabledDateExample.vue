<template>
<div>
   <div class="m-3">
     <p>日期选择器 (只能选择本月)</p>
     <v-alert class="my-2" :description="value || '>'"></v-alert>
     <v-date-picker :disabled-date="disabledDate" v-model="value" placeholder="请选择日期" clearable></v-date-picker>
   </div>

   <div class="m-3">
     <p>日期时间选择器 (只能选择本月, 如果是工作日， 只能选择18点以后)</p>
     <v-alert class="my-2" :description="value5 || '>'"></v-alert>
     <v-date-picker show-time :disabled-date="disabledDate" :disabled-time="disabledTime" v-model="value5" placeholder="请选择日期" clearable></v-date-picker>
   </div>

   <div class="m-3">
     <p>月份选择器 (只能选择今年的上半年)</p>
     <v-alert class="my-2" :description="value1 || '>'"></v-alert>
     <v-month-picker :disabled-date="disabledDate1" v-model="value1" placeholder="请选择月份" clearable></v-month-picker>
   </div>

   <div class="m-3">
     <p>年份选择器 (只能选择最近5年)</p>
     <v-alert class="my-2" :description="value2 || '>'"></v-alert>
     <v-year-picker :disabled-date="disabledDate2" v-model="value2" placeholder="请选择年份" clearable></v-year-picker>
   </div>

    <div class="m-3">
      <p>周选择器 (只能选择偶数月)</p>
     <v-alert class="my-2" :description="value3 || '>'"></v-alert>
     <v-week-picker :disabled-date="disabledDate3" v-model="value3" placeholder="请选择周数" clearable></v-week-picker>
   </div>

   <div class="m-3">
      <p>日期范围选择器 (只能选择最近三个月)</p>
     <v-alert class="my-2" :description="'' + value4 || '>'"></v-alert>
     <v-range-picker :disabled-date="disabledDate4" v-model="value4" start-placeholder="开始日期" end-placeholder="结束日期" clearable></v-range-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  不可选择日期和时间
 * @desc 可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
 */
@Component({
  components: {
  },
  })
export default class DisabledDateExample extends Vue {
  value: string = '2018/12/11'

  value1: string = '2018/12'

  value2: string = '2018'

  value3: string = '2018/45'

  value4: string[] = ['2018/12/10', '2019/02/25']

  value5: string = ''

  disabledDate (date: Date) {
    let now = new Date()
    return now.getFullYear() !== date.getFullYear() || now.getMonth() !== date.getMonth()
  }

  disabledTime (hour: number, sec: number, min: number, date: Date) {
    if (!date) return true
    let dayOfWeek = date.getDay()
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (hour * 3600 + min * 60 + sec < (18 * 3600)) return true
    }
    return false
  }

  disabledDate1 (date: Date) {
    let now = new Date()
    return now.getFullYear() !== date.getFullYear() || date.getMonth() > 5
  }

  disabledDate2 (date: Date) {
    let now = new Date()
    return Math.abs(date.getFullYear() - now.getFullYear()) > 4
  }

  disabledDate3 (date: Date) {
    return date.getMonth() % 2 === 0
  }

  disabledDate4 (date: Date) {
    let now = new Date()
    return now.getFullYear() !== date.getFullYear() || Math.abs(date.getMonth() - now.getMonth()) > 2
  }
}
</script>
