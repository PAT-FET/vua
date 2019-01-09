<template>
<div>
  <div class="m-3">
     <v-upload :file-list.sync="fileList" list-type="picture-card" @change="onChange" @preview="onPreview">
        <div class="text-center" v-if="show">
        <div><i class="anticon anticon-plus"></i></div>
        <div>Upload</div>
      </div>
     </v-upload>

     <v-modal :visible.sync="visible">
       <img :src="file && (file.url || file.thumbUrl)" alt="&times;" style="width: 100%;">
     </v-modal>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UploadFile, UploadChangeParam } from 'src/index'

/**
 * @title 照片墙
 * @desc 用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。
 */
@Component({
  components: {
  },
  })
export default class CardExample extends Vue {
  fileList = [{
    uid: '1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }]

  visible: boolean = false

  file: UploadFile | null = null

  get show () {
    return this.fileList.length < 3
  }

  onChange ({ file }: UploadChangeParam) {

  }

  onPreview (file: UploadFile) {
    this.visible = true
    this.file = file
  }
}
</script>
