<template>
<div :class="[b(), filterCls]">
  <div :class="[e('header')]">
    <div>
      <label :class="[e('checkbox-wrap')]">
        <v-checkbox v-model="checkAll" :indeterminate="halfChecked" :disabled="disabled"></v-checkbox>
      </label>
      <span :class="[e('counter')]">{{counter}}</span>
    </div>
    <div :class="[e('title')]">{{title}}</div>
  </div>
  <div :class="[e('body')]">
    <div :class="[e('search')]" v-if="filterable">
      <v-input size="sm" :placeholder="placeholder" suffix="search" v-model="query" :debounce="350"></v-input>
    </div>
    <ul :class="[e('list'), disabledCls]">
      <li :class="[e('item'), disabledItemCls(item)]" v-for="item in rendereditems" :key="item.key">
        <label :class="[e('checkbox-wrap')]">
          <v-checkbox v-model="actualKeys" :label="item.key" :disabled="disabledItem(item)">{{item.label}}</v-checkbox>
        </label>
      </li>
    </ul>
    <div :class="[e('message')]" v-if="message">{{message}}</div>
  </div>
  <div :class="[e('footer')]" v-if="$slots.footer">
    <slot name="footer"></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Localeable } from '../../../mixins'
import { TransferItem, TransferFilterFn } from '../type'
import { VCheckbox, VButton, VInput } from '../../'

@Component({
  components: {
  VCheckbox,
  VButton,
  VInput
  },
  name: 'v-transfer-panel'
  })
export default class VTransferPanel extends mixins(Themeable, Bemable, Localeable) {
  @Prop(Array) dataSource!: TransferItem[]

  @Prop(Boolean) filterable!: boolean

  @Prop(Function) filterFn!: TransferFilterFn

  @Prop(Array) keys!: Array<number | string>

  @Prop(Boolean) disabled!: boolean

  @Prop(String) title!: string

  query: string = ''

  @Emit('update:keys') updateKeys (keys: Array<number | string>) {}

  get actualKeys (): Array<number | string> {
    return this.keys
  }

  set actualKeys (keys: Array<number | string>) {
    this.updateKeys(keys)
  }

  get rendereditems (): TransferItem[] {
    return this.filter(this.query, this.dataSource || [])
  }

  get checkAll (): boolean {
    return this.checkableItems.length > 0 && this.checkableItems.length === this.actualKeys.length
  }

  set checkAll (checked: boolean) {
    if (checked) {
      this.actualKeys = this.checkableItems.map(v => v.key)
    } else {
      this.actualKeys = []
    }
  }

  get checkableItems (): TransferItem[] {
    return this.dataSource.filter(v => !v.disabled)
  }

  get halfChecked (): boolean {
    let len = this.actualKeys.length
    return len > 0 && !this.checkAll
  }

  get counter (): string {
    let total = this.rendereditems.length
    let cur = this.actualKeys.length
    return cur + '/' + total
  }

  get placeholder () {
    return this.t('transfer.search')
  }

  get filterCls () {
    return this.filterable ? this.m('has-filter') : ''
  }

  get disabledCls () {
    return this.disabled ? 'disabled' : ''
  }

  get message (): string {
    if (!this.filterable) return ''
    if (this.rendereditems.length < 1) return this.t('noMatchData')
    return ''
  }

  disabledItemCls (item: TransferItem) {
    return this.disabledItem(item) ? 'disabled' : ''
  }

  disabledItem (item: TransferItem): boolean {
    return this.disabled || !!item.disabled
  }

  filter (query: string, list: TransferItem[]): TransferItem[] {
    if (!this.filterable) return list
    let ret: TransferItem[] = []
    ret = list.filter(v => {
      if (!query) return true
      if (this.filterFn) return this.filterFn(query, v)
      return v.label.indexOf(query) >= 0
    })
    return ret
  }
}
</script>

<style src="../style/v-transfer-panel.scss" lang="scss"></style>
