<template>
<div>
   <div class="m-3">
     <v-alert class="my-2"><template slot="description">{{value || '-'}}</template></v-alert>
     <v-input-number v-model="value" maxlength="5" :max="10" :min="2" :precision="1"></v-input-number>
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
  value: number| null = null
}
</script>
