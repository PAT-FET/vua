import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { TreeProps, TreeNodeLoadFn, TreeNodeFilterFn } from './type'
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

  @Prop(Boolean) lazy!: boolean

  @Prop(Function) loadFn!: TreeNodeLoadFn

  @Prop(Function) filterFn!: TreeNodeFilterFn

  currentNodeKey: number | string = ''

  nodeMap = new Map<string | number, Node>()

  expandNodeKeySet = new ReactiveSet < string | number >()

  selectedNodeKeySet = new ReactiveSet<string | number>()

  filterNodeKeySet = new ReactiveSet<string | number>()

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
    return this.dataSource || []
  }

  addNode (node: Node) {
    this.nodeMap.set(this.resolveNodeKey(node), node)
  }

  removeNode (node: Node) {
    this.nodeMap.delete(this.resolveNodeKey(node))
  }

  @Provide() resolveNodeKey (node: any): number | string {
    return node.data[this.nodeKey] || node.id
  }

  @Provide() resovleDataChildren (data: any): any[] {
    return data[this.actualProps.children] || []
  }

  @Provide() resolveDataLabel (data: any): any {
    let label = this.actualProps.label
    if (!label) return ''
    if (typeof label === 'string') return data[label]
    if (typeof label === 'function') return label({ data })
    return ''
  }

  @Provide() resolveDataDisabled (data: any): boolean {
    let disabled = this.actualProps.disabled
    if (!disabled) return false
    if (typeof disabled === 'string') return !!data[disabled]
    if (typeof disabled === 'function') return !!disabled({ data })
    return false
  }

  @Provide() resolveDataIsLeaf (data: any): boolean| undefined {
    let isLeaf = this.actualProps.isLeaf
    if (!isLeaf) return undefined
    if (typeof isLeaf === 'string') return data[isLeaf]
    if (typeof isLeaf === 'function') return isLeaf({ data })
    return undefined
  }

  @Provide() getCheckable (): boolean {
    return this.checkable
  }

  @Provide() getlazy (): boolean {
    return this.lazy
  }

  @Provide() getLoadFn (): TreeNodeLoadFn {
    return this.loadFn
  }

  expandAll (expand: boolean = true) {
    let keys = Array.from(this.nodeMap.values()).filter(v => v.children.length > 0).map(v => this.resolveNodeKey(v))
    this.expandNodeKeySet.clear()
    if (expand) {
      keys.forEach(v => this.expandNodeKeySet.add(v))
    }
  }

  getCheckedNodes (): Node[] {
    return Array.from(this.selectedNodeKeySet.values()).map(v => {
      return this.nodeMap.get(v)
    }).filter(v => !!v) as Node[]
  }

  getCheckedKeys (): (string | number)[] {
    return Array.from(this.selectedNodeKeySet.values())
  }

  setCheckedNodes (nodes: Node[]) {
    this.selectedNodeKeySet.clear() // clear first
    if (!nodes || nodes.length < 1) return
    nodes.forEach(v => {
      v.selectNode(true)
    })
  }

  setCheckedKeys (keys: (string | number)[]) {
    if (!keys || keys.length < 1) return
    this.setCheckedNodes(keys.map(v => this.nodeMap.get(v)).filter(v => !!v) as Node[])
  }

  filter (value: any) {
    // this.filterNodeKeySet.clear()
    this.root.children.forEach(v => v.filter(value))
  }
}
