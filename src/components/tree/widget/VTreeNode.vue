<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import Bemable from '@/mixins/Bemable'
import TreeIterable from '@/mixins/tree-iterable'
import { CreateElement, VNode } from 'vue'
import Node from '@/mixins/tree-iterable/Node'
import { VExpandTransition } from '../../transitions/index'
import { VCheckbox } from '../../checkbox/index'

@Component({
  components: {
  VExpandTransition
  },
  name: 'v-tree-node'
  })
export default class VTreeNode extends mixins(Themeable, Bemable) {
  @Prop() node!: Node

  @Inject() resolveNodeKey!: (node: any) => number | string

  @Inject() resovleDataChildren!: (data: any) => any[]

  @Inject() resolveDataLabel!: (data: any) => any

  @Inject() resolveDataDisabled!: (data: any) => boolean

  @Inject() isNodeExpand!: (node: Node) => boolean

  @Inject() expandNode!: (node: Node, expand?: boolean) => void

  @Inject() isNodeSelected!: (node: Node) => boolean

  @Inject() isNodeHalfSelected!: (node: Node) => boolean

  @Inject() selectNode!: (node: Node, selected?: boolean) => void

  @Inject() isLeafNode!: (node: Node) => boolean

  @Inject() getCheckable!: () => boolean

  get checkable (): boolean {
    return this.getCheckable()
  }

  get expand (): boolean {
    return this.isNodeExpand(this.node)
  }

  get isLeaf (): boolean {
    return this.isLeafNode(this.node)
  }

  get expandCls () {
    return this.expand ? 'is-expand': ''
  }

  get isLeafCls () {
    return this.isLeaf ? 'is-leaf': ''
  }

  onExpand () {
    this.expandNode(this.node)
  }

  render (h: CreateElement): VNode {
    let children = this.node.children.map(v => {
      let data = {
        props: {
          node: v
        }
      }
      return h('v-tree-node', data)
    })
    let wrap = null
    if (children.length > 0) {
      let wrapData = {
        class: [this.e('child-tree')],
        directives: [
          {
            name: 'show',
            value: this.expand,
            expression: 'expand',
            arg: '',
            modifiers: {},
            oldValue: false
          }
        ]
      }
      wrap = h('v-expand-transition', {}, [
        h('ul', wrapData, children)
      ])
    }
    return h('li', { class: [this.b()] }, [this.renderIndicator(h), this.renderText(h), wrap as VNode])
  }

  renderIndicator (h: CreateElement) {
    let data = {
      class: [this.e('indicator'), this.expandCls, this.isLeafCls],
      on: {
        click: this.onExpand
      }
    }
    return h('span', data, [h('i', { class: ['anticon', 'anticon-caret-right'] })])
  }

  renderCheckbox (h: CreateElement) {
    let data = {
      class: [this.e('checkbox'), this.expandCls, this.isLeafCls],
      on: {
        click: this.onExpand
      }
    }
    return h('span', data, [h('i', { class: ['anticon', 'anticon-caret-right'] })])
  }

  renderText (h: CreateElement) {
    return h('span', { class: [this.e('text')] }, this.resolveDataLabel(this.node.data))
  }
}
</script>

<style src="../style/v-tree-node.scss" lang="scss"></style>
