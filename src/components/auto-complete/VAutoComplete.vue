<template>
<div :class="[b()]">
  <v-popper
   :class="[e('popper')]"
   :visible.sync="visible"
   :arrow="false"
   :append-to-body="appendToBody"
   :delay="50"
   :disabled="disabled"
   :options="options"
   :trigger="trigger">
    <div :class="[e('input-container')]" slot="reference">
      <slot>
        <v-input :class="[e('input')]" v-bind="$attrs" :disabled="disabled" :value="value" @input="input"></v-input>
      </slot>
    </div>
    <div :class="[e('content')]">
      <ul :class="[e('menu')]">
        <template v-for="top in dataSource">
          <li :class="[e('menu-group')]" v-if="isGroup(top)" :key="top.title">
            <div :class="[e('menu-group-title')]">{{top.title}}</div>
            <ul :class="[e('menu-group-content')]">
              <li :class="[e('menu-item'), selectedCls(item)]" v-for="item in top.children" :key="item.title"
                @click="onSelect(item)">
                  <slot name="item" :item="item">{{item.title}}</slot>
                </li>
            </ul>
          </li>
          <li :class="[e('menu-item'), selectedCls(top)]" v-else :key="top.title" @click="onSelect(top)">
            <slot name="item" :item="top">{{top.title}}</slot>
          </li>
        </template>
      </ul>
      <div v-if="loading" :class="[e('loading')]">Loading</div>
    </div>
  </v-popper>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { VInput, VPopper } from '../index'
import { AutoCompleteItem, AutoCompleteSearchFn } from './type'
import { debounce } from '../../utils'

@Component({
  components: {
  VInput,
  VPopper
  },
  name: 'v-auto-complete'
  })
export default class VAutoComplete extends mixins(Themeable, Bemable) {
  @Prop(String) value!: string

  @Prop(Boolean) disabled!: boolean

  @Prop(Function) searchFn!: AutoCompleteSearchFn

  appendToBody: boolean = true

  trigger: string = 'click'

  visible: boolean = false

  loading: boolean = false

  dataSource: AutoCompleteItem[] = []

  delaySearch = debounce(this.search, 350)

  searchCounter: number = 1

  @Emit() input (value: string) {
    this.change(value)
  }

  @Emit() change (value: string) {
  }

  @Emit() select (value: AutoCompleteItem) {}

  get options () {
    return {
      placement: 'bottom-start'
    }
  }

  onSelect (item: AutoCompleteItem) {
    this.visible = false
    this.input(item.title)
    this.select(item)
  }

  isGroup (item: AutoCompleteItem): boolean {
    return !!item.children && item.children.length > 0
  }

  isSelected (item: AutoCompleteItem) {
    return item.title === this.value
  }

  selectedCls (item: AutoCompleteItem) {
    return this.isSelected(item) ? 'selected' : ''
  }

  search () {
    if (this.searchFn && this.visible) {
      this.dataSource = []
      const fn = () => {
        this.searchCounter++
        let idx = this.searchCounter
        return (data: AutoCompleteItem[]) => {
          if (idx === this.searchCounter) {
            this.dataSource = data
            this.loading = false
          }
        }
      }
      this.loading = true
      this.searchFn(this.value, fn())
    }
  }

  @Watch('value') valueChange (value: string) {
    this.delaySearch()
  }
}
</script>

<style src="./style/v-auto-complete.scss" lang="scss"></style>
