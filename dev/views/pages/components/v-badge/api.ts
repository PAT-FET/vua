export default {
  props: [
    {
      name: 'value',
      default: ``,
      type: `string | number`,
      desc: '输入值'
    },
    {
      name: 'max',
      default: '',
      type: `number`,
      desc: '输入值为数字生效'
    },
    {
      name: 'dot',
      default: '',
      type: `boolean`,
      desc: '是否展示为红点'
    }
  ]
}
