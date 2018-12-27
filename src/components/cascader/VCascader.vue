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
    <div :class="[e('input-container')]"
      slot="reference">
      <input style="position: absolute; height:0; width: 0; border: none; outline: 0; overflow: hidden;" ref="tab"/>
      <v-input
        ref="input"
        :class="[e('input')]"
        :size="size"
        :placeholder="placeholderText"
        :value="inputText"
        :readonly="!searchable"
        :clearable="clearable"
        :debounce="350"
        :disabled="disabled"
        @input="onInput"
        @clear="onClear">
        <i :class="[e('arrow')]" slot="suffix" class="anticon anticon-down"></i>
      </v-input>
    </div>
    <div :class="[e('content')]">
      <ul :class="[e('menu')]" v-for="(nodes, i) in renderedNodesList" :key="i">
        <li :class="[e('menu-item'), expandItemCls(node), isSelectedCls(node), isOpenCls(node), isDisabledCls(node)]"
         v-for="node in nodes" :key="node.id"
         @click="onNodeClick(node)">
          <span>{{node.label}}</span>
          <span :class="[e('menu-item-expand-icon')]" v-if="!isLeaf(node)">
            <i class="anticon anticon-loading anticon-spin" v-if="isNodeLoading(node)"></i>
            <i class="anticon anticon-right" v-else></i>
          </span>
        </li>
      </ul>
      <div :class="[e('message')]" v-if="message">{{message}}</div>
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
import { Bemable, Themeable, TreeIterable, Node, Localeable, TreeNodeFilterFn } from '../../mixins'
import { CreateElement, VNode } from 'vue'
import { CascaderSize } from './type'
import { ReactiveSet, fireEvent } from '../../utils'

const defaultFilterFn: TreeNodeFilterFn = ({ node, value }) => {
  if (!value) return true
  return node.data.label.indexOf(value) !== -1
}

@Component({
  components: {
  },
  name: 'v-cascader'
  })
export default class VCascader extends mixins(Themeable, Bemable, Localeable, TreeIterable) {
  @Model('input') @Prop(Array) value!: Array<string| number>

  @Prop(Boolean) disabled!: boolean

  @Prop(String) placeholder!: string

  @Prop(Boolean) clearable!: boolean

  @Prop({type: String, default: 'md'}) size!: CascaderSize

  @Prop(Boolean) changeOnSelect!: boolean

  @Prop(Boolean) searchable!: boolean

  // overwrite
  @Prop({type: Function, default: defaultFilterFn}) filterFn!: TreeNodeFilterFn

  appendToBody: boolean = true

  trigger: string = 'click'

  visible: boolean = false

  inputValue: string = ''

  loadingNodeSet = new ReactiveSet<string | number>()

  @Emit() input (value: Array<string | number>) {
    this.change(value)
  }

  @Emit() change (value: Array<string | number>) {
    this.$nextTick().then(() => {
      fireEvent(this.$el, 'change')
    })
  }

  get options () {
    return {
      placement: 'bottom-start'
    }
  }

  get renderedNodesList (): Node[][] {
    let ret: Node[][] = []
    let currentNode = this.currentNode
    let children: Node[] = []
    if (!currentNode) {
      children = this.root.children || []
      ret[0] = this.searchable ? filter(children) : children
    } else {
      children = this.searchable ? filter(currentNode.children) : currentNode.children
      if (children.length > 0) {
        ret[currentNode.level] = children
      }
      let node = currentNode.parent
      while (node) {
        children = this.searchable ? filter(node.children) : node.children
        ret[node.level] = children
        node = node.parent
      }
    }
    return ret.filter(v => v.length > 0)
    function filter (nodes: Node[]) {
      return nodes.filter(v => v.visible)
    }
  }

  get actualValue (): string| number {
    return (this.value && this.value.length > 0 && this.value[this.value.length - 1]) || ''
  }

  get renderedValue (): string {
    if (!this.actualValue) return ''
    return this.value && this.value.join(' / ')
  }

  get inputText () {
    if (this.searchable && this.visible) return this.inputValue
    return this.renderedValue
  }

  get placeholderText () {
    if (this.searchable && this.visible) return this.renderedValue
    return this.placeholder
  }

  get outputValue (): Array<string | number> {
    return this.computeValue(this.currentNode)
  }

  get message (): string {
    if (this.renderedData.length < 1) return this.t('noData')
    if (this.searchable && this.renderedNodesList.length < 1) {
      return this.t('noMatchData')
    }
    return ''
  }

  isNodeLoading (node: Node): boolean {
    return this.loadingNodeSet.has(node.key)
  }

  isLeaf (node: Node) {
    return node.isLeaf
  }

  isOpen (node: Node) {
    if (!this.currentNode) return false
    let n: Node | null = this.currentNode
    while (n) {
      if (node.key === n.key) return true
      n = n.parent
    }
    return false
  }

  isSelected (node: Node) {
    return this.currentNode && node.key === this.currentNode.key
  }

  isDisabled (node: Node) {
    return node.disabled
  }

  isOpenCls (node: Node) {
    return this.isOpen(node) ? 'is-open' : ''
  }

  isSelectedCls (node: Node) {
    return this.isSelected(node) ? 'is-selected' : ''
  }

  isDisabledCls (node: Node) {
    return this.isDisabled(node) ? 'disabled' : ''
  }

  expandItemCls (node: Node) {
    return !this.isLeaf(node) ? 'is-expand' : ''
  }

  onNodeClick (node: Node) {
    const vm = this
    if (this.lazy && !node.loaded && this.loadFn && !node.loading && !node.isLeaf) {
      node.loading = true
      this.loadingNodeSet.add(node.key)
      this.loadFn({ node }, (data: any[] | Error) => {
        if (data instanceof Error) {
          // nothing
        } else {
          node.loaded = true
          node.insertChild(data as any[], 0)
          this.$nextTick().then(() => {
            select()
          })
        }
        node.loading = false
        this.loadingNodeSet.delete(node.key)
      })
    } else {
      select()
    }

    function select () {
      node.setCurrentNode()
      if (vm.changeOnSelect && !node.isLeaf) {
        vm.input(vm.outputValue)
      }
      if (node.isLeaf) {
        vm.input(vm.outputValue)
        vm.close()
      }
    }
  }

  onClear () {
    this.input([])
  }

  onInput (val: string) {
    this.inputValue = val
  }

  computeValue (node: Node | null): Array<string | number> {
    if (!node) return []
    let ret = []
    let n: Node | null = node
    while (n && n.level > 0) {
      ret[n.level - 1] = n.key
      n = n.parent
    }
    return ret
  }

  close () {
    this.visible = false
  }

  refreshCurrentNodeKey () {
    let node = this.nodeMap.get(this.actualValue)
    if (node) this.currentNodeKey = node.key
    else this.currentNodeKey = ''
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible) {
      this.refreshCurrentNodeKey()
      if (this.searchable) {
        this.$refs.input.focus()
      } else {
        this.$refs.tab.focus()
      }
    } else {
      setTimeout(() => {
        this.inputValue = ''
      }, 350)
    }
  }

  @Watch('inputValue') inputValueChange (inputValue: string) {
    if (this.searchable) {
      this.filter(this.inputValue)
    }
  }

  mounted () {
    this.refreshCurrentNodeKey()
  }

  $refs!: {
    input: HTMLElement,
    tab: HTMLElement
  }
}
</script>

<style src="./style/v-cascader.scss" lang="scss"></style>
