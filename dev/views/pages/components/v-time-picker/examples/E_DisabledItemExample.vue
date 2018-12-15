<template>
<div>
   <div class="m-3">
     <p>例如只能选择上班时间段（9:00 - 5:00）</p>
     <v-time-picker v-model="value" placeholder="请选择时间" clearable :disabled-time="disabledTime"></v-time-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 禁止部分选项
 * @desc 通过设置 disabledHour、disabledMin、disabledSec 分别禁止选择部分时分秒。
 */
@Component({
  components: {
  },
  })
export default class DisabledItemExample extends Vue {
  value: string = ''

  disabledTime (hour: number, min: number, sec: number) {
    if (hour < 9) return true
    if (hour > 17) return true
    if (hour === 17 && (min > 0 || sec > 0)) return true
    return false
  }
}
</script>
