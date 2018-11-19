const menu = {
  props: [
    {
      name: 'trigger',
      default: 'hover',
      type: `'click' | 'hover'`,
      desc: 'popper触发方式'
    },
    {
      name: 'mode',
      default: 'vertical',
      type: `'vertical' | 'horizontal' | 'inline'`,
      desc: '导航菜单模式'
    },
    {
      name: 'collapse',
      default: '',
      type: 'boolean',
      desc: '折叠， 只在 inline 模式下生效'
    },
    {
      name: 'defaultActive',
      default: '',
      type: `string`,
      desc: '默认打开菜单项，需要指定菜单项的index属性'
    },
    {
      name: 'defaultOpeneds',
      default: '',
      type: 'string',
      desc: '默认打开子菜单， 只在inline模式下生效， 需要指定子菜单的index'
    },
    {
      name: 'uniqueOpened',
      default: '',
      type: `booean`,
      desc: '是否只能同时打开一个子菜单， 只在inline模式下生效， 目前只在第一级子菜单有效'
    }
  ],
  events: [
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    }
  ]
}

const subMenu = {
  props: [
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'index',
      default: '',
      type: 'string',
      desc: '唯一标识符'
    }
  ],
  events: [
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'title',
      desc: '标题'
    },
    {
      name: 'icon',
      desc: '图标'
    }
  ]
}

const menuItem = {
  props: [
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'index',
      default: '',
      type: 'string',
      desc: '唯一标识符'
    }
  ],
  events: [
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'icon',
      desc: '图标'
    }
  ]
}

const menuGroup = {
  props: [
  ],
  events: [
  ],
  slots: [
    {
      name: 'default',
      desc: '默认卡槽'
    },
    {
      name: 'title',
      desc: '标题'
    }
  ]
}

export default [
  {
    name: 'Menu API',
    content: menu
  },
  {
    name: 'SubMenu API',
    content: subMenu
  },
  {
    name: 'MenuGroup API',
    content: menuGroup
  },
  {
    name: 'MenuItem API',
    content: menuItem
  }]
