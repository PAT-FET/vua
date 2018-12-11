<template>
<div>
   <div class="m-3">
     <div class="my-2">
       <v-switch v-model="disabled"></v-switch>
     </div>
     <v-time-picker v-model="value" placeholder="请选择时间" :disabled="disabled" clearable ></v-time-picker>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   禁用
 * @desc 禁用时间选择。
 */
@Component({
  components: {
  },
  })
export default class DisableExample extends Vue {
  disabled: boolean = true

  value: string = '14:22:12'
}
</script>
