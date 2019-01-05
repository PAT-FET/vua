
export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `Array<string | number>`,
      desc: '选择值，可使用v-model'
    },
    {
      name: 'dataSource',
      default: ``,
      type: `TransferItem[]`,
      desc: '数据源'
    },
    {
      name: 'filterable',
      default: '',
      type: 'boolean',
      desc: '是否显示过滤框'
    },
    {
      name: 'filterFn',
      default: '',
      type: 'TransferFilterFn',
      desc: '自定义过渡函数， 在filterable=true下有效'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'title',
      default: `['Source', 'Target']`,
      type: '[string, string]',
      desc: '标题'
    }
  ]
}
