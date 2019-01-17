const spy = {
  props: [
    {
      name: 'target',
      default: '',
      type: `string`,
      desc: '滚动的目标元素，css 选择符， 目前只支持id'
    },
    {
      name: 'offset',
      default: `10`,
      type: `number`,
      desc: '偏移量'
    }
  ]
}

const item = {
  props: [
    {
      name: 'href',
      default: '',
      type: `string`,
      desc: '目标选择符， 目前只支持id'
    },
    {
      name: 'title',
      default: ``,
      type: `string`,
      desc: '标题'
    }
  ]
}

export default [
  {
    name: 'Scrollspy API',
    content: spy
  },
  {
    name: 'ScrollspyItem API',
    content: item
  }]
