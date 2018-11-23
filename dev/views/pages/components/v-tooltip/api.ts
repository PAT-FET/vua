export default {
  props: [
    {
      name: 'appendToBody',
      default: 'true',
      type: `boolean`,
      desc: '是否添加到body'
    },
    {
      name: 'placement',
      default: 'top',
      type: `'top' | 'bottom' | 'left' | 'right' 可加后缀 'start' 与 'end'`,
      desc: '位置'
    },
    {
      name: 'content',
      default: '',
      type: 'string',
      desc: '内容'
    },
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'value',
      default: '',
      type: 'boolean',
      desc: '使用双向绑定控制tooltip的显隐'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    }
  ]
}
