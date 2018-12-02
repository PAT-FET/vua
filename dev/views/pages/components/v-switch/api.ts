export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `boolean`,
      desc: '开关状态， 可使用 v-model'
    },
    {
      name: 'size',
      default: 'md',
      type: 'sm | md',
      desc: '开关尺寸'
    },
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'activeText',
      default: '',
      type: 'string',
      desc: '激活文字'
    },
    {
      name: 'inactiveText',
      default: '',
      type: `string`,
      desc: '非激活文字'
    },
    {
      name: 'activeIcon',
      default: '',
      type: 'string',
      desc: '激活图标'
    },
    {
      name: 'inactiveIcon',
      default: '',
      type: 'string',
      desc: '非激活图标'
    },
    {
      name: 'loading',
      default: '',
      type: 'boolean',
      desc: '加载状态'
    }
  ],
  events: [
    {
      name: 'change',
      value: `value: boolean`,
      desc: '状态改变事件'
    }
  ]
}
