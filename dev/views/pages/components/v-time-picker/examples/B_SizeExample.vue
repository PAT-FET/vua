<template>
<div>
   <div class="d-flex">
     <v-time-picker class="mx-2" placeholder="请选择时间" size="sm" v-model="value" clearable></v-time-picker>
     <v-time-picker class="mx-2" placeholder="请选择时间" v-model="value1" clearable></v-time-picker>
     <v-time-picker class="mx-2" placeholder="请选择时间" size="lg" v-model="value2" clearable></v-time-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   三种大小
 * @desc 三种大小的输入框
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value: string = '14:22:12'

  value1: string = ''

  value2: string = '00:23:34'
}
</script>
