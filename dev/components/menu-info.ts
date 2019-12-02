const groups: any = {
  common: {
    title: '通用',
    order: 1
  },
  layout: {
    title: '布局',
    order: 2
  },
  navigate: {
    title: '导航',
    order: 3
  },
  dataEntry: {
    title: '数据录入',
    order: 4
  },
  dataDisplay: {
    title: '数据展示',
    order: 5
  },
  feedback: {
    title: '反馈',
    order: 6
  },
  other: {
    title: '其他',
    order: 7
  },
  default: {
    title: '未分组',
    order: 100
  }
}

const components: any = {
  VButton: {
    title: 'Button 按钮',
    group: 'common'
  },
  VIcon: {
    title: 'Icon 图标',
    group: 'common'
  },
  Transitions: {
    title: 'Transitions 过渡',
    group: 'common'
  },
  VAlert: {
    title: 'Alert 警告提示',
    group: 'feedback'
  },
  VModal: {
    title: 'Modal 对话框',
    group: 'feedback'
  },
  VMessage: {
    title: 'Message 全局提示',
    group: 'feedback'
  },
  VNotification: {
    title: 'Notification 通知提醒框',
    group: 'feedback'
  },
  VPopconfirm: {
    title: 'Popconfirm 气泡确认框',
    group: 'feedback'
  },
  VSpin: {
    title: 'Spin 加载中',
    group: 'feedback'
  },
  VProgress: {
    title: 'Progress 进度条',
    group: 'feedback'
  },
  VSkeleton: {
    title: 'Skeleton 骨架屏',
    group: 'feedback'
  },
  VDrawer: {
    title: 'Drawer 抽屉',
    group: 'feedback'
  },
  VResult: {
    title: 'Result 结果',
    group: 'feedback'
  },
  VLayout: {
    title: 'Layout 布局',
    group: 'layout'
  },
  VGrid: {
    title: 'Grid 栅格',
    group: 'layout'
  },
  VDropdown: {
    title: 'Dropdown 下拉菜单',
    group: 'navigate'
  },
  VMenu: {
    title: 'Menu 导航菜单',
    group: 'navigate'
  },
  VPagination: {
    title: 'Pagination 分页',
    group: 'navigate'
  },
  VBreadcrumb: {
    title: 'Breadcrumb 面包屑',
    group: 'navigate'
  },
  VCheckbox: {
    title: 'Checkbox 多选框',
    group: 'dataEntry'
  },
  VDatePicker: {
    title: 'DatePicker 日期选择框',
    group: 'dataEntry'
  },
  VForm: {
    title: 'Form 表单',
    group: 'dataEntry'
  },
  VInput: {
    title: 'Input 输入框',
    group: 'dataEntry'
  },
  VRate: {
    title: 'Rate 评分',
    group: 'dataEntry'
  },
  VRadio: {
    title: 'Radio 单选框',
    group: 'dataEntry'
  },
  VSwitch: {
    title: 'Switch 开关',
    group: 'dataEntry'
  },
  VSelect: {
    title: 'Select 选择器',
    group: 'dataEntry'
  },
  VTimePicker: {
    title: 'TimePicker 时间选择框',
    group: 'dataEntry'
  },
  VInputNumber: {
    title: 'InputNumber 数字输入框',
    group: 'dataEntry'
  },
  VAutoComplete: {
    title: 'AutoComplete 自动完成',
    group: 'dataEntry'
  },
  VSlider: {
    title: 'Slider 滑动输入条',
    group: 'dataEntry'
  },
  VTransfer: {
    title: 'Transfer 穿梭框',
    group: 'dataEntry'
  },
  VUpload: {
    title: 'Upload 上传',
    group: 'dataEntry'
  },
  VCascader: {
    title: 'Cascader 级联选择',
    group: 'dataEntry'
  },
  VCollapse: {
    title: 'Collapse 折叠面板',
    group: 'dataDisplay'
  },
  VPopover: {
    title: 'Popover 气泡卡片',
    group: 'dataDisplay'
  },
  VTooltip: {
    title: 'Tooltip 文字提示',
    group: 'dataDisplay'
  },
  VTabs: {
    title: 'Tabs 标签页',
    group: 'dataDisplay'
  },
  VTable: {
    title: 'Table 表格',
    group: 'dataDisplay'
  },
  VTree: {
    title: 'Tree 树形控件',
    group: 'dataDisplay'
  },
  VTag: {
    title: 'Tag 标签',
    group: 'dataDisplay'
  },
  VBadge: {
    title: 'Badge 徽标数',
    group: 'dataDisplay'
  },
  VAvatar: {
    title: 'Avatar 头像',
    group: 'dataDisplay'
  },
  VCard: {
    title: 'Card 卡片',
    group: 'dataDisplay'
  },
  VList: {
    title: 'List 列表',
    group: 'dataDisplay'
  },
  VCalendar: {
    title: 'Calendar 日历',
    group: 'dataDisplay'
  },
  VEmpty: {
    title: 'Empty 空状态',
    group: 'dataDisplay'
  },
  VCarousel: {
    title: 'Carousel 走马灯',
    group: 'dataDisplay'
  },
  VStatistic: {
    title: 'Statistic 统计数值',
    group: 'dataDisplay'
  },
  VTimeline: {
    title: 'Timeline 时间轴',
    group: 'dataDisplay'
  },
  VBackTop: {
    title: 'BackTop 回到顶部',
    group: 'other'
  },
  VDivider: {
    title: 'Divider 分割线',
    group: 'other'
  },
  VScrollspy: {
    title: 'Scrollspy 滚动监听',
    group: 'other'
  },
  VPulldown: {
    title: 'Pulldown 下拉面板',
    group: 'other'
  },
  VQueryForm: {
    title: 'QueryForm 查询表单',
    group: 'other'
  }
}

export function generateGroups (items: any[]) {
  let gps: any = {}
  items.map(v => {
    let item = components[v.name]
    if (item) {
      return Object.assign({}, item, v)
    } else {
      return Object.assign({
        title: v.name,
        group: 'default'
      }, v)
    }
  }).forEach(v => {
    if (!gps[v.group]) gps[v.group] = Object.assign({}, groups[v.group], { children: [v] })
    else gps[v.group].children.push(v)
  })
  return Object.values(gps).sort((a: any, b: any) => a.order - b.order)
}
