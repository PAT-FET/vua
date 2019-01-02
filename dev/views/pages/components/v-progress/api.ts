export default {
  props: [
    {
      name: 'type',
      default: `'line'`,
      type: `'line' | 'circle'`,
      desc: '类型'
    },
    {
      name: 'percent',
      default: `0`,
      type: `number`,
      desc: '百分比 (0 - 100)'
    },
    {
      name: 'status',
      default: ``,
      type: `'success' | 'exception' | 'active' | 'normal'`,
      desc: '进度条状态， 不指定情况下为normal， 达到100时变为 success'
    },
    {
      name: 'width',
      default: `120`,
      type: `number`,
      desc: '圆形进度条的尺寸， 对line类型无效'
    },
    {
      name: 'strokeWidth',
      default: `8`,
      type: `number`,
      desc: '线条宽度'
    },
    {
      name: 'showInfo',
      default: `true`,
      type: `boolean`,
      desc: '是否显示进度数值或状态图标, 可用默认卡槽覆盖内容'
    }
  ]
}
