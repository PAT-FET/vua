export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `number`,
      desc: '数值，可使用 v-model'
    },
    {
      name: 'clearable',
      default: '',
      type: `boolean`,
      desc: '是否可清空'
    },
    {
      name: 'allowHalf',
      default: '',
      type: `boolean`,
      desc: '是否允许半星'
    },
    {
      name: 'readonly',
      default: '',
      type: `boolean`,
      desc: '是否只读'
    },
    {
      name: 'icon',
      default: `'star'`,
      type: `string`,
      desc: '自定义图标'
    },
    {
      name: 'char',
      default: '',
      type: `string`,
      desc: '自定义文字代替图标，将忽略 icon 属性定义'
    }
  ]
}
