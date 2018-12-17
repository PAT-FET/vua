const dropdown = {
  props: [
    {
      name: 'trigger',
      default: `'hover'`,
      type: `string`,
      desc: '触发方式'
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
