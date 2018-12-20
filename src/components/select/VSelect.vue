<template>
<div :class="[b(), disabledCls]">
  <v-popper
   :class="[e('popper')]"
   :visible.sync="visible"
   :arrow="false"
   :append-to-body="appendToBody"
   :delay="50"
   :disabled="disabled"
   :options="options"
   :trigger="trigger">
    <div :class="[e('input-container')]"
      @keyup.down.stop.prevent="onPressDown"
      @keyup.up.stop.prevent="onPressUp"
      @keyup.enter.stop.prevent="onPressEnter"
      slot="reference">
      <input style="position: absolute; height:0; width: 0; border: none; outline: 0; overflow: hidden;" ref="tab"/>
      <v-input
        ref="input"
        :class="[e('input'), searchableCls]"
        :size="size"
        :placeholder="phText"
        :value="inputText"
        :readonly="!searchable"
        :clearable="clearable"
        :debounce="350"
        @clear="onClear"
        @input="onInput"
        :disabled="disabled">
        <i :class="[e('arrow'), arrowOpenCls]" slot="suffix" class="anticon anticon-down"></i>
      </v-input>
      <div :class="e('tag-wrap')" v-if="showTagWrap" ref="tagWrap">
        <span :class="[e('tag')]" v-for="item in multipleSelectedItem" :key="item.value">
          <span>{{item.label}}</span>
          <span :class="[e('tag-close')]" @click.stop="toggle(item.value)"><i class="anticon anticon-close"></i></span>
        </span>
        <input :value="inputValue" :class="[e('tag-input')]" type="text" v-if="searchable" ref="tagInput" @input="onTagInput">
      </div>
    </div>
    <div :class="[e('menu')]">
      <div :class="[e('menu-group')]" v-for="(group, i) in groupedRenderedSelectItem" :key="i">
        <div :class="[e('menu-group-title')]" v-if="group.group">{{group.group}}</div>
        <div :class="[e('menu-item'), itemDisabledCls(item), selectedCls(item), itemActiveCls(item)]"
        v-for="item in group.items"
        :key="item.value"
        @click="onItemClick(item)">
          <span>{{item.label}}</span>
          <span :class="[e('selected-icon')]" v-if="multiple && isSelected(item)"><i class="anticon anticon-check"></i></span>
        </div>
      </div>
      <div :class="[e('menu-item')]" class="disabled" v-if="message">{{message}}</div>
      <div :class="[e('menu-item'), 'active']" v-if="showAddableItem" @click="onAddableItemClick">{{inputValue}}</div>
    </div>
  </v-popper>

  <div style="display: none;">
    <slot></slot>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import Group from '@/mixins/Group'
import Select from '@/mixins/Select'
import { SelectSize, SelectValue, SelectFilterFn, SelectSearchFn, SelectItem, GroupedSelectItem } from './select'
import { VInput, VPopper, VOption, VOptionGroup } from '../index'
import Localeable from '@/mixins/Localeable'
import { fireEvent } from '@/utils/dom'

@Component({
  components: {
  VInput,
  VPopper
  },
  name: 'v-select'
  })
export default class VSelect extends mixins(Themeable, Bemable, Group, Localeable) {
  @Prop() @Model('input') value!: SelectValue

  @Prop({type: String, default: 'md'}) size!: SelectSize

  @Prop(Boolean) clearable!: boolean

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) searchable!: boolean

  @Prop(Function) searchFn!: SelectSearchFn

  @Prop(Function) filterFn!: SelectFilterFn

  @Prop(Boolean) addable!: false

  @Prop(String) placeholder!: string

  @Prop(Boolean) multiple!: boolean

  appendToBody: boolean = true

  trigger: string = 'click'

  visible: boolean = false

  newSelectItems: SelectItem[] = []

  romoteSelectItems: SelectItem[] = []

  inputValue: string = ''

  loading: boolean = false

  activeValue: string = ''

  @Emit() input (value: SelectValue) {
    this.change(value)
  }

  @Emit() change (value: SelectValue) {
    fireEvent(this.$el, 'change') // for form to listen
  }

  get options () {
    return {
      placement: 'bottom-start'
    }
  }

  get singleValue (): string {
    if (this.multiple) return ''
    let item = this.selectItems.find(v => v.value === this.value)
    if (!item) return ''
    return item.label
  }

  get inputText () {
    if (this.searchable && this.visible) return this.inputValue
    return this.singleValue
  }

  get multipleSelectedItem (): SelectItem[] {
    if (!this.multiple) return []
    return (this.value as string[]).map(v => {
      return this.selectItems.find(w => w.value === v)
    }).filter(v => !!v) as SelectItem[]
  }

  // placeholder
  get phText () {
    if (!this.multiple && this.searchable && this.visible) return this.singleValue
    return this.placeholder
  }

  selectedCls (item: SelectItem) {
    return this.isSelected(item) ? 'selected' : ''
  }

  itemDisabledCls (item: SelectItem) {
    return item.disabled ? 'disabled' : ''
  }

  itemActiveCls (item: SelectItem) {
    return this.activeValue === item.value ? 'active' : ''
  }

  get arrowOpenCls () {
    return this.visible ? 'open' : ''
  }

  get searchableCls () {
    return this.searchable ? 'is-searchable' : ''
  }

  get disabledCls () {
    return this.disabled ? this.m('disabled') : ''
  }

  isSelected (item: SelectItem) {
    let value = item.value
    if (!value) return false
    if (this.multiple) {
      return this.value.includes(value)
    } else {
      return this.value === value
    }
  }

  get selectItems (): SelectItem[] {
    let staticItems = (this.groupItems as VOption[]).map(v => {
      return {
        get label () {
          return v.label
        },
        get value () {
          return v.value
        },
        get disabled () {
          return v.disabled
        },
        get group () {
          if (v.$parent.$options.name === 'v-option-group') return (v.$parent as VOptionGroup).title
          return ''
        }
      }
    })
    const distinctMap = new Map<string, SelectItem>()
    // this order make sure staticOpts overwrite newSelectOptions
    this.newSelectItems.forEach(v => distinctMap.set(v.value, v))
    this.romoteSelectItems.forEach(v => distinctMap.set(v.value, v))
    staticItems.forEach(v => distinctMap.set(v.value, v))
    return Array.from(distinctMap.values())
  }

  get renderedSelectItems (): SelectItem[] {
    if (!this.searchable) return this.selectItems
    if (this.searchFn) return this.selectItems
    return this.selectItems.filter(v => this.defaultFilterFn(this.inputValue, v))
  }

  get groupedRenderedSelectItem (): GroupedSelectItem[] {
    let ret: GroupedSelectItem[] = []
    let lastItem: SelectItem | null = null
    let currentGroup: GroupedSelectItem | null = null
    this.renderedSelectItems.forEach(v => {
      if (!lastItem) {
        currentGroup = {
          group: v.group,
          items: [v]
        }
        ret.push(currentGroup)
      } else {
        if (lastItem.group === v.group || (!lastItem.group && !v.group)) {
          if (currentGroup) currentGroup.items.push(v)
        } else {
          currentGroup = {
            group: v.group,
            items: [v]
          }
          ret.push(currentGroup)
        }
      }
      lastItem = v
    })
    return ret
  }

  get message () {
    if (this.showAddableItem) return ''
    if (this.loading) return this.t('loading')
    if (this.searchable && this.renderedSelectItems.length < 1) return this.t('noMatchData')
    if (this.selectItems.length < 1) return this.t('noData')
  }

  get showTagWrap () {
    return this.multiple && (this.multipleSelectedItem.length > 0 || this.visible)
  }

  get showAddableItem (): boolean {
    if (!this.multiple || !this.addable || this.renderedSelectItems.length > 0 || !this.inputValue) return false
    return true
  }

  onItemClick (item: SelectItem) {
    if (item.disabled) return
    if (!this.multiple) this.visible = false
    if (this.multiple) {
      this.inputValue = ''
    }
    this.toggle(item.value)
  }

  onClear () {
    this.newSelectItems = []
    if (this.multiple) {
      this.input([])
    } else {
      this.input('')
    }
  }

  onInput (val: string) {
    this.inputValue = val
    if (this.searchable && this.searchFn && this.visible) {
      this.doSearch()
    }
  }

  onTagInput (e: Event) {
    this.inputValue = e.target && (e.target as any).value
    if (this.searchable && this.searchFn && this.visible) {
      this.doSearch()
    }
  }

  onPressEnter () {
    if (this.visible && this.activeValue) {
      if (this.showAddableItem) {
        this.addNewItem()
      } else {
        this.toggle(this.activeValue)
      }
      if (!this.multiple) this.visible = false
    }
  }

  onAddableItemClick () {
    this.addNewItem()
  }

  onPressDown () {
    this.navigateItem(false)
  }

  onPressUp () {
    this.navigateItem(true)
  }

  toggle (value: string) {
    if (this.multiple) {
      if (this.value.includes(value)) {
        this.input((this.value as string[]).filter(v => v !== value))
        // if it's added, remove it
        let idx = this.newSelectItems.findIndex(v => v.value === value)
        if (idx >= 0) this.newSelectItems.splice(idx, 1)
      } else {
        this.input([...this.value, value])
      }
    } else {
      this.input(value)
    }
  }

  defaultFilterFn (input: string, item: SelectItem): boolean {
    return !input || item.label.includes(input)
  }

  doSearch () {
    if (!this.searchable || !this.searchFn) return
    // TODO time sequence issue
    const cb = (items: SelectItem[]) => {
      this.romoteSelectItems = items
      this.loading = false
    }
    this.loading = true
    this.romoteSelectItems = []
    this.searchFn(this.inputValue, cb)
  }

  updateInputHeight () {
    if (!this.multiple || !this.$refs.tagWrap) return
    const $input = this.$el.querySelector('.v-input__input') as HTMLElement
    if (!$input) return
    const $tagWrap = this.$refs.tagWrap
    let height = $tagWrap.offsetHeight
    $input.style.minHeight = (height + 2) + 'px'
  }

  resizeTagInputWidth () {
    const $tagInput = this.$refs.tagInput
    if (!$tagInput) return
    let width = this.inputValue.length * 15 + 20
    $tagInput.style.width = width + 'px'
  }

  navigateItem (up: boolean) {
    if (this.showAddableItem) {
      this.addNewItem()
      return
    }
    let items = this.renderedSelectItems.filter(v => !v.disabled)
    if (items.length < 1 || !this.visible) return
    if (!this.activeValue) {
      this.activeValue = items[0].value
      return
    }
    let idx = items.findIndex(v => v.value === this.activeValue)
    if (up) {
      if (idx > 0) {
        this.activeValue = items[idx - 1].value
      } else {
        this.activeValue = items[items.length - 1].value
      }
    } else {
      if (idx >= 0 && idx < items.length - 1) {
        this.activeValue = items[idx + 1].value
      } else {
        this.activeValue = items[0].value
      }
    }
  }

  addNewItem () {
    if (this.addable && this.inputValue) {
      let value = this.inputValue
      let target = this.newSelectItems.find(v => v.value === value)
      if (target) return
      this.newSelectItems.push({
        value,
        label: value,
        disabled: false
      })
      this.toggle(value)
      this.inputValue = ''
    }
  }

  @Watch ('visible') visibleChange (visible: boolean) {
    if (!visible) {
      setTimeout(() => {
        this.inputValue = ''
      }, 350)
    } else {
      if (this.searchFn && this.searchable) {
        // consider fisrt time
        if (this.romoteSelectItems.length < 1) this.doSearch()
      }
      if (this.searchable || this.addable) {
        if (this.multiple) {
          this.$nextTick().then(() => {
            this.$refs.tagInput.focus()
          })
        } else {
          this.$refs.input.focus()
        }
      } else {
        this.$refs.tab.focus()
      }
    }
  }

  @Watch('inputValue') inputValueChange (inputValue: string) {
    if (this.multiple && this.searchable) {
      this.resizeTagInputWidth()
    }
    if (this.showAddableItem) {
      this.activeValue = this.inputValue
    }
  }

  updated () {
    this.updateInputHeight()
  }

  $refs!: {
    tagWrap: HTMLElement,
    tagInput: HTMLElement,
    input: HTMLElement,
    tab: HTMLElement
  }
}
</script>

<style src="./style/v-select.scss" lang="scss"></style>
