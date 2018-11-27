export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `boolean`,
      desc: '是否为加载中状态，可使用 v-model'
    },
    {
      name: 'size',
      default: 'md',
      type: `'sm' | 'md' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'tip',
      default: '',
      type: `string`,
      desc: '提示文字'
    }
  ],
  slots: [
    {
      name: 'icon',
      desc: '自定义图标'
    }
  ]
}
