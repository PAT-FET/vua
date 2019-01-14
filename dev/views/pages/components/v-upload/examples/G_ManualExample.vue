<template>
<div>
  <div class="m-3">
     <v-upload :before-upload="beforeUpload" :file-list.sync="fileList">
       <v-button type="outline">选择文件</v-button>
     </v-upload>

     <v-button type="outline" class="my-3" @click="upload">开始上传</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UploadFile } from 'src'

/**
 * @title 手动上传
 * @desc beforeUpload 返回 false 后，手动上传文件。
 */
@Component({
  components: {
  }
})
export default class ManualExample extends Vue {
  fileList: UploadFile[] = []

  beforeUpload (): boolean {
    return false
  }

  upload () {
    this.fileList.forEach(v => {
      let index = 1
      v.status = 'uploading'
      let timer = setInterval(() => {
        if (index > 5) {
          clearInterval(timer)
          v.status = 'success'
          return
        }
        v.percent = index * 20
        index++
      }, 1000)
    })
  }
}
</script>
