<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, TreeIterable, Node, TreeNodeLoadFn } from '../../../mixins'
import { CreateElement, VNode } from 'vue'
import { VExpandTransition, VCheckbox } from '../../../components'
import { VTree } from '../index'

@Component({
  components: {
  VExpandTransition,
  VCheckbox
  },
  name: 'v-tree-node'
  })
export default class VTreeNode extends mixins(Themeable, Bemable) {
  @Prop() node!: Node

  @Inject() resolveNodeKey!: (node: any) => number | string

  @Inject() resovleDataChildren!: (data: any) => any[]

  @Inject() resolveDataLabel!: (data: any) => any

  @Inject() resolveDataDisabled!: (data: any) => boolean

  @Inject() getCheckable!: () => boolean

  @Inject() getlazy!: () => boolean

  @Inject() getLoadFn!: () => TreeNodeLoadFn

  @Inject() getTree!: () => VTree

  loading: boolean = false

  loaded: boolean = false

  get checkable (): boolean {
    return this.getCheckable()
  }

  get expand (): boolean {
    return this.node.expand
  }

  get isLeaf (): boolean {
    let a = this.loaded // just dependence
    return this.node.isLeaf
  }

  get selected (): boolean {
    return this.node.checked
  }

  get indeterminate (): boolean {
    return this.node.indeterminate
  }

  get lazy (): boolean {
    return this.getlazy()
  }

  get loadFn (): TreeNodeLoadFn {
    return this.getLoadFn()
  }

  get isCurrent (): boolean {
    return this.node.store.currentNodeKey === this.node.key
  }

  get visible (): boolean {
    return this.node.visible
  }

  get expandCls () {
    return this.expand ? 'is-expand': ''
  }

  get isLeafCls () {
    return this.isLeaf ? 'is-leaf': ''
  }

  get isCurrentCls () {
    return this.isCurrent ? 'is-current' : ''
  }

  onExpand () {
    if (this.lazy && !this.node.loaded && this.loadFn && !this.loading && !this.isLeaf) {
      this.loading = true
      this.node.loading = true
      this.loadFn({ node: this.node }, (data: any[] | Error) => {
        if (data instanceof Error) {
          // nothing
        } else {
          this.node.loaded = true
          this.loaded = true
          this.node.insertChild(data as any[], 0)
          this.$nextTick().then(() => {
            this.node.expandNode()
          })
        }
        this.loading = false
        this.node.loading = false
      })
    } else {
      this.node.expandNode()
    }
  }

  onSelect (selected: boolean) {
    this.node.selectNode(selected)
    this.getTree().check(this.node)
  }

  onTextClick () {
    this.node.store.currentNodeKey = this.node.key
  }

  render (h: CreateElement): VNode| null {
    if (!this.visible) {
      return null
    }
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
    return h('li', { class: [this.b()] }, [this.renderIndicator(h), this.renderCheckbox(h), this.renderText(h), wrap as VNode])
  }

  renderIndicator (h: CreateElement) {
    let data = {
      class: [this.e('indicator'), this.expandCls, this.isLeafCls],
      on: {
        click: this.onExpand
      }
    }
    let icon = this.loading ? 'anticon-loading anticon-spin' : 'anticon-caret-right'
    let iconNode = null
    let indicatorSlot = this.getTree().$scopedSlots.indicator
    if (indicatorSlot) {
      iconNode = indicatorSlot({
        node: this.node
      })
    } else {
      iconNode = [h('i', { class: ['anticon', 'is-dedault', icon] })]
    }
    return h('span', data, [iconNode])
  }

  renderCheckbox (h: CreateElement): VNode {
    if (!this.checkable) return h('span')
    let data = {
      props: {
        value: this.selected,
        indeterminate: this.indeterminate,
        disabled: this.node.disabled
      },
      on: {
        input: this.onSelect
      }
    }
    return h('span', { class: [this.e('checkbox')] }, [h('v-checkbox', data)])
  }

  renderText (h: CreateElement) {
    let data = {
      class: [this.e('text'), this.isCurrentCls],
      on: {
        click: this.onTextClick
      }
    }
    let contentSlot = this.getTree().$scopedSlots.content
    let contentNode
    if (contentSlot) {
      contentNode = contentSlot({
        node: this.node
      })
    } else {
      contentNode = h('span', this.resolveDataLabel(this.node.data))
    }
    return h('span', data, [contentNode])
  }
}
</script>

<style src="../style/v-tree-node.scss" lang="scss"></style>
