<template>
<div>
   <div class="m-3">
     <v-alert class="my-2" :description="value"></v-alert>
     <v-time-picker v-model="value"></v-time-picker>
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
  value: string = '14:22:12'
}
</script>
