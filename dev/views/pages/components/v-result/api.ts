export default {
  props: [
    {
      name: 'type',
      default: `'info'`,
      type: `'primary' | 'success' | 'info' | 'warning' | 'error'`,
      desc: '类型'
    },
    {
      name: 'title',
      default: ``,
      type: `string`,
      desc: '标题'
    },
    {
      name: 'subtitle',
      default: ``,
      type: `string`,
      desc: '副标题'
    }
  ],
  slots: [
    {
      name: 'icon',
      desc: '自定义图标'
    },
    {
      name: 'title',
      desc: '自定义标题'
    },
    {
      name: 'subtitle',
      desc: '自定义副标题'
    },
    {
      name: 'extra',
      desc: '自定义额外内容'
    },
    {
      name: 'default',
      desc: '自定义内容'
    }
  ]
}
