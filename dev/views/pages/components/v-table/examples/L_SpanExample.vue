<template>
<div>
  <v-radio-group v-model="size">
    <v-radio-button label="lg">大</v-radio-button>
    <v-radio-button label="md">中</v-radio-button>
    <v-radio-button label="sm">小</v-radio-button>
  </v-radio-group>

  <v-radio-group v-model="border" class="mx-2">
    <v-radio-button label="0">无边框</v-radio-button>
    <v-radio-button label="1">有边框</v-radio-button>

  <v-radio-group class="mx-2" v-model="overflow">
    <v-radio-button label="wrap">换行</v-radio-button>
    <v-radio-button label="nowrap">不换行</v-radio-button>
    <v-radio-button label="ellipsis">省略</v-radio-button>
  </v-radio-group>

  </v-radio-group>

   <div class="m-3">
     <v-table pageable :bordered="bordered" :size="size" :data-source="dataSource" :span-fn="spanFn">
       <v-table-column type="index" label="#" fixed="left"></v-table-column>
       <v-table-column prop="name" :overflow="overflow" label="姓名"></v-table-column>
       <v-table-column prop="age" :overflow="overflow" label="年龄"></v-table-column>
       <v-table-column prop="code" :overflow="overflow" label="区号"></v-table-column>
       <v-table-column prop="tel" :overflow="overflow" label="电话"></v-table-column>
       <v-table-column prop="address" :overflow="overflow" label="地址"></v-table-column>
       <v-table-column column-key="opt" label="操作">
         <template slot-scope="{}">
           <v-button type="text">编辑</v-button> | <v-button type="text">删除</v-button>
         </template>
       </v-table-column>
     </v-table>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  表格行/列合并
 * @desc 多行或多列共用一个数据时，可以合并行或列, 如果是表头 rowIndex 为 -1
 */
@Component({
  components: {
  },
  })
export default class SpanExample extends Vue {
  dataSource = [ { key: 1,
    name: '任静',
    age: 63,
    code: 7085,
    tel: 5751474,
    address: '海南省 三沙市 南沙群岛',
    remark: '场公设立可装你位去照切十看。' },
  { key: 2,
    name: '孟刚',
    age: 28,
    code: 4293,
    tel: 4586065,
    address: '香港特别行政区 九龙 深水埗区',
    remark: '毛那立节情性非部满治月广里。' },
  { key: 3,
    name: '张秀兰',
    age: 74,
    code: 3479,
    tel: 7317719,
    address: '江西省 新余市 其它区',
    remark: '通积约段革市见团过现名四半二花产打。' },
  { key: 4,
    name: '陈超',
    age: 95,
    code: 6268,
    tel: 6970634,
    address: '河南省 周口市 淮阳县',
    remark: '照感分好照动好位务至活常音月何打。' },
  { key: 5,
    name: '蔡平',
    age: 48,
    code: 1553,
    tel: 1201211,
    address: '上海 上海市 普陀区',
    remark: '法带白性物易斗好已才界众过好利每。' },
  { key: 6,
    name: '蔡超',
    age: 59,
    code: 9043,
    tel: 1661005,
    address: '陕西省 商洛市 其它区',
    remark: '条面型圆条色同出于调济共阶究和由相张。' },
  { key: 7,
    name: '谭超',
    age: 30,
    code: 9628,
    tel: 4306714,
    address: '重庆 重庆市 南岸区',
    remark: '门气收细方由确石发家响义所民究今例斯用内。' },
  { key: 8,
    name: '邹明',
    age: 72,
    code: 5888,
    tel: 6985576,
    address: '河北省 衡水市 冀州市',
    remark: '步阶此就算题部只十不进产步类原准机。' } ]

  size: string = 'lg'

  border: string = '1'

  get bordered () {
    return this.border !== '0'
  }

  overflow="wrap"

  spanFn ({ rowIndex, columnIndex, column }: any) {
    let prop = column.prop
    if (rowIndex === -1) { // represent header
      if (prop === 'code') {
        return {
          rowspan: 1,
          colspan: 2
        }
      } else if (prop === 'tel') {
        return {
          rowspan: 1,
          colspan: 0
        }
      }
    } else {
      if (prop === 'code') {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 1
          }
        }
      }
    }
  }
}
</script>
