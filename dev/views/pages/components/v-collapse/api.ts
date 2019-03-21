const collapse = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string | string[]`,
      desc: '当前激活面板名称, accordin下为单值, 可使用v-model'
    },
    {
      name: 'accordion',
      default: ``,
      type: `boolean`,
      desc: '手风琴效果， 一次只能打开一个面板'
    },
    {
      name: 'bordered',
      default: 'true',
      type: `boolean`,
      desc: '边框模式'
    }
  ]
}

const collapseItem = {
  props: [
    {
      name: 'name',
      default: '',
      type: `string`,
      desc: '面板名称， 唯一标识， 确保唯一性'
    },
    {
      name: 'title',
      default: ``,
      type: `string`,
      desc: '面板标题'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    }
  ],
  slots: [
    {
      name: 'title',
      desc: '自定义标题'
    }
  ]
}

export default [
  {
    name: 'Collapse API',
    content: collapse
  },
  {
    name: 'CollapseItem API',
    content: collapseItem
  }]
