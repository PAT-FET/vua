const Breadcrumb = {
  props: [
    {
      name: 'separator',
      default: '/',
      type: `string`,
      desc: '分隔符'
    },
    {
      name: 'separator-class',
      default: ``,
      type: `string`,
      desc: '图标分隔符 class'
    }
  ],
  slots: [
    {
      name: 'separator',
      desc: '分隔符'
    },
    {
      name: 'separator-class',
      desc: '图标分隔符 class'
    }
  ]
}
const BreadcrumbItem = {
  props: [
    {
      name: 'to',
      default: '',
      type: `string/object`,
      desc: '路由跳转对象，同 vue-router 的 to'
    },
    {
      name: 'replace',
      default: ``,
      type: `boolean`,
      desc: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录'
    }
  ],
  slots: [
    {
      name: 'to',
      desc: '路由跳转对象，同 vue-router 的 to'
    },
    {
      name: 'replace',
      desc: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录'
    }
  ]
}
export default [
  {
    name: 'Breadcrumb api',
    content: Breadcrumb
  },
  {
    name: 'BreadcrumbItem api',
    content: BreadcrumbItem
  }
]
