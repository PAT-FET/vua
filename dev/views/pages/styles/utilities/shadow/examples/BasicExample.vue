<template>
<div>
   <div class="m-3 d-flex">
     <div class="w-8 h-8 m-3 shadow-1-up">shadow-1-up</div>
     <div class="w-8 h-8 m-3 shadow-1-down">shadow-1-down</div>
     <div class="w-8 h-8 m-3 shadow-1-left">shadow-1-left</div>
     <div class="w-8 h-8 m-3 shadow-1-right">shadow-1-right</div>
     <div class="w-8 h-8 m-3 shadow-2">shadow-2</div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>

<style lang="scss" module>
</style>
