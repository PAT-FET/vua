
export default {
  props: [
    {
      name: 'active',
      default: '',
      type: `boolean`,
      desc: '是否展示动画效果'
    },
    {
      name: 'avatar',
      default: ``,
      type: `boolean | SkeletonAvatar`,
      desc: '是否显示头像占位图'
    },
    {
      name: 'loading',
      default: '',
      type: 'boolean',
      desc: '为 true 时，显示占位图。反之则直接展示子组件'
    },
    {
      name: 'paragraph',
      default: 'true',
      type: 'boolean | SkeletonParagraph',
      desc: '是否显示段落占位图'
    },
    {
      name: 'title',
      default: 'true',
      type: 'boolean | SkeletonTitle',
      desc: '是否显示标题占位图'
    }
  ]
}
