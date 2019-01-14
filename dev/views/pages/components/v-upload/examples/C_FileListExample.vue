<template>
<div>
  <div class="m-3">
     <v-upload :file-list.sync="fileList">
        <v-button type="outline">点击上传</v-button>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UploadFile, UploadChangeParam } from 'src/index'

/**
 * @title 已上传的文件列表
 * @desc 使用 fileList 设置已上传的内容。
 */
@Component({
  components: {
  }
})
export default class FileListExample extends Vue {
  fileList = [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    response: 'Server Error 500', // custom error message to show
    url: 'http://www.baidu.com/xxx.png'
  }, {
    uid: '2',
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png'
  }, {
    uid: '3',
    name: 'zzz.png',
    status: 'error',
    response: 'Server Error 500', // custom error message to show
    error: new Error('Server Error 500'),
    url: 'http://www.baidu.com/zzz.png'
  }]
}
</script>
