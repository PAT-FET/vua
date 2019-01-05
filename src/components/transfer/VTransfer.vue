<template>
<div :class="[b()]">
  <v-transfer-panel v-bind="panelProps"
    :data-source="sourceItems"
    :title="title[0]"
    :keys.sync="selectedSourceKeys">
      <template slot="footer"><slot name="source-footer"></slot></template>
    </v-transfer-panel>
  <div :class="[e('operation')]">
    <v-button type="outline" color="primary" size="sm" :disabled="disabledToTarget" @click="transferSource" class="d-block">
      <i class="anticon anticon-right"></i>
    </v-button>
    <v-button type="outline" color="primary" size="sm" :disabled="disabledToSource" @click="transferTarget" class="d-block mt-2">
      <i class="anticon anticon-left"></i>
    </v-button>
  </div>
  <v-transfer-panel v-bind="panelProps"
    :data-source="targetItems"
    :title="title[1]"
    :keys.sync="selectedTargetKeys">
    <template slot="footer"><slot name="target-footer"></slot></template>
    </v-transfer-panel>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { TransferItem, TransferFilterFn } from './type'
import { VButton } from '../'
import VTransferPanel from './widget/VTransferPanel.vue'

@Component({
  components: {
  VButton,
  VTransferPanel
  },
  name: 'v-transfer'
  })
export default class VTransfer extends mixins(Themeable, Bemable) {
  @Prop(Array) value!: Array<string | number>

  @Prop(Array) dataSource!: TransferItem[]

  @Prop(Boolean) filterable!: boolean

  @Prop(Function) filterFn!: TransferFilterFn

  @Prop(Boolean) disabled!: boolean

  @Prop({type: Array, default: () => ['Source', 'Target']}) title!: [string, string]

  localTargetKeys: Array<number | string> = []

  selectedSourceKeys: Array<number | string> = []

  selectedTargetKeys: Array<number | string> = []

  @Emit() input (value: Array<string | number>) {}

  get targetKeys (): Array<number | string> {
    return this.value || this.localTargetKeys
  }

  set targetKeys (keys: Array<number | string>) {
    this.localTargetKeys = keys
    this.input(keys)
  }

  get sourceItems (): TransferItem[] {
    return this.items[0]
  }

  get targetItems (): TransferItem[] {
    return this.items[1]
  }

  get items (): [TransferItem[], TransferItem[]] {
    let source = this.dataSource || []
    let s: TransferItem[] = []
    let t: TransferItem[] = []
    let set = new Set(this.targetKeys)
    source.forEach(v => {
      if (set.has(v.key)) t.push(v)
      else s.push(v)
    })
    return [s, t]
  }

  get panelProps () {
    return {
      filterable: this.filterable,
      filterFn: this.filterFn,
      disabled: this.disabled
    }
  }

  get disabledToTarget (): boolean {
    return this.disabled || this.selectedSourceKeys.length < 1
  }

  get disabledToSource (): boolean {
    return this.disabled || this.selectedTargetKeys.length < 1
  }

  transferSource () {
    this.targetKeys.push(...this.selectedSourceKeys)
    this.selectedSourceKeys = []
  }

  transferTarget () {
    let set = new Set(this.selectedTargetKeys)
    this.targetKeys = this.targetKeys.filter(v => !set.has(v))
    this.selectedTargetKeys = []
  }
}
</script>

<style src="./style/v-transfer.scss" lang="scss"></style>
