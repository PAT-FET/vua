<template>
<ul :class="[b(), listTypeCls]">
  <li :class="[e('item')]" v-for="(file, i) in files" :key="i">
    <v-upload-text-item :file="file" v-on="itemEventHandle" v-if="listType === 'text'"></v-upload-text-item>
    <v-upload-picture-item :file="file" v-on="itemEventHandle" v-if="listType === 'picture'"></v-upload-picture-item>
    <v-upload-card-item :file="file" v-on="itemEventHandle" v-if="listType === 'picture-card'"></v-upload-card-item>
  </li>
</ul>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../../mixins'
import { UploadBeforeFn, UploadRequest, UploadFile, UploadType, UploadListType, UploadRequestParam } from '../type'
import VUploadTextItem from './VUploadTextItem.vue'
import VUploadPictureItem from './VUploadPictureItem.vue'
import VUploadCardItem from './VUploadCardItem.vue'
@Component({
  components: {
  VUploadTextItem,
  VUploadPictureItem,
  VUploadCardItem
  },
  name: 'v-upload-list'
  })
export default class VUploadList extends mixins(Themeable, Bemable) {
  @Prop(Array) files!: UploadFile[]

  @Prop({type: String, default: 'text'}) listType!: UploadListType

  progressProps = {
    showInfo: false,
    strokeWidth: 2
  }

  itemEventHandle = {
    close: this.onClose
  }

  @Emit() close (file: UploadFile) {}

  get listTypeCls () {
    return this.m(this.listType)
  }

  onClose (file: UploadFile) {
    this.close(file)
  }
}
</script>

<style src="../style/v-upload-list.scss" lang="scss"></style>
