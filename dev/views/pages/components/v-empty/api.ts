export default {
  props: [
    {
      name: 'description',
      default: '',
      type: `string`,
      desc: '描述文字'
    },
    {
      name: 'imageStyle',
      default: '',
      type: `object`,
      desc: '图片自定义样式'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '自定义描述'
    },
    {
      name: 'image',
      desc: '自定义图片'
    },

  ]
}
