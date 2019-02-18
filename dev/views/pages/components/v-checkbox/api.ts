const checkbox = {
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
    },
    {
      name: 'indeterminate',
      default: '',
      type: 'boolean',
      desc: '半选状态'
    }
  ],
  events: [
    {
      name: 'change',
      value: `string | boolean`,
      desc: '原生checkbox 的change事件'
    }
  ],
}

const checkboxButton = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | string | booean`,
      desc: '复选按钮值， 可使用v-model'
    },
    {
      name: 'label',
      default: ``,
      type: `number | string | boolean`,
      desc: '复选按钮绑定值'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    }
  ]
}

const checkboxGroup = {
  props: [
    {
      name: 'value',
      default: '',
      type: `number[] | string[] | booean[]`,
      desc: '复选组值， 可使用v-model'
    }
  ]
}

export default [
  {
    name: 'Checkbox API',
    content: checkbox
  },
  {
    name: 'CheckboxButton API',
    content: checkboxButton
  },
  {
    name: 'CheckboxGroup API',
    content: checkboxGroup
  }]
