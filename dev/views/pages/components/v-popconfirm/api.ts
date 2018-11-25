export default {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题'
    },
    {
      name: 'cancelFn',
      default: '',
      type: `Function`,
      desc: '取消时回调'
    },
    {
      name: 'confirmFn',
      default: '',
      type: `Function`,
      desc: '确认时回调'
    },
    {
      name: 'type',
      default: 'primary',
      type: `'primary' | 'success' | 'info' | 'warning' | 'error'`,
      desc: '类型'
    },
    {
      name: 'icon',
      default: '',
      type: 'string',
      desc: '自定义图标'
    },
    {
      name: 'disable',
      default: '',
      type: 'boolean',
      desc: '禁用'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    }
  ]
}
