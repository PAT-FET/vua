<template>
<div>
  <div class="m-3">
     <v-upload list-type="picture-card" :before-upload="beforeUpload" :show-upload-list="false" :limit="1" @change="onChange">
      <div v-loading="loading">
        <img :src="imageUrl" alt="&times;" v-if="imageUrl" style="width: 5.5rem; height: 5.5rem; border-radius: .25rem;">
       <div class="text-center" v-else>
        <div><i class="anticon anticon-plus"></i></div>
        <div>Upload</div>
      </div>
      </div>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { UploadFile, UploadChangeParam } from 'src/index'

/**
 * @title 用户头像
 * @desc 点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小。
 */
@Component({
  components: {
  },
  })
export default class AvatarExample extends Vue {
  loading: boolean = false

  imageUrl: string = ''

  beforeUpload (file: UploadFile): boolean {
    const isJPG = file.type === 'image/jpeg'
    if (!isJPG) {
      this.$message.error('You can only upload JPG file!')
    }
    const isLt2M = (file.size || 0) / 1024 / 1024 < 2
    if (!isLt2M) {
      this.$message.error('Image must smaller than 2MB!')
    }
    return isJPG && isLt2M
  }

  onChange ({ file }: UploadChangeParam) {
    if (file.status === 'uploading') {
      this.loading = true
    }
    if (file.status === 'success') {
      this.loading = false
      // this is a mock
      this.imageUrl = file.thumbUrl || ''
    }
    if (file.status === 'error') {
      this.loading = false
    }
  }
}
</script>
