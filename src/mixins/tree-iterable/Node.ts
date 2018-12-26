import TreeIterable from './index'

let nodeIdSeed: number = 1

export default class Node {
  id: string | number = nodeIdSeed++
  children: Node[] = []
  parent: Node | null = null
  data: any = null
  level: number = 0
  store!: TreeIterable
  loaded: boolean = false
  loading: boolean = false
  // visible: boolean = true
  // checked: boolean = false
  // text: string = ''

  get topNode (): Node| null {
    return null
  }

  get key (): string | number {
    return this.store.resolveNodeKey(this)
  }

  get label (): any {
    return this.store.resolveDataLabel(this.data)
  }

  get isLeaf (): boolean {
    let isLeafByUser = this.store.resolveDataIsLeaf(this.data)
    if (isLeafByUser !== undefined) return !!isLeafByUser
    if (!this.store.lazy) return this.children.length < 1
    if (this.loaded) return this.children.length < 1
    return false
  }

  get checked (): boolean {
    return this.store.selectedNodeKeySet.has(this.key)
  }

  get indeterminate (): boolean {
    return !this.checked && this.children.some(v => v.checked || v.indeterminate)
  }

  get expand (): boolean {
    return this.store.expandNodeKeySet.has(this.key)
  }

  get disabled (): boolean {
    return this.store.resolveDataDisabled(this.data)
  }

  get visible (): boolean {
    return !this.store.filterNodeKeySet.has(this.key)
  }

  constructor (options: Partial<Node>) {
    Object.assign(this, options)
    if (this.parent) {
      this.level = this.parent.level + 1
    }

    const store = this.store
    if (!store) throw new Error('[Node] store is required')
    store.addNode(this)

    this.setChildren()
  }

  setChildren () {
    // root array, make a new top
    let children
    if (this.level === 0 && Array.isArray(this.data)) {
      children = this.data
    } else {
      children = this.store.resovleDataChildren(this.data)
    }
    this.insertChild(children, 0)
  }

  insertChild (data: any[] | any, index: number) {
    let nodes = this.normalizeNode(data)
    this.children.splice(index, 0, ...nodes)
  }

  normalizeNode (data: any | any[]): Node[] {
    if (!data) return []
    if (Array.isArray(data)) {
      return data.map(v => {
        if (v instanceof Node) return v
        return new Node({
          parent: this,
          data: v,
          store: this.store
        })
      })
    } else {
      if (data instanceof Node) return [data]
      return [new Node({
        parent: this,
        data: data,
        store: this.store
      })]
    }
  }

  getSiblings (): Node[] {
    if (!this.parent) return []
    return this.parent.children.filter(v => v !== this)
  }

  selectNode (selected?: boolean) {
    let key = this.key
    let has = this.store.selectedNodeKeySet.has(key)
    let checkStrictly = this.store.checkStrictly
    let addAction = selected === true || (selected === undefined && !has)
    let isLeaf = this.isLeaf
    if (addAction) {
      this.store.selectedNodeKeySet.add(key)
      if (!checkStrictly) this.children.forEach(v => v.selectNode(true))
    } else {
      this.store.selectedNodeKeySet.delete(key)
      if (!checkStrictly) this.children.forEach(v => v.selectNode(false))
    }
    // if all checked, set parent checked, otherwise unchecked
    if (this.parent && this.level > 1 && !checkStrictly) {
      let allChecked = this.parent.children.every(v => v.checked)
      if (allChecked) this.store.selectedNodeKeySet.add(this.store.resolveNodeKey(this.parent))
      else this.store.selectedNodeKeySet.delete(this.store.resolveNodeKey(this.parent))
    }
  }

  expandNode (expand?: boolean) {
    let key = this.key
    let set = this.store.expandNodeKeySet
    let has = set.has(key)
    let addAction = expand === true || (expand === undefined && !has)
    if (addAction) {
      if (this.store.accordion) {
        this.getSiblings().forEach(v => {
          set.delete(this.store.resolveNodeKey(v))
        })
      }
      set.add(key)
    } else {
      set.delete(key)
    }
  }

  filter (value: any): boolean {
    let ret = true
    if (typeof this.store.filterFn === 'function') {
      ret = this.store.filterFn({ node: this, value: value })
      let c = this.children.some(v => {
        return v.filter(value)
      })
      ret = ret || c
    }
    if (ret) {
      this.store.filterNodeKeySet.delete(this.key)
    } else {
      this.store.filterNodeKeySet.add(this.key)
    }
    return ret
  }

  setCurrentNode () {
    this.store.currentNodeKey = this.key
  }
}
