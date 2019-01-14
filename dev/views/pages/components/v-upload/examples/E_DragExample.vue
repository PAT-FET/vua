<template>
<div>
  <div class="m-3">
     <v-upload>
       <div class="border rounded  w-20 h-12 text-center p-4">
         <div class="text-primary" style="font-size: 2rem;"><i class="anticon anticon-upload"></i></div>
         <div class="display-5">Click or drag file to this area to upload</div>
         <p class="caption">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
       </div>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 拖拽上传
 * @desc 把文件拖入指定区域，完成上传，同样支持点击上传。
 */
@Component({
  components: {
  }
})
export default class DragExample extends Vue {
}
</script>
