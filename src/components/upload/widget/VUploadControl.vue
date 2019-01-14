<template>
  <div :class="[b(), listTypeCls, disabledCls]" tabindex="0" v-show="$slots.default"
    @click="onControlClick" @drag="onDrop" @dragover="onDragover">
    <input type="file" :class="[e('input'), draggingCls]" ref="file" :disabled="disabled"
    :multiple="multiple" :accept="accept" :directory="directory"
    @click.stop="onInputClick"
    @dragleave="onDragout"
    @change="onFileChange">
    <div :class="e('content')"><slot></slot></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../../mixins'
import { UploadBeforeFn, UploadRequest, UploadFile, UploadType, UploadListType, UploadRequestParam } from '../type'
import { generateUploadFile } from '../util'
import { request } from '../request'

@Component({
  components: {
  },
  name: 'v-upload-control'
})
export default class VUploadControl extends mixins(Themeable, Bemable) {
  @Prop({ type: String, default: 'text' }) listType!: UploadListType

  @Prop(String) accept!: string

  @Prop(Boolean) directory!: boolean

  @Prop(Boolean) multiple!: boolean

  @Prop(Boolean) disabled!: boolean

  @Emit() change (files: UploadFile[]) {}

  dragging: boolean = false

  get listTypeCls () {
    return this.m(this.listType)
  }

  get draggingCls () {
    return this.dragging ? 'is-drag' : ''
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  onFileChange () {
    let files = this.$refs.file.files as FileList
    let ret: UploadFile[] = []
    for (let i = 0; i < files.length; i++) {
      ret.push(generateUploadFile(files[i]))
    }
    this.change(ret)
    this.$refs.file.value = ''
  }

  onControlClick () {
    this.$refs.file.click()
  }

  onDragover (e: Event) {
    this.dragging = true
  }

  onDragout (e: Event) {
    this.dragging = false
  }

  onDrop (e: Event) {
    this.dragging = false
  }

  onInputClick () {
    this.dragging = false
  }

  $refs!: {
    file: HTMLInputElement
  }
}
</script>

<style src="../style/v-upload-control.scss" lang="scss"></style>
