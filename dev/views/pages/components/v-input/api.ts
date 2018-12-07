const input = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | string`,
      desc: '输入框值， 可使用v-model'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'lg' | 'md' | 'sm'`,
      desc: '输入框尺寸'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'block',
      default: '',
      type: 'boolean',
      desc: '块级显示， 宽度占100%'
    },
    {
      name: 'prepend',
      default: '',
      type: 'string',
      desc: '前置标签'
    },
    {
      name: 'append',
      default: '',
      type: 'string',
      desc: '后置标签'
    },
    {
      name: 'prefix',
      default: '',
      type: 'string',
      desc: '前置图标'
    },
    {
      name: 'suffix',
      default: '',
      type: 'string',
      desc: '后置图标'
    },
    {
      name: 'clearable',
      default: '',
      type: 'boolean',
      desc: '可清空'
    },
    {
      name: 'separator',
      default: '',
      type: 'boolean',
      desc: '是否用作分割符， 用于输入框组中🔗两个输入框（比如区间）'
    },
    {
      name: 'debounce',
      default: '',
      type: 'number',
      desc: '输入去抖延时(ms)'
    }
  ],
  events: [
    {
      name: 'input',
      value: `string | value`,
      desc: '输入事件'
    },
    {
      name: 'change',
      value: `string | value`,
      desc: '内容改变事件'
    },
    {
      name: 'clear',
      value: ``,
      desc: '在点击由 clearable 属性生成的清空按钮时触发'
    },
    {
      name: 'focus',
      value: ``,
      desc: '在 Input 获得焦点时触发'
    },
    {
      name: 'blur',
      value: ``,
      desc: '在 Input 失去焦点时触发'
    }
  ],
  slots: [
    {
      name: 'prefix',
      desc: '前置图标'
    },
    {
      name: 'suffix',
      desc: '后置图标'
    }
  ]
}

const textarea = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | string`,
      desc: '文本域值， 可使用v-model'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'prefix',
      default: '',
      type: 'string',
      desc: '前置图标'
    },
    {
      name: 'suffix',
      default: '',
      type: 'string',
      desc: '后置图标'
    },
    {
      name: 'clearable',
      default: '',
      type: 'boolean',
      desc: '可清空'
    }
  ],
  events: [
    {
      name: 'input',
      value: `string | value`,
      desc: '输入事件'
    },
    {
      name: 'change',
      value: `string | value`,
      desc: '内容改变事件'
    }
  ]
}

export default [
  {
    name: 'Input API',
    content: input
  },
  {
    name: 'Textarea API',
    content: textarea
  }]
