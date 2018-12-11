export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `string`,
      desc: '与format格式一致，可使用 v-model'
    },
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'clearable',
      default: '',
      type: `boolean`,
      desc: '可清空'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'sm' | 'md' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'placeholder',
      default: ``,
      type: `string`,
      desc: 'placeholder占位符'
    },
    {
      name: 'hourStep',
      default: '',
      type: `number`,
      desc: '小时间隔'
    },
    {
      name: 'minStep',
      default: '',
      type: `number`,
      desc: '分间隔'
    },
    {
      name: 'secStep',
      default: '',
      type: `number`,
      desc: '秒间隔'
    }
  ]
}
