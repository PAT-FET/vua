import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { TreeProps } from './type'
import Node from './Node'
import ReactiveSet from '../../utils/collection/ReactiveSet'

const defaultProps = {
  label: 'label',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf'
}

@Component
export default class TreeIterable extends Vue {
  @Prop(Array) dataSource!: any[]

  @Prop() props!: TreeProps

  @Prop([String, Number]) nodeKey!: string | number

  @Prop(Boolean) accordion!: boolean

  @Prop(Boolean) checkable!: boolean

  currentNodeKey: number | string = ''

  expandNodeKeySet = new ReactiveSet < string | number >()

  selectedNodeKeySet = new ReactiveSet<string | number>()

  // root node
  get root (): Node {
    return new Node({
      store: this,
      data: this.randeredData
    })
  }

  get actualProps () {
    return Object.assign({}, defaultProps, this.props || {})
  }

  get randeredData (): any[] {
    // TODO
    return this.dataSource || []
  }

  nodeMap = new Map<string| number, Node> ()

  addNode (node: Node) {
    this.nodeMap.set(this.resolveNodeKey(node), node)
  }

  removeNode (node: Node) {
    this.nodeMap.delete(this.resolveNodeKey(node))
  }

  // @Provide

  @Provide() resolveNodeKey (node: any): number | string {
    return node.data[this.nodeKey] || node.id
  }

  @Provide() resovleDataChildren (data: any): any[] {
    return data[this.actualProps.children] || []
  }

  @Provide() resolveDataLabel (data: any): any {
    return data[this.actualProps.label]
  }

  @Provide() resolveDataDisabled (data: any): boolean {
    return !!data[this.actualProps.disabled]
  }

  @Provide() isNodeExpand (node: Node): boolean {
    return this.expandNodeKeySet.has(this.resolveNodeKey(node))
  }

  @Provide() expandNode (node: Node, expand?: boolean) {
    let key = this.resolveNodeKey(node)
    let has = this.expandNodeKeySet.has(key)
    let addAction = expand === true || (expand === undefined && !has)
    if (addAction) {
      if (this.accordion) {
        node.getSiblings().forEach(v => {
          this.expandNodeKeySet.delete(this.resolveNodeKey(v))
        })
      }
      this.expandNodeKeySet.add(key)
    } else {
      this.expandNodeKeySet.delete(key)
    }
  }

  @Provide() isNodeSelected (node: Node): boolean {
    if (this.isLeafNode(node)) {
      return this.selectedNodeKeySet.has(this.resolveNodeKey(node))
    } else {
      return node.children.every(v => this.isNodeSelected(v))
    }
  }

  @Provide() isNodeHalfSelected (node: Node): boolean {
    if (this.isLeafNode(node)) return false
    if (this.isNodeSelected(node)) return false
    return node.children.some(v => this.isNodeSelected(v) || this.isNodeHalfSelected(v))
  }

  @Provide() selectNode (node: Node, selected?: boolean) {
    let key = this.resolveNodeKey(node)
    let has = this.selectedNodeKeySet.has(key)
    let addAction = selected === true || (selected === undefined && !has)
    if (addAction) {
      this.selectedNodeKeySet.add(key)
    } else {
      this.selectedNodeKeySet.delete(key)
    }
  } 

  @Provide() isLeafNode (node: Node) {
    // TODO
    return node.children.length < 1
  }

  @Provide() getCheckable(): boolean {
    return this.checkable
  }

  expandAll () {
    let keys = Array.from(this.nodeMap.values()).filter(v => v.children.length > 0).map(v => this.resolveNodeKey(v))
    this.expandNodeKeySet.clear()
    keys.forEach(v => this.expandNodeKeySet.add(v))
  }
}
