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
  </v-radio-group>

  <v-radio-group class="mx-2" v-model="overflow">
    <v-radio-button label="wrap">换行</v-radio-button>
    <v-radio-button label="nowrap">不换行</v-radio-button>
    <v-radio-button label="ellipsis">省略</v-radio-button>
  </v-radio-group>

   <div class="m-3">
     <v-table pageable :size="size" :bordered="bordered" :data-source="dataSource">
       <v-table-column type="index" label="#"></v-table-column>
       <v-table-column prop="name" label="姓名" sortable></v-table-column>
       <v-table-column prop="age" label="年龄" sortable :filters="filters"></v-table-column>
       <v-table-column prop="address" :overflow="overflow" label="地址"></v-table-column>
       <v-table-column prop="remark" :overflow="overflow" label="备注" width="120px"></v-table-column>
       <v-table-column column-key="opt" label="操作">
         <template slot-scope="{}">
           <v-button type="flat" color="warning">编辑</v-button> | <v-button type="flat" color="error">删除</v-button>
         </template>
       </v-table-column>
     </v-table>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  筛选和排序
 * @desc 对表格特定字段进行排序与过滤
 */
@Component({
  components: {
  },
  })
export default class SortFilterExample extends Vue {
  dataSource = [ { key: 1,
    name: '沈强',
    age: 58,
    address: '青海省 西宁市 城东区',
    remark: '行带与状情解快各自线现日决使门。' },
  { key: 2,
    name: '顾秀英',
    age: 86,
    address: '甘肃省 武威市 民勤县',
    remark: '南名铁人那周积北收联积才青示团流。' },
  { key: 3,
    name: '黎杰',
    age: 55,
    address: '湖北省 襄阳市 保康县',
    remark: '格极议论国复强世要类党有准技几小建号划到。' },
  { key: 4,
    name: '李平',
    age: 53,
    address: '海南省 海口市 美兰区',
    remark: '意号史物心如后加今七任南。' },
  { key: 5,
    name: '秦勇',
    age: 84,
    address: '安徽省 安庆市 潜山县',
    remark: '较国么省一需标带指确型意清。' },
  { key: 6,
    name: '曹磊',
    age: 91,
    address: '河南省 南阳市 社旗县',
    remark: '龙按标装经先难中马话层。' },
  { key: 7,
    name: '武强',
    age: 25,
    address: '台湾 苗栗县 通霄镇',
    remark: '可角党向性入全达时必包通机划支率型。' },
  { key: 8,
    name: '姚娜',
    age: 22,
    address: '新疆维吾尔自治区 吐鲁番地区 其它区',
    remark: '亲级构本据代界条革与说极会实元。' },
  { key: 9,
    name: '段军',
    age: 67,
    address: '香港特别行政区 九龙 黄大仙区',
    remark: '有况只没局风时设业断济何后话第强律很先。' },
  { key: 10,
    name: '石平',
    age: 92,
    address: '福建省 宁德市 屏南县',
    remark: '论要非回代图东管更边统达现状主马周。' },
  { key: 11,
    name: '史娟',
    age: 82,
    address: '辽宁省 葫芦岛市 建昌县',
    remark: '设金当农相大下图西亲身。' },
  { key: 12,
    name: '吴桂英',
    age: 94,
    address: '湖北省 随州市 随县',
    remark: '原进况住历过上做须万何。' },
  { key: 13,
    name: '谭伟',
    age: 91,
    address: '海外 海外 -',
    remark: '意层机再必见把办京江个相满采。' },
  { key: 14,
    name: '邱娟',
    age: 42,
    address: '湖南省 娄底市 其它区',
    remark: '用构严说圆布位门照联成织全。' } ]

  size: string = 'lg'

  border: string = '0'

  get bordered () {
    return this.border !== '0'
  }

  overflow="wrap"

  filters = [
    {
      text: '22',
      value: 22
    },
    {
      text: '25',
      value: 25
    },
    {
      text: '42',
      value: 42
    },
     {
      text: '58',
      value: 58
    }
  ]
}
</script>
