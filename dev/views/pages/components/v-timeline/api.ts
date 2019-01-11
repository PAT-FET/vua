
export default {
  props: [
    {
      name: 'target',
      default: '',
      type: `BackTopTargetFn`,
      desc: '监听滚动元素，默认为 parentElement 或 body'
    },
    {
      name: 'offset',
      default: `200`,
      type: `number`,
      desc: '滚动高度达到此参数值才出现 BackTop'
    }
  ]
}
