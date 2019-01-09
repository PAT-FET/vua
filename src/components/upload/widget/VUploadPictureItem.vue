<template>
<div :class="[b(), statusCls]">
  <a :href="file.url || file.thumbUrl" :class="[e('thumbnail')]" target="_blank" rel="noopener noreferrer">
    <img :src="file.thumbUrl || file.url" :alt="file.name" v-if="isImgType">
    <i class="anticon anticon-file-unknown" v-else></i>
  </a>
  <div :class="[e('info')]">
    <div :class="[e('text')]">{{file.name}}</div>
    <div :class="[e('progress')]" v-if="file.status === 'uploading'">
      <v-progress v-bind="progressProps"></v-progress>
    </div>
  </div>
  <div :class="[e('close')]" @click="onClose"><i class="anticon anticon-close"></i></div>
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
  name: 'v-upload-picture-item'
  })
export default class VUploadPictureItem extends mixins(Themeable, Bemable, UploadItem) {
  get progressProps () {
    return {
      showInfo: false,
      strokeWidth: 2,
      percent: this.file.percent,
      status: this.file.status === 'success' ? 'success' : (this.file.status === 'error' ? 'exception' : 'active')
    }
  }

  onClose () {
    this.close(this.file)
  }

  get isImgType (): boolean {
    return isImageUrl(this.file)
  }

  get statusCls () {
    if (!this.file.status) return ''
    return this.m(this.file.status)
  }
}
</script>

<style src="../style/v-upload-picture-item.scss" lang="scss"></style>
