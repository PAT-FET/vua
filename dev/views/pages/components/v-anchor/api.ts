const anchor = {
  props: [
    {
      name: 'showInk',
      default: 'true',
      type: `boolean`,
      desc: '指定是否显示左侧线条'
    },
    {
      name: 'bounds',
      default: '5',
      type: `number`,
      desc: '锚点区域边界，单位：px'
    }
  ],
  events: [
    {
      name: 'change',
      value: `newHref, oldHref`,
      desc: '链接改变时触发，返回新链接和旧链接'
    }
  ]
}

const anchorLink = {
  props: [
    {
      name: 'href',
      default: ``,
      type: `string`,
      desc: '锚点链接'
    },
    {
      name: 'title',
      default: ``,
      type: `string`,
      desc: '文字内容'
    }
  ]
}

export default [
  {
    name: 'Anchor API',
    content: anchor
  },
  {
    name: 'AnchorLink API',
    content: anchorLink
  }]
