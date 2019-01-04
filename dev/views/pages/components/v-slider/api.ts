
export default {
  props: [
    {
      name: 'value',
      default: '',
      type: `number | number[]`,
      desc: '可使用v-model, range模式下为数组'
    },
    {
      name: 'disabled',
      default: ``,
      type: `boolean`,
      desc: '禁用'
    },
    {
      name: 'dots',
      default: '',
      type: 'boolean',
      desc: '是否只能拖拽到刻度上，需要marks属性'
    },
    {
      name: 'marks',
      default: '',
      type: 'SliderMarks',
      desc: '刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式'
    },
    {
      name: 'max',
      default: '100',
      type: 'number',
      desc: '最大值'
    },
    {
      name: 'min',
      default: '0',
      type: 'number',
      desc: '最小值'
    },
    {
      name: 'range',
      default: '',
      type: 'boolean',
      desc: '双滑块模式'
    },
    {
      name: 'step',
      default: '1',
      type: 'number',
      desc: '步长，取值必须大于 0，并且可被 (max - min) 整除'
    },
    {
      name: 'vertical',
      default: '',
      type: 'boolean',
      desc: '垂直方向'
    },
    {
      name: 'tooltipVisible',
      default: '',
      type: 'boolean | any',
      desc: '值为true时，Tooltip 将会始终显示；true时，始终不显示，哪怕在拖拽及移入时'
    }
  ]
}
