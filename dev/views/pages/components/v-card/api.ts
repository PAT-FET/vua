const card = {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题'
    },
    {
      name: 'size',
      default: ``,
      type: `'sm' | 'md'`,
      desc: '尺寸'
    },
    {
      name: 'headerCls',
      default: '',
      type: `string`,
      desc: '自定义头部样式'
    },
    {
      name: 'bodyCls',
      default: '',
      type: `string`,
      desc: '自定义主体样式'
    },
    {
      name: 'footerCls',
      default: '',
      type: `string`,
      desc: '自定义页脚样式'
    }
  ],
  slots: [
    {
      name: 'title',
      desc: '标题'
    },
    {
      name: 'extra',
      desc: '头部额外内容'
    },
    {
      name: 'cover',
      desc: '封面, 放置 img 元素'
    },
    {
      name: 'footer',
      desc: '页脚'
    },
    {
      name: 'default',
      desc: '主题'
    }
  ]
}

const cardMeta = {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题'
    },
    {
      name: 'description',
      default: ``,
      type: `string`,
      desc: '描述文字'
    },
    {
      name: 'colored',
      default: '',
      type: 'boolean',
      desc: '为 true 时文字为白色，用于有颜色的背景上'
    }
  ],
  slots: [
    {
      name: 'avatar',
      desc: '头像卡插， 用于放置 v-avatar组件'
    },
    {
      name: 'title',
      desc: '标题'
    },
    {
      name: 'description',
      desc: '描述文字'
    }
  ]
}

export default [
  {
    name: 'Card API',
    content: card
  },
  {
    name: 'CarddMeta API',
    content: cardMeta
  }]
