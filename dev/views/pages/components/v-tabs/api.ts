const tabs = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string`,
      desc: '当前激活卡片名称, 可使用v-model'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'sm' | 'md' | 'lg'`,
      desc: '选项卡尺寸， 目前只对line模式有效'
    },
    {
      name: 'position',
      default: 'top',
      type: `'top' | 'bottom' | 'left' | 'right'`,
      desc: 'card模式只支持 top 和 bottom'
    },
    {
      name: 'type',
      default: 'line',
      type: `'line' | 'card'`,
      desc: '模式'
    },
    {
      name: 'backgroundColor',
      default: '',
      type: `string`,
      desc: '背景色， 语法详见 Colorable， 只对line模式有效'
    },
    {
      name: 'textColor',
      default: '',
      type: `string`,
      desc: '文字色， 语法详见 Colorable， 只对line模式有效'
    },
    {
      name: 'borderColor',
      default: '',
      type: `string`,
      desc: '边框色， 语法详见 Colorable， 只对line模式有效'
    },
    {
      name: 'justify',
      default: '',
      type: `string`,
      desc: '水平对齐方式， 一般用于 line 模式下的 top、 bottom， 取值与flex的justify-content相同'
    },
    {
      name: 'closable',
      default: '',
      type: `boolean`,
      desc: '选项卡是否可关闭'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'extra',
      desc: '额外操作按钮， 比如新增'
    }
  ]
}

const tabPane = {
  props: [
    {
      name: 'name',
      default: '',
      type: `string`,
      desc: '名称， 唯一标识， 确保唯一性'
    },
    {
      name: 'label',
      default: ``,
      type: `string`,
      desc: '标题文字'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'icon',
      default: '',
      type: `string`,
      desc: '标题图标'
    }
  ]
}

export default [
  {
    name: 'Tabs API',
    content: tabs
  },
  {
    name: 'TabPane API',
    content: tabPane
  }]
