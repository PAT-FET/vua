const list = {
  props: [
    {
      name: 'dataSource',
      default: '',
      type: `Array`,
      desc: '数据源'
    },
    {
      name: 'bordered',
      default: ``,
      type: `boolean`,
      desc: '是否展示边框'
    },
    {
      name: 'layout',
      default: `'horizontal'`,
      type: `'horizontal' | 'vertical'`,
      desc: 'ListItem布局'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'md' | 'sm' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'split',
      default: 'true',
      type: `boolean`,
      desc: '是否展示分割线'
    },
    {
      name: 'loading',
      default: '',
      type: `boolean`,
      desc: '当卡片内容还在加载中时，可以用 loading 展示一个占位'
    },
    {
      name: 'grid',
      default: '',
      type: `GridProps`,
      desc: '列表栅格配置'
    },
    {
      name: 'pageable',
      default: '',
      type: `boolean`,
      desc: '是否分页'
    }
  ],
  slots: [
    {
      name: 'header',
      desc: '头部'
    },
    {
      name: 'footer',
      desc: '页脚'
    }
  ],
  scopedSlots: [
    {
      name: 'default',
      value: `{item: any}`,
      desc: '放置ListItem组件'
    }
  ]
}

const listItem = {
  props: [
    {
      name: '-',
      default: '',
      type: ``,
      desc: '-'
    }],
  slots: [
    {
      name: 'meta',
      desc: '放置ListItemMeta组件'
    },
    {
      name: 'action',
      desc: '动作区， 一般放置按钮或图标'
    },
    {
      name: 'default',
      desc: '内容'
    },
    {
      name: 'extra',
      desc: '额外内容'
    }
  ]
}

const listItemMeta = {
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
    name: 'List API',
    content: list
  },
  {
    name: 'ListItem API',
    content: listItem
  },
  {
    name: 'ListItemMeta API',
    content: listItemMeta
  }]
