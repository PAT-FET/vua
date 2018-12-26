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
      name: 'filter',
      params: `value: any`,
      returnVal: `boolean`,
      desc: '过滤函数'
    }
  ]
}

const cascader = {
  props: [
    {
      name: 'value',
      default: ``,
      type: `Array<string | number>`,
      desc: '选择的值， 可使用v-model'
    },
    {
      name: 'disabled',
      default: ``,
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'placeholder',
      default: ``,
      type: `string`,
      desc: '占位符'
    },
    {
      name: 'clearable',
      default: ``,
      type: `boolean`,
      desc: '可清空'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'sm' | 'md' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'changeOnSelect',
      default: ``,
      type: `boolean`,
      desc: '选择即改变'
    },
    {
      name: 'searchable',
      default: ``,
      type: `boolean`,
      desc: '可搜索'
    },
    {
      name: 'filterFn',
      default: `defaultFilterFn`,
      type: `TreeNodeFilterFn`,
      desc: '过滤回调函数'
    },
    ...treeIterable.props
  ],
  methods: [
    ...treeIterable.methods
  ],
  events: [
    {
      name: 'change',
      value: `value: Array<string | number>`,
      desc: '值改变事件'
    }
  ]
}

export default cascader
