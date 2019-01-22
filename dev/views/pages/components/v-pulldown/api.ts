const pulldown = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string | number`,
      desc: '当前激活面板值, 可使用v-model'
    }
  ]
}

const pulldownPane = {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '选项标题'
    },
    {
      name: 'index',
      default: ``,
      type: `string | number`,
      desc: '唯一标识'
    },
    {
      name: 'tag',
      default: '',
      type: 'boolean',
      desc: '标签选项'
    }
  ]
}

export default [
  {
    name: 'Pulldown API',
    content: pulldown
  },
  {
    name: 'PulldownPane API',
    content: pulldownPane
  }]
