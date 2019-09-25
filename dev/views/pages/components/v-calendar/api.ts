const calendar = {
  props: [
    {
      name: 'format',
      default: 'YYYY/MM/DD',
      type: `string`,
      desc: '日期格式, 当value指定时使用'
    },
    {
      name: 'value',
      default: ``,
      type: `string`,
      desc: '日期值 支持 v-model'
    },
    {
      name: 'cellCls',
      default: '',
      type: `string`,
      desc: '日历单元格自定义样式'
    },
    {
      name: 'disabledDate',
      default: '',
      type: `(date: Date) => boolean`,
      desc: '禁用特定单元格'
    }
  ],
  events: [
    {
      name: 'cell-click',
      value: `date: Date`,
      desc: '当单元格被点击时触发'
    }
  ],
  scopedSlots: [
    {
      name: 'cell',
      value: `{date: Date}`,
      desc: '日历单元格自定义内容'
    }
  ]
}

export default [
  {
    name: 'Calendar API',
    content: calendar
  }]
