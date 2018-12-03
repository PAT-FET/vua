const radio = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | string | booean`,
      desc: '单选框值， 可使用v-model'
    },
    {
      name: 'label',
      default: ``,
      type: `number | string | boolean`,
      desc: '单选框绑定值'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    }
  ]
}

const radioButton = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | string | booean`,
      desc: '单选按钮值， 可使用v-model'
    },
    {
      name: 'label',
      default: ``,
      type: `number | string | boolean`,
      desc: '单选按钮绑定值'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'activeType',
      default: '',
      type: `'outline' | 'depressed' | ''`,
      desc: '激活时按钮类型'
    }
  ]
}

export default [
  {
    name: 'Radio API',
    content: radio
  },
  {
    name: 'RadioButton API',
    content: radioButton
  }]
