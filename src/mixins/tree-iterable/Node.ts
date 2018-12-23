import TreeIterable from './index'

let nodeIdSeed: number = 1

export default class Node {
    id: string | number = nodeIdSeed++
    children: Node[] = []
    parent: Node | null = null
    data: any = null
    level: number = 0
    store!: TreeIterable
    // indeterminate: boolean = false
    // text: string = ''
    // checked: boolean = false
    // loaded: boolean = false
    // loading: boolean = false

    get topNode (): Node| null {
      return null
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
      if (children.length > 0) {
        let nodes = children.map(v => {
          return new Node({
            parent: this,
            data: v,
            store: this.store
          })
        })
        this.children.push(...nodes)
      }
    }

    getSiblings (): Node[] {
      if (!this.parent) return []
      return this.parent.children.filter(v => v !== this)
    }
}
