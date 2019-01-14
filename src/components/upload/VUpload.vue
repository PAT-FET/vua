<template>
<div :class="[b(), listTypeCls]">
  <v-upload-control v-bind="controlProps" v-on="controlEventHandler">
    <slot></slot>
  </v-upload-control>
  <!-- <div :class="[e('tip')]"></div> -->
  <v-upload-list v-bind="listProps" v-on="listEventHandler" v-if="showUploadList"></v-upload-list>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { UploadBeforeFn, UploadRequest, UploadFile, UploadType, UploadListType, UploadRequestParam, UploadRequestResult, UploadChangeParam, UploadProgressFn, UploadSuccessFn, UploadErrorFn } from './type'
import { generateUploadFile } from './util'
import { request } from './request'
import VUploadControl from './widget/VUploadControl.vue'
import VUploadList from './widget/VUploadList.vue'

@Component({
  components: {
    VUploadControl,
    VUploadList
  },
  name: 'v-upload'
})
export default class VUpload extends mixins(Themeable, Bemable) {
  @Prop(String) accept!: string

  @Prop(String) action!: string

  @Prop(Boolean) directory!: boolean

  @Prop(Function) beforeUpload!: UploadBeforeFn

  @Prop(Function) customRequest!: UploadRequest

  @Prop(Array) fileList!: UploadFile[]

  @Prop(Boolean) disabled!: boolean

  @Prop({ type: String, default: 'text' }) listType!: UploadListType

  @Prop(Boolean) multiple!: boolean

  @Prop({ type: String, default: 'file' }) name!: string

  @Prop(Number) limit!: number

  @Prop({ type: Boolean, default: true }) showUploadList!: boolean

  @Prop(Function) progressFn!: UploadProgressFn

  @Prop(Function) succcessFn!: UploadSuccessFn

  @Prop(Function) errorFn!: UploadErrorFn

  localFileList: UploadFile[] = []

  requestMap: Map<string, UploadRequestResult> = new Map()

  controlEventHandler = {
    change: this.onFileChange
  }

  listEventHandler = {
    close: this.onRemoveFile,
    preview: this.preview
  }

  get actualFileList (): UploadFile[] {
    return this.fileList || this.localFileList
  }

  set actualFileList (fileList: UploadFile[]) {
    this.localFileList = fileList
    this.updateFileList(fileList)
  }

  get controlProps () {
    return {
      listType: this.listType,
      accept: this.accept,
      directory: this.directory,
      multiple: this.multiple,
      disabled: this.disabled
    }
  }

  get listProps () {
    return {
      files: this.actualFileList,
      listType: this.listType
    }
  }

  get listTypeCls () {
    return this.m(this.listType)
  }

  @Emit('update:fileList') updateFileList (fileList: UploadFile[]) {}

  @Emit() preview (file: File) {}

  @Emit() change (param: UploadChangeParam) {}

  onFileChange (files: UploadFile[]) {
    let ret = [...this.actualFileList, ...files]
    if (this.limit > 0) {
      let len = ret.length
      let start = len - this.limit
      start = start < 0 ? 0 : start
      ret = ret.slice(start, len)
    }
    this.actualFileList = ret
    this.$nextTick().then(() => {
      this.upload()
    })
  }

  onRemoveFile (file: UploadFile) {
    let ret = this.requestMap.get(file.uid)
    if (ret) {
      ret.abort()
      this.requestMap.delete(file.uid)
    }
    this.actualFileList = this.actualFileList.filter(v => v !== file && v.uid !== file.uid)
  }

  upload () {
    this.actualFileList.filter(v => v.status === 'ready').forEach(v => {
      let res
      if (this.beforeUpload) {
        res = this.beforeUpload(v, this.actualFileList)
        if (res) {
          if (res === true) {
            this.doUploadFile(v)
          } else {
            (res as Promise<Blob | File>).then(file => {
              this.doUploadFile(v)
            })
          }
        }
      } else {
        this.doUploadFile(v)
      }
    })
  }

  doUploadFile (file: UploadFile) {
    let ret = request(this.getRequestParam(file))
    file.status = 'uploading'
    this.requestMap.set(file.uid, ret)
    this.change({ file, fileList: this.actualFileList })
  }

  getRequestParam (file: UploadFile): UploadRequestParam {
    let param = {
      withCredentials: false,
      file: file.originFileObj as File,
      filename: file.name,
      action: this.action,
      onProgress: (e: any) => this.onProgress(e, file),
      onSuccess: (res: any) => this.onSuccess(res, file),
      onError: (err: Error) => this.onError(err, file)
    }
    return param
  }

  onProgress (e: any, file: UploadFile) {
    file.percent = e.percent
    if (this.progressFn) this.progressFn(e, file, this.actualFileList)
  }

  onSuccess (res: any, file: UploadFile) {
    this.requestMap.delete(file.uid)
    file.status = 'success'
    file.response = res
    if (this.succcessFn) this.succcessFn(res, file, this.actualFileList)
    this.change({ file, fileList: this.actualFileList })
  }

  onError (err: any, file: UploadFile) {
    console.error(err)
    this.requestMap.delete(file.uid)
    file.status = 'error'
    file.error = err
    if (this.errorFn) this.errorFn(err, file, this.actualFileList)
    this.change({ file, fileList: this.actualFileList })
  }
}
</script>

<style src="./style/v-upload.scss" lang="scss"></style>
