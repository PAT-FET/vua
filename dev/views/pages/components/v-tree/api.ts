const treeIterable = {
  props: [
    {
      name: 'dataSource',
      default: '',
      type: `any[]`,
      desc: '数据源'
    },
    {
      name: 'props',
      default: ``,
      type: `{label, children, disabled, isLeaf}`,
      desc: '用于指定数据相应的属性'
    },
    {
      name: 'nodeKey',
      default: '',
      type: 'string',
      desc: '用于指定标识符字段， 数据都应该指定该属性， 并保持唯一'
    },
    {
      name: 'accordion',
      default: ``,
      type: `boolean`,
      desc: '手风琴模式，是否同级同时只能打开一个'
    },
    {
      name: 'checkable',
      default: ``,
      type: `boolean`,
      desc: '是否可选择'
    },
    {
      name: 'checkStrictly',
      default: ``,
      type: `boolean`,
      desc: '是否严格值选中指定的节点，默认关联选中， 即选择父节点， 其子节点也相应选上；所有子节点选中， 父节点也相应选中'
    },
    {
      name: 'lazy',
      default: ``,
      type: `boolean`,
      desc: '是否是懒加载，需要配合 loadFn 使用'
    },
    {
      name: 'loadFn',
      default: ``,
      type: `TreeNodeLoadFn`,
      desc: '懒加载函数'
    },
    {
      name: 'filterFn',
      default: ``,
      type: `TreeNodeFilterFn`,
      desc: '过滤函数， 调用组件的filter方法时将调用该函数'
    }
  ],
  methods: [
    {
      name: 'expandAll',
      params: `expand: boolean`,
      returnVal: ``,
      desc: '展开/收起'
    },
    {
      name: 'getCheckedNodes',
      params: ``,
      returnVal: `Node[]`,
      desc: '获取选择的节点'
    },
    {
      name: 'getCheckedKeys',
      params: ``,
      returnVal: `Array<string | number>`,
      desc: '获取选择的key值'
    },
    {
      name: 'setCheckedNodes',
      params: `nodes: Node[]`,
      returnVal: ``,
      desc: '设置选择的节点'
    },
    {
      name: 'setCheckedKeys',
      params: `keys: Array<string | number>`,
      returnVal: ``,
      desc: '获取选择的key值'
    },
    {
      name: 'filter',
      params: `value: any`,
      returnVal: `boolean`,
      desc: '过滤函数'
    }
  ]
}

const tree = {
  props: [
    {
      name: 'defaultExpandAll',
      default: ``,
      type: `boolean`,
      desc: '是否默认展开'
    },
    ...treeIterable.props
  ],
  methods: [
    ...treeIterable.methods
  ],
  scopedSlots: [
    {
      name: 'indicator',
      value: `{node: Node}}`,
      desc: '自定义指示器内容'
    },
    {
      name: 'content',
      value: `{node: Node}}`,
      desc: '自定义文字内容'
    }
  ]
}

export default tree
