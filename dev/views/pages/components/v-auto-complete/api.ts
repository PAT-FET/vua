
export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `string`,
      desc: '可使用v-model'
    },
    {
      name: 'disabled',
      default: ``,
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'searchFn',
      default: '',
      type: 'AutoCompleteSearchFn',
      desc: '搜索函数'
    }
  ],
  events: [
    {
      name: 'select',
      value: `item: AutoCompleteItem`,
      desc: '查询项点击时触发'
    }
  ],
  scopedSlots: [
    {
      name: 'item',
      value: `{item: AutoCompleteItem}`,
      desc: '选择项自定义渲染'
    }
  ]
}
