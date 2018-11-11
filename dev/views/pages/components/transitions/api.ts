export default {
  props: [
    {
      name: 'group',
      default: '',
      type: 'boolean',
      desc: '单个或分组'
    },
    {
      name: 'mode',
      default: '',
      type: '同vue',
      desc: ''
    },
    {
      name: 'origin',
      default: 'top center 0',
      type: 'string',
      desc: 'css变换原点'
    }
  ]
}
