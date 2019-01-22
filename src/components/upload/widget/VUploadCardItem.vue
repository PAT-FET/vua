<template>
<div :class="[b(), statusCls]">
  <div :class="[e('uploading')]" v-if="file.status === 'uploading'">
    <div :class="[e('text')]">正在上传中</div>
    <div :class="[e('progress')]">
      <v-progress v-bind="progressProps"></v-progress>
    </div>
    <div :class="[e('close')]" @click="onClose"></div>
  </div>
  <div :class="[e('info')]" v-else>
    <a :href="file.url || file.thumbUrl" :class="[e('thumbnail')]" target="_blank" rel="noopener noreferrer">
      <img :src="file.url || file.thumbUrl" :alt="file.name" v-if="isImgType">
      <i class="anticon anticon-file-unknown" v-else></i>
    </a>
    <div :class="[e('mask')]">
      <div :class="[e('action')]">
        <span @click="onPreview"><i class="anticon anticon-eye-o"></i></span>
        <span @click="onClose"><i class="anticon anticon-delete ml-3"></i></span>
      </div>
  </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../../mixins'
import { UploadBeforeFn, UploadRequest, UploadFile, UploadType, UploadListType, UploadRequestParam } from '../type'
import UploadItem from '../mixins/UploadItem'
import { isImageUrl } from '../util'

@Component({
  components: {
  },
  name: 'v-upload-card-item'
})
export default class VUploadCardItem extends mixins(Themeable, Bemable, UploadItem) {
  get progressProps () {
    return {
      showInfo: false,
      strokeWidth: 2,
      percent: this.file.percent,
      status: this.file.status === 'success' ? 'success' : (this.file.status === 'error' ? 'exception' : 'active')
    }
  }

  get isImgType (): boolean {
    return isImageUrl(this.file)
  }

  get statusCls () {
    if (!this.file.status) return ''
    return this.m(this.file.status)
  }

  onClose () {
    this.close(this.file)
  }

  onPreview () {
    this.preview(this.file)
  }
}
</script>

<style src="../style/v-upload-card-item.scss" lang="scss"></style>
