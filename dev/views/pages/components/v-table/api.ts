const dataIterable = {
  props: [
    {
      name: 'dataSource',
      default: ``,
      type: `Array`,
      desc: '数据源'
    },
    {
      name: 'pagination',
      default: ``,
      type: `{
        currentPage: number
        pageSize: number
        total: number
      }`,
      desc: '分页数据源，如果控制分页状态， 需设置该属性， remote模式下该属性是必须的(至少要提供total)'
    },
    {
      name: 'sorter',
      default: ``,
      type: `{
        prop: string
        order: 'desc' | 'asc'
      }`,
      desc: '排序数据源'
    },
    {
      name: 'filters',
      default: ``,
      type: `{
        prop: string
        values: any[]
      }[]`,
      desc: '过滤数据源'
    },
    {
      name: 'rowKey',
      default: ``,
      type: `string | (row: any): string`,
      desc: '提供数据源的唯一标识， 在selection将作为key值， 设置为单值是比较好的选择'
    },
    {
      name: 'pageable',
      default: ``,
      type: `boolean`,
      desc: '是否分页'
    },
    {
      name: 'remote',
      default: ``,
      type: `boolean`,
      desc: '是否是远程获取数据，该模式下， 不再将获取来的数据进行分页、排序以及过滤，而是直接展示'
    },
    {
      name: 'highlightCurrentRow',
      default: ``,
      type: `boolean`,
      desc: '是否高亮当前行'
    }
  ],
  events: [
    {
      name: 'currentPageChange',
      value: `currentPage: number`,
      desc: '当前页发生变化时'
    },
    {
      name: 'pageSizeChange',
      value: `pageSize: number`,
      desc: '当前页条数发生变化时'
    },
    {
      name: 'sorterChange',
      value: `sorter: DataSorter | null`,
      desc: '当前排序条件发生变化时'
    },
    {
      name: 'filtersChange',
      value: `filters: DataFilter[]`,
      desc: '当前过滤条件发生变化时'
    },
    {
      name: 'selectionChange',
      value: `keys: any[]`,
      desc: '当前选择项发生变化时'
    },
    {
      name: 'remoteChange',
      value: `param: DataRemoteChangeParam, type: 'currentPage' | 'pageSize' | 'sorter' | 'filter'`,
      desc: '当前页、当前每页条数、排序条件、过滤条件任意一项发生变化时， 提供该事件只要是便于远程加载数据的事件监听处理'
    },
    {
      name: 'rowClick',
      value: `row`,
      desc: '表格行点击事件'
    }
  ],
  methods: [
    {
      name: 'resetFilter',
      params: `prop?: string`,
      returnVal: `void`,
      desc: '用于重置过滤条件，不设置prop将清空所有'
    },
    {
      name: 'resetSelection',
      params: ``,
      returnVal: `void`,
      desc: '清空所有选择项'
    }
  ]
}

const table = {
  props: [
    ...dataIterable.props,
    {
      name: 'size',
      default: `'lg'`,
      type: `'sm' | 'md' | 'lg'`,
      desc: '表格尺寸'
    },
    {
      name: 'bordered',
      default: ``,
      type: `boolean`,
      desc: '是否显示垂直边框'
    },
    {
      name: 'height',
      default: ``,
      type: `string`,
      desc: '表格高度，溢出时将垂直滚动，并固定表头'
    },
    {
      name: 'maxHeight',
      default: ``,
      type: `string`,
      desc: '表格最大高度'
    },
    {
      name: 'paginationOption',
      default: `{
        showTotal: true,
        showSizeChanger: true
      }`,
      type: `见 VPagination 组件`,
      desc: '分页组件的属性定制'
    },
    {
      name: 'loading',
      default: ``,
      type: `boolean`,
      desc: '加载状态'
    },
    {
      name: 'spanFn',
      default: ``,
      type: `(param: TableCellCbParam): { rowspan: number, colspan: number } | undefined`,
      desc: '合并表格行列函数'
    }
  ],
  events: [
    ...dataIterable.events
  ],
  methods: [
    ...dataIterable.methods
  ]
}

const tableColumn = {
  props: [
    {
      name: 'columnKey',
      default: ``,
      type: `string`,
      desc: '表格列唯一性标识， 如果不设置该属性，将使用prop，在保证唯一性前提下根据情况决定是否设置'
    },
    {
      name: 'prop',
      default: ``,
      type: `string`,
      desc: '标格列所代表的数据字段'
    },
    {
      name: 'label',
      default: ``,
      type: `string`,
      desc: '标格列标题'
    },
    {
      name: 'fixed',
      default: ``,
      type: `'left' | 'right'`,
      desc: '列固定'
    },
    {
      name: 'width',
      default: ``,
      type: `string`,
      desc: '列宽度'
    },
    {
      name: 'minWidth',
      default: ``,
      type: `string`,
      desc: '最小宽度'
    },
    {
      name: 'type',
      default: ``,
      type: `'selection' | 'expand' | 'index'`,
      desc: '表格列类型， 目前有 索引、展开列、选择， 将来可能会添加搜索列用来自定义搜索'
    },
    {
      name: 'selections',
      default: ``,
      type: `TableColumnSelection[]`,
      desc: '自定义选择项'
    },
    {
      name: 'sortable',
      default: ``,
      type: `boolean`,
      desc: '是否可以按当前列排序'
    },
    {
      name: 'filters',
      default: ``,
      type: `TableColumnFilter[]`,
      desc: '定义过滤选项'
    },
    {
      name: 'overflow',
      default: `'wrap'`,
      type: `'ellipsis' | 'nowrap' | 'wrap'`,
      desc: '内容溢出时行为'
    },
    {
      name: 'resizable',
      default: ``,
      type: `boolean`,
      desc: '表格列是否可resize'
    }
  ]
}

export default [
  {
    name: 'Table API',
    content: table
  },
  {
    name: 'TableColnum API',
    content: tableColumn
  }
]
