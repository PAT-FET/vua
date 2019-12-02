const carousel = {
  props: [
    {
      name: 'trigger',
      default: 'click',
      type: `click | hover`,
      desc: '触发方式'
    },
    {
      name: 'direction',
      default: `bottom`,
      type: `bottom | top | left | right`,
      desc: '方向'
    },
    {
      name: 'autoplay',
      default: `true`,
      type: `boolean`,
      desc: '自动播放'
    },
    {
      name: 'interval',
      default: `3000`,
      type: `number`,
      desc: '自动播放间隔'
    }
  ]
}

export default carousel
