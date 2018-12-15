const picker = {
  props: [
    {
      name: 'disabled',
      default: '',
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'clearable',
      default: '',
      type: `boolean`,
      desc: '可清空'
    },
    {
      name: 'size',
      default: `'md'`,
      type: `'sm' | 'md' | 'lg'`,
      desc: '尺寸'
    },
    {
      name: 'placeholder',
      default: ``,
      type: `string`,
      desc: 'placeholder占位符'
    },
    {
      name: 'disabledDate',
      default: '',
      type: `(date: Date) => boolean`,
      desc: '禁用日期函数'
    }
  ]
}

const date = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string`,
      desc: '输入值， v-model'
    },
    {
      name: 'showTime',
      default: '',
      type: `boolean`,
      desc: `是否显示时间选择器， 该模式下 format默认为 'YYYY/MM/DD HH:mm:ss'`
    },
    {
      name: 'disabledTime',
      default: '',
      type: `(hour, min: sec, date: Date) => boolean`,
      desc: '禁用时间函数'
    }
  ]
}

const range = {
  props: [
    {
      name: 'value',
      default: '',
      type: `string[]`,
      desc: '输入值， v-model'
    },
    {
      name: 'showTime',
      default: '',
      type: `boolean`,
      desc: `是否显示时间选择器， 该模式下 format默认为 'YYYY/MM/DD HH:mm:ss'`
    },
    {
      name: 'disabledTime',
      default: '',
      type: `(hour, min: sec, date: Date) => boolean`,
      desc: '禁用时间函数'
    }
  ]
}

const datePicker = {
  props: [
    {
      name: 'format',
      default: 'YYYY/MM/DD',
      type: `string`,
      desc: '日期格式'
    },
    ...picker.props,
    ...date.props
  ]
}

const monthPicker = {
  props: [
    {
      name: 'format',
      default: 'YYYY/MM',
      type: `string`,
      desc: '日期格式'
    },
    ...picker.props
  ]
}

const yearPicker = {
  props: [
    {
      name: 'format',
      default: 'YYYY',
      type: `string`,
      desc: '日期格式'
    },
    ...picker.props
  ]
}

const weekPicker = {
  props: [
    {
      name: 'format',
      default: 'YYYY/WW',
      type: `string`,
      desc: '日期格式'
    },
    ...picker.props
  ]
}

const rangePicker = {
  props: [
    {
      name: 'format',
      default: 'YYYY/MM/DD',
      type: `string`,
      desc: '日期格式'
    },
    {
      name: 'startPlaceholder',
      default: '',
      type: `string`,
      desc: '开始日期占位符'
    },
    {
      name: 'endPlaceholder',
      default: '',
      type: `string`,
      desc: '结束日期占位符'
    },
    ...picker.props,
    ...range.props
  ]
}

export default [
  {
    name: 'DatePicker API',
    content: datePicker
  },
  {
    name: 'MonthPicker API',
    content: monthPicker
  },
  {
    name: 'YearPicker API',
    content: yearPicker
  },
  {
    name: 'WeekPicker API',
    content: weekPicker
  },
  {
    name: 'RangePicker API',
    content: rangePicker
  }
]
