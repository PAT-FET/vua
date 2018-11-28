export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `boolean`,
      desc: '是否显示状态，可使用 v-model'
    },
    {
      name: 'type',
      default: 'info',
      type: `'success' | 'info' | 'warning' | 'error'`,
      desc: '尺寸'
    },
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题'
    },
    {
      name: 'description',
      default: '',
      type: `string`,
      desc: '描述'
    },
    {
      name: 'showIcon',
      default: '',
      type: `boolean`,
      desc: '是否显示icon'
    },
    {
      name: 'closable',
      default: '',
      type: `boolean`,
      desc: '是否可关闭'
    }
  ],
  slots: [
    {
      name: 'close',
      desc: '自定义关闭文案'
    }
  ]
}
