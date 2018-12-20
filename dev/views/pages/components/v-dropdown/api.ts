const dropdown = {
  props: [
    {
      name: 'trigger',
      default: `'hover'`,
      type: `string`,
      desc: '触发方式'
    },
    {
      name: 'placement',
      default: `'bottom-start'`,
      type: `见popper.js`,
      desc: '出现位置'
    }
  ],
  events: [
    {
      name: 'open',
      value: ``,
      desc: '下拉菜单打开事件'
    },
    {
      name: 'close',
      value: ``,
      desc: '下拉菜单关闭事件'
    }
  ]
}

const dropdownItem = {
  props: [
    {
      name: 'disabled',
      default: ``,
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'divider',
      default: ``,
      type: `boolean`,
      desc: '是否为分割线'
    }
  ]
}

export default [
  {
    name: 'Dropdown API',
    content: dropdown
  },
  {
    name: 'DropdownItem API',
    content: dropdownItem
  }
]
