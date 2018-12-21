const form = {
  props: [
    {
      name: 'model',
      default: '',
      type: `object`,
      desc: '表单数据对象'
    },
    {
      name: 'labelPosition',
      default: `'right'`,
      type: `'top' | 'left' | 'right'`,
      desc: '表单域标签的位置'
    },
    {
      name: 'labelWidth',
      default: '',
      type: 'string',
      desc: '表单域标签的宽度'
    },
    {
      name: 'layout',
      default: `'vertical'`,
      type: `'horizontal' | 'vertical'`,
      desc: '表单布局'
    },
    {
      name: 'showMessage',
      default: ``,
      type: `boolean`,
      desc: '是否显示提示消息'
    },
    {
      name: 'rules',
      default: ``,
      type: `object`,
      desc: '表单校验规则'
    }
  ],
  methods: [
    {
      name: 'validate',
      params: ``,
      returnVal: `Promise<FormValidateResult>`,
      desc: '表单校验方法'
    },
    {
      name: 'clearValidate',
      params: ``,
      returnVal: ``,
      desc: '清除校验'
    },
    {
      name: 'resetFields',
      params: ``,
      returnVal: ``,
      desc: '重置表单'
    }
  ]
}

const formItem = {
  props: [
    {
      name: 'label',
      default: ``,
      type: `string`,
      desc: '表单域标签'
    },
    {
      name: 'labelPosition',
      default: `'right'`,
      type: `'top' | 'left' | 'right'`,
      desc: '表单域标签的位置'
    },
    {
      name: 'labelWidth',
      default: '',
      type: 'string',
      desc: '表单域标签的宽度'
    },
    {
      name: 'showMessage',
      default: ``,
      type: `boolean`,
      desc: '是否显示提示消息'
    },
    {
      name: 'rules',
      default: ``,
      type: `object`,
      desc: '表单域校验规则'
    },
    {
      name: 'validateStatus',
      default: `'unvalid'`,
      type: `'valid' | 'invalid' | 'warning' | 'validating' | 'unvalid'`,
      desc: '表单域校验状态， 主要用于自定义状态'
    },
    {
      name: 'message',
      default: ``,
      type: `object`,
      desc: '表单域校验提示消息，主要用于自定义消息'
    }
  ],
  methods: [
    {
      name: 'validate',
      params: ``,
      returnVal: `Promise<FormFieldValidateResult>`,
      desc: '表单域校验方法'
    },
    {
      name: 'clearValidate',
      params: ``,
      returnVal: ``,
      desc: '清除表单域校验'
    },
    {
      name: 'resetField',
      params: ``,
      returnVal: ``,
      desc: '重置表单域'
    }
  ]
}

export default [
  {
    name: 'Form API',
    content: form
  },
  {
    name: 'FormItem API',
    content: formItem
  }]
