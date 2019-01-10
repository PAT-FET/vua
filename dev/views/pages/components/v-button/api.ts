export default {
  props: [
    {
      name: 'type',
      default: `'solid'`,
      type: `'dashed' | 'primary' | 'solid' | 'text'`,
      desc: '按钮类型：实线按钮、虚线按钮、主按钮、文字按钮'
    },
    {
      name: 'size',
      default: 'md',
      type: 'sm | md | large',
      desc: '按钮尺寸， 分为大、中、小'
    },
    {
      name: 'color',
      default: '',
      type: `string`,
      desc: '支持 主题色、内置色、#...'
    },
    {
      name: 'disable',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'shape',
      default: '',
      type: `'round' | 'circle'`,
      desc: '圆角形状与圆形形状'
    },
    {
      name: 'icon',
      default: '',
      type: 'string',
      desc: '支持 anticon 所有图标'
    },
    {
      name: 'loading',
      default: '',
      type: 'boolean',
      desc: '给按钮赋予一个加载中的状态'
    },
    {
      name: 'block',
      default: '',
      type: 'boolean',
      desc: '块状按钮， 宽度为父级宽度'
    },
    {
      name: 'debounce',
      default: '',
      type: 'number',
      desc: '点击去抖'
    },
    {
      name: 'slim',
      default: '',
      type: 'boolean',
      desc: '紧凑模式， 该模式没有水平内部， 主要用于分裂按钮'
    },
    {
      name: 'ghost',
      default: '',
      type: 'boolean',
      desc: '幽灵模式'
    },
    {
      name: 'float',
      default: '',
      type: 'boolean',
      desc: '浮动按钮'
    }
  ],
  events: [
    {
      name: 'click',
      value: ``,
      desc: '点击事件'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    }
  ]
}
