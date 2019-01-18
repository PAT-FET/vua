
export default {
  props: [
    {
      name: 'dashed',
      default: '',
      type: `boolean`,
      desc: '是否虚线'
    },
    {
      name: 'orientation',
      default: `'center'`,
      type: `'left' | 'center' | 'right'`,
      desc: '分割线标题的位置'
    },
    {
      name: 'type',
      default: `'horizontal'`,
      type: `'horizontal' | 'vertical'`,
      desc: '水平还是垂直类型'
    }
  ]
}
