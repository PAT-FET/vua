export default {
  props: [
    {
      name: 'type',
      default: `'outline'`,
      type: `'depressed' | 'outline'`,
      desc: '类型，参照按钮'
    },
    {
      name: 'color',
      default: '',
      type: `string`,
      desc: '颜色'
    },
    {
      name: 'shape',
      default: '',
      type: `'round'`,
      desc: '目前只支持圆角'
    },
    {
      name: 'closable',
      default: '',
      type: `boolean`,
      desc: '是否可关闭'
    }
  ],
  events: [
    {
      name: 'close',
      value: ``,
      desc: '点击关闭图标触发'
    }
  ]
}
