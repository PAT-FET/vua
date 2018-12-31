export default {
  props: [
    {
      name: 'type',
      default: '',
      type: `string`,
      desc: '图标类型， 详见 icons 列表'
    },
    {
      name: 'spin',
      default: '',
      type: `boolean`,
      desc: '是否旋转'
    },
    {
      name: 'color',
      default: '',
      type: `string`,
      desc: '颜色，格式请参看 Colorable '
    }
  ]
}
