<template>
<div>
   <div class="m-3">
     <v-input-number v-model="value"></v-input-number>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 数字输入框, 可使用键盘上下键。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: number = 0
}
</script>
