<template>
<div :class="[b()]">
  <v-modal :visible.sync="item.visible" v-for="(item, i) in modalList" :key="i" @close="onCancel(item)">
    <div :class="[e('body')]">
      <div :class="[e('icon')]">
        <i class="anticon" :class="[...resolveIcon(item)]"></i>
      </div>
      <div :class="[e('content')]">
        <div :class="[e('title')]">{{item.title}}</div>
        <div :class="[e('text')]">{{item.content}}</div>
      </div>
    </div>
    <div :class="[e('footer')]">
      <v-button @click="onCancel(item)" v-if="item.type === 'confirm'" class="mr-2">{{resolveCancelText(item)}}</v-button>
      <v-button color="primary" @click="onConfirm(item)">{{resolveOkText(item)}}</v-button>
    </div>
  </v-modal>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide, Watch, Model, Emit } from 'vue-property-decorator'
import { VNode } from 'vue'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Localeable } from '../../mixins'
import { ModalOption, ModalItem } from './type'
import { VModal } from './index'
import { statusIconMap } from '../../utils'

@Component({
  components: {
  VModal
  },
  name: 'v-modal-service'
  })
export default class VModalService extends mixins(Themeable, Bemable, Localeable) {
  modalList: ModalItem[] = []

  onCancel (item: ModalItem) {
    item.visible = false
    item.reject()
    this.removeItem(item)
  }

  onConfirm (item: ModalItem) {
    item.visible = false
    item.resolve()
    this.removeItem(item)
  }

  removeItem (item: ModalItem) {
    // delay 500ms to complete transition
    setTimeout(() => {
      let idx = this.modalList.findIndex(v => v === item)
      if (idx >= 0) this.modalList.splice(idx, 1)
    }, 500)
  }

  resolveIcon (item: ModalItem) {
    let icon = statusIconMap['primary']
    let color = 'text-primary'
    if (item.type !== 'confirm') {
      icon = statusIconMap[item.type]
      color = `text-${item.type}`
    }
    return [`anticon-${icon}-o`, color]
  }

  resolveOkText (item: ModalItem): string {
    if (item.okText) return item.okText
    return this.t('ok')
  }

  resolveCancelText (item: ModalItem): string {
    if (item.cancelText) return item.cancelText
    return this.t('cancel')
  }
}
</script>
<style lang="scss" src="./style/v-modal-service.scss"></style>
