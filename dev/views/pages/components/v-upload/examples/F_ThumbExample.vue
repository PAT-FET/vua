<template>
<div>
  <div class="m-3">
     <v-upload list-type="picture" :file-list.sync="fileList">
        <v-button type="outline">点击上传</v-button>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UploadFile, UploadChangeParam } from 'src/index'

/**
 * @title 图片列表样式
 * @desc 上传文件为图片，可展示本地缩略图。
 */
@Component({
  components: {
  },
  })
export default class ThumbExample extends Vue {
  fileList = [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }]
}
</script>
