export default {
  props: [
    {
      name: 'mask',
      default: 'true',
      type: `boolean`,
      desc: '是否显示遮罩'
    },
    {
      name: 'visible',
      default: '',
      type: `boolean`,
      desc: '显示/隐藏，可使用sync'
    },
    {
      name: 'top',
      default: `'15vh'`,
      type: `string`,
      desc: '顶部高度， css 支持单位'
    },
    {
      name: 'width',
      default: `'520px'`,
      type: `string`,
      desc: '宽度， css支持单位'
    },
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题'
    },
    {
      name: 'maskClosable',
      default: 'true',
      type: `boolean`,
      desc: '是否可点击遮罩关闭'
    },
    {
      name: 'keyboard',
      default: 'true',
      type: `boolean`,
      desc: '是否可按esc键关闭'
    },
    {
      name: 'closable',
      default: 'true',
      type: `boolean`,
      desc: '是否显示关闭图标'
    },
    {
      name: 'centered',
      default: '',
      type: `boolean`,
      desc: '是否垂直居中显示'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '内容体'
    },
    {
      name: 'footer',
      desc: '页脚'
    }
  ],
  events: [
    {
      name: 'close',
      value: ``,
      desc: '模态框关闭事件'
    }
  ]
}
