export default {
  props: [
    {
      name: 'currentPage',
      default: '',
      type: `number`,
      desc: '当前页， 可使用sync，注意该属性不是必须的， 如果没有提供， 会使用内部维护的一个当前页变量， 默认值为1'
    },
    {
      name: 'pageSize',
      default: '',
      type: `number`,
      desc: '每夜条数， 可使用sync，该属性不是必须的， 如果没有提供， 会使用内部维护的一个当前页变量， 默认值为10'
    },
    {
      name: 'size',
      default: '',
      type: `'md' | 'md'`,
      desc: '尺寸'
    },
    {
      name: 'total',
      default: `0`,
      type: `number`,
      desc: '总条数'
    },
    {
      name: 'pageSizeOptions',
      default: `[5, 10, 20, 30, 40, 50]`,
      type: `number[]`,
      desc: '每页条数选项'
    },
    {
      name: 'showTotal',
      default: '',
      type: `boolean`,
      desc: '显示总条数'
    },
    {
      name: 'showSizeChanger',
      default: '',
      type: `boolean`,
      desc: '显示每页条数选择器'
    },
    {
      name: 'showJumper',
      default: '',
      type: `boolean`,
      desc: '显示跳转到某页'
    }
  ],
  events: [
    {
      name: 'sizeChange',
      value: `pageSize`,
      desc: '当每夜条数发生改变时触发'
    },
    {
      name: 'currentChange',
      value: `currentPage`,
      desc: '当前页发生改变时触发'
    }
  ]
}
