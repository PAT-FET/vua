
export default {
  props: [
    {
      name: 'visible',
      default: '',
      type: `boolean`,
      desc: '是否可见, 可使用sync'
    },
    {
      name: 'placement',
      default: `'right'`,
      type: `'top' | 'bottom' | 'left' | 'right'`,
      desc: '抽屉的方向'
    },
    {
      name: 'width',
      default: '16rem',
      type: 'string',
      desc: '宽度'
    },
    {
      name: 'height',
      default: '16rem',
      type: 'string',
      desc: '高度'
    },
    {
      name: 'title',
      default: '',
      type: 'string',
      desc: '标题'
    },
    {
      name: 'mask',
      default: 'true',
      type: 'boolean',
      desc: '是否展示遮罩'
    },
    {
      name: 'maskClosable',
      default: 'true',
      type: 'boolean',
      desc: '点击蒙层是否允许关闭'
    },
    {
      name: 'zIndex',
      default: '1000',
      type: 'number',
      desc: '设置 Drawer 的 z-index'
    }
  ]
}
