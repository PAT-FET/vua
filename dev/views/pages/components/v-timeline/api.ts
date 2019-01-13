const timeline = {
  props: [
    {
      name: 'pending',
      default: 'false',
      type: `boolean`,
      desc: '指定是否最后一个节点为幽灵节点'
    }
  ]
}

const timelineItem = {
  props: [
    {
      name: 'color',
      default: `#1890ff`,
      type: `string`,
      desc: '圆圈颜色，可自定义色值'
    }
  ],
  slots: [
    {
      name: 'dot',
      desc: '自定义时间轴点内容'
    },
    {
      name: 'left',
      desc: '自定义时间轴点左侧的内容'
    },
    {
      name: 'right',
      desc: '自定义时间轴点右侧的内容'
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
