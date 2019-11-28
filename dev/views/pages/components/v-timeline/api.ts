const timeline = {
}

const timelineItem = {
  props: [
    {
      name: 'timestamp',
      default: '',
      type: `string`,
      desc: '时间戳'
    },
    {
      name: 'placement',
      default: `'bottom'`,
      type: `'bottom' | 'top'`,
      desc: '时间戳位置'
    },
    {
      name: 'color',
      default: `'primary'`,
      type: 'string',
      desc: '节点颜色'
    },
    {
      name: 'icon',
      default: ``,
      type: 'string',
      desc: '使用内置图标作为节点'
    },
    {
      name: 'position',
      default: `'left'`,
      type: `'left' | 'right'`,
      desc: '时间戳位置'
    }
  ],
  slots: [
    {
      name: 'icon',
      desc: '自定义图标'
    },
    {
      name: 'default',
      desc: '自定义内容'
    }
  ]
}

export default [
  {
    name: 'Timeline API',
    content: timeline
  },
  {
    name: 'TimelineItem API',
    content: timelineItem
  }]
