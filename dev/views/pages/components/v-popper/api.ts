export default {
  props: [
    {
      name: 'trigger',
      default: 'hover',
      type: `'hover' | 'click' | 'contextMenu'`,
      desc: '触发popper方式，可置为空'
    },
    {
      name: 'visible',
      default: '',
      type: 'boolean',
      desc: '显示/隐藏 popper (可使用sync)'
    },
    {
      name: 'transition',
      default: '',
      type: `Object | string`,
      desc: '提供一个过渡类型，如果指定一个对象， 可分别指定不同placement下的过渡(尚未实现)'
    },
    {
      name: 'options',
      default: '',
      type: 'PopperOptions',
      desc: '详见 popper.js 文档 PopperOptions 说明'
    },
    {
      name: 'delay',
      default: '100',
      type: `number`,
      desc: 'popper显示/隐藏延迟毫秒数'
    },
    {
      name: 'disabled',
      default: '',
      type: 'boolean',
      desc: '禁用'
    },
    {
      name: 'gutter',
      default: '5',
      type: 'number',
      desc: 'popper元素与reference元素之间的间隙'
    },
    {
      name: 'zIndex',
      default: '1050',
      type: 'number',
      desc: 'popper元素的z-index值'
    },
    {
      name: 'arrow',
      default: 'true',
      type: 'boolean',
      desc: '是否显示箭头'
    },
    {
      name: 'appendToBody',
      default: 'true',
      type: 'boolean',
      desc: '是否将popper元素添加到body下'
    },
    {
      name: 'reference',
      default: '',
      type: 'string',
      desc: '指定触发元素， 默认 reference 作为触发元素, 如果指定了该值, 将其作为css选择器在reference元素下查找'
    },
    {
      name: 'popperClass',
      default: '',
      type: 'string',
      desc: 'popper自定义样式， 可以通过指定border-color改变箭头颜色'
    }
  ],
  events: [
    {
      name: 'update:visible',
      value: `boolean`,
      desc: '显示/隐藏'
    }
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'reference',
      desc: '参考元素卡槽'
    }
  ]
}
