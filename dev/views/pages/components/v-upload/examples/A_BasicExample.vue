<template>
<div>
  <div class="m-3">
    <v-switch v-model="disabled"></v-switch> Disabled
  </div>
  <div class="m-3">
     <v-upload :disabled="disabled">
       <v-button type="outline">点击上传</v-button>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 点击上传
 * @desc 经典款式，用户点击按钮弹出文件选择框。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
  disabled: boolean = false
}
</script>
