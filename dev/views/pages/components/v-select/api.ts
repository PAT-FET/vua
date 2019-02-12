const select = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string | string[]`,
      desc: '当前值, 可使用v-model'
    },
    {
      name: 'size',
      default: ``,
      type: `'sm' | 'md' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'clearable',
      default: '',
      type: `boolean`,
      desc: '可清空'
    },
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'searchable',
      default: '',
      type: `boolean`,
      desc: '可搜索'
    },
    {
      name: 'searchFn',
      default: '',
      type: `function`,
      desc: '远程搜索函数，searchable 需置为 true'
    },
    {
      name: 'filterFn',
      default: '',
      type: `boolean`,
      desc: '自定义过滤函数，searchable 需置为 true， searchFn定义情况下将忽略'
    },
    {
      name: 'addable',
      default: '',
      type: `boolean`,
      desc: '可以创建并选中选项中不存在的条目， 只在multiple模式下有效'
    },
    {
      name: 'placeholder',
      default: '',
      type: `string`,
      desc: 'placeholder'
    },
    {
      name: 'multiple',
      default: '',
      type: `boolean`,
      desc: '多选'
    },
    {
      name: 'collapse-tags',
      default: '',
      type: `boolean`,
      desc: '是否折叠标签'
    }
  ]
}

const option = {
  props: [
    {
      name: 'label',
      default: '',
      type: `string`,
      desc: '选项标题'
    },
    {
      name: 'value',
      default: ``,
      type: `string`,
      desc: '选项值'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    }
  ]
}

const optionGroup = {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '分组标题'
    }
  ]
}

export default [
  {
    name: 'Select API',
    content: select
  },
  {
    name: 'Option API',
    content: select
  },
  {
    name: 'OptionGroup API',
    content: optionGroup
  }]
