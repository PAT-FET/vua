const queryForm = {
  props: [
    {
      name: 'form',
      default: '',
      type: `any`,
      desc: '表单， 需使用sync'
    },
    {
      name: 'formProps',
      default: '',
      type: `any`,
      desc: '自定义v-form的props'
    }
  ]
}

const queryFormItem = {
  props: [
    {
      name: 'title',
      default: '',
      type: `string`,
      desc: '标题 (暂时不用)'
    },
    {
      name: 'name',
      default: ``,
      type: `string`,
      desc: '域字段名  (暂时不用)'
    },
    {
      name: 'tagFn',
      default: '',
      type: 'QueryFormTagFn',
      desc: '生成标签函数'
    }
  ]
}

export default [
  {
    name: 'QueryForm API',
    content: queryForm
  },
  {
    name: 'QueryFormItem API',
    content: queryFormItem
  }]
