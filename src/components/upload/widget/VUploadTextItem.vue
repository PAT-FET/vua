<template>
<div :class="[b(), statusCls]">
  <div :class="[e('text-wrap')]" :title="title">
    <span>
      <span class="mr-2 text-secondary">
        <i class="anticon anticon-loading anticon-spin" v-if="file.status === 'uploading'"></i>
        <i class="anticon anticon-paper-clip" v-else></i>
      </span>
      <span>{{file.name}}</span>
    </span>
    <a :class="[e('close')]" @click="onClose" class="mr-2 text-secondary"><i class="anticon anticon-close"></i> </a>
  </div>
  <div :class="[e('progress')]" v-if="file.status === 'uploading'">
    <v-progress v-bind="progressProps"></v-progress>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../../mixins'
import { UploadBeforeFn, UploadRequest, UploadFile, UploadType, UploadListType, UploadRequestParam } from '../type'
import UploadItem from '../mixins/UploadItem'

@Component({
  components: {
  },
  name: 'v-upload-text-item'
})
export default class VUploadTextItem extends mixins(Themeable, Bemable, UploadItem) {
  get progressProps () {
    return {
      showInfo: false,
      strokeWidth: 2,
      percent: this.file.percent,
      status: this.file.status === 'success' ? 'success' : (this.file.status === 'error' ? 'exception' : 'active')
    }
  }

  get title (): string {
    let errMsg = this.file.error && this.file.error.message
    return errMsg || this.file.name
  }

  get statusCls () {
    if (!this.file.status) return ''
    return this.m(this.file.status)
  }

  onClose () {
    this.close(this.file)
  }
}
</script>

<style src="../style/v-upload-text-item.scss" lang="scss"></style>
