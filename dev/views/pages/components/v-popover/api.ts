export default {
  props: [
    {
      name: 'appendToBody',
      default: 'true',
      type: `boolean`,
      desc: '是否添加到body'
    },
    {
      name: 'trigger',
      default: 'hover',
      type: `'hover' | 'focus' | 'click`,
      desc: '触发方式'
    },
    {
      name: 'placement',
      default: 'top',
      type: `'top' | 'bottom' | 'left' | 'right' 可加后缀 'start' 与 'end'`,
      desc: '位置'
    },
    {
      name: 'title',
      default: '',
      type: 'string',
      desc: '标题'
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
      desc: '使用双向绑定控制popover的显隐'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'reference',
      desc: '参考元素'
    }
  ]
}
