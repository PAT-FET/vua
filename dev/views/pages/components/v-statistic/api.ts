export default {
  props: [
    {
      name: 'value',
      default: ``,
      type: `number`,
      desc: '值'
    },
    {
      name: 'title',
      default: ``,
      type: `string`,
      desc: '标题'
    },
    {
      name: 'precision',
      default: `0`,
      type: `number`,
      desc: '精度'
    },
    {
      name: 'prefix',
      default: ``,
      type: `string`,
      desc: '前缀'
    },
    {
      name: 'suffix',
      default: ``,
      type: `string`,
      desc: '后缀'
    },
    {
      name: 'color',
      default: ``,
      type: `string`,
      desc: '颜色'
    }
  ],
  slots: [
    {
      name: 'prefix',
      desc: '自定义前缀，如图标'
    },
    {
      name: 'suffix',
      desc: '自定义后缀,如单位'
    }
  ]
}
