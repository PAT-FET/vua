export default {
  props: [
    {
      name: 'type',
      default: `'char'`,
      type: `'char' | 'icon' | 'image'`,
      desc: '类型， 必须指定'
    },
    {
      name: 'shape',
      default: `'square'`,
      type: `'square' | 'circle'`,
      desc: '形状'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'sm' | 'md' | 'lg' | string`,
      desc: '尺寸， 支持自定义大小， css单位'
    },
    {
      name: 'backgroundColor',
      default: ``,
      type: `string`,
      desc: '自定义背景色，image类型下无效'
    },
    {
      name: 'color',
      default: ``,
      type: `string`,
      desc: '自定义颜色， image类型下无效'
    }
  ]
}
