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
