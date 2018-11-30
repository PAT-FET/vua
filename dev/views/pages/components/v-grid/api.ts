const row = {
  props: [
    {
      name: 'gutter',
      default: '',
      type: `number`,
      desc: '栅格间隔'
    },
    {
      name: 'align',
      default: 'flex-start',
      type: `string`,
      desc: 'flex 布局下的垂直对齐方式'
    },
    {
      name: 'justify',
      default: 'flex-start',
      type: 'string',
      desc: 'flex 布局下的水平排列方式'
    }
  ]
}

const col = {
  props: [
    {
      name: 'offset',
      default: '',
      type: `number`,
      desc: '栅格左侧的间隔格数，间隔内不可以有栅格'
    },
    {
      name: 'order',
      default: '',
      type: 'number',
      desc: '栅格顺序'
    },
    {
      name: 'pull',
      default: '',
      type: 'number',
      desc: '栅格向左移动格数'
    },
    {
      name: 'push',
      default: '',
      type: 'number',
      desc: '栅格向右移动格数'
    },
    {
      name: 'span',
      default: '',
      type: 'number',
      desc: '栅格占位格数'
    },
    {
      name: 'xs',
      default: '',
      type: 'number | object',
      desc: '响应式栅格'
    },
    {
      name: 'sm',
      default: '',
      type: 'number | object',
      desc: '响应式栅格'
    },
    {
      name: 'md',
      default: '',
      type: 'number | object',
      desc: '响应式栅格'
    },
    {
      name: 'lg',
      default: '',
      type: 'number | object',
      desc: '响应式栅格'
    },
    {
      name: 'xl',
      default: '',
      type: 'number | object',
      desc: '响应式栅格'
    }
  ]
}

export default [
  {
    name: 'Row API',
    content: row
  },
  {
    name: 'Col API',
    content: col
  }]
