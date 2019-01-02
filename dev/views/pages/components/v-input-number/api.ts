export default {
  props: [
    {
      name: 'value',
      default: ``,
      type: `number`,
      desc: '输入值, 可使用 v-model'
    },
    {
      name: 'max',
      default: ``,
      type: `number`,
      desc: '最大值'
    },
    {
      name: 'min',
      default: ``,
      type: `number`,
      desc: '最小值'
    },
    {
      name: 'step',
      default: `1`,
      type: `number`,
      desc: '步距'
    },
    {
      name: 'precision',
      default: ``,
      type: `number`,
      desc: '精度'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'lg' | 'md' | 'sm'`,
      desc: '尺寸'
    },
    {
      name: 'disabled',
      default: ``,
      type: `boolean`,
      desc: '禁用'
    }
  ],
  events: [
    {
      name: 'change',
      value: `value: number`,
      desc: '值改变事件'
    }
  ]
}
