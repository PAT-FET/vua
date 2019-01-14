<template>
<div>
  <v-radio-group v-model="size" class="mx-2">
    <v-radio-button label="lg">大</v-radio-button>
    <v-radio-button label="md">中</v-radio-button>
    <v-radio-button label="sm">小</v-radio-button>
  </v-radio-group>

  <v-radio-group v-model="border" class="mx-2">
    <v-radio-button label="0">无边框</v-radio-button>
    <v-radio-button label="1">有边框</v-radio-button>
  </v-radio-group>
   <div class="m-3">
     <v-table :bordered="bordered" :size="size" :data-source="dataSource">
       <v-table-column type="index" label="#"></v-table-column>
       <v-table-column label="配送信息">
          <v-table-column prop="name" label="姓名"></v-table-column>
          <v-table-column prop="age" label="年龄"></v-table-column>
          <v-table-column label="地址">
            <v-table-column prop="province" label="省"></v-table-column>
            <v-table-column prop="city" label="市"></v-table-column>
            <v-table-column prop="county" label="县"></v-table-column>
          </v-table-column>
       </v-table-column>
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
 * @title   多级表头
 * @desc 数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。
 */
@Component({
  components: {
  },
  })
export default class MultiHeaderExample extends Vue {
  dataSource = [ { key: 1,
    name: '崔明',
    age: 69,
    province: '澳门特别行政区',
    city: '无锡市',
    county: '红桥区' },
  { key: 2,
    name: '熊涛',
    age: 95,
    province: '浙江省',
    city: '离岛',
    county: '新邵县' },
  { key: 3,
    name: '戴静',
    age: 77,
    province: '广西壮族自治区',
    city: '北京市',
    county: '-' },
  { key: 4,
    name: '邱艳',
    age: 52,
    province: '甘肃省',
    city: '宝鸡市',
    county: '同仁县' },
  { key: 5,
    name: '黎洋',
    age: 26,
    province: '香港特别行政区',
    city: '赣州市',
    county: '柳北区' },
  { key: 6,
    name: '锺秀兰',
    age: 68,
    province: '重庆',
    city: '海外',
    county: '明山区' },
  { key: 7,
    name: '汤敏',
    age: 22,
    province: '新疆维吾尔自治区',
    city: '郴州市',
    county: '彭阳县' },
  { key: 8,
    name: '毛娟',
    age: 45,
    province: '重庆',
    city: '海外',
    county: '大渡口区' },
  { key: 9,
    name: '姚军',
    age: 36,
    province: '河北省',
    city: '林芝地区',
    county: '泾源县' },
  { key: 10,
    name: '马平',
    age: 32,
    province: '黑龙江省',
    city: '安阳市',
    county: '黔江区' },
  { key: 11,
    name: '侯敏',
    age: 57,
    province: '云南省',
    city: '新北市',
    county: '京山县' } ]

  size: string = 'lg'

  border: string = '0'

  get bordered () {
    return this.border !== '0'
  }
}
</script>
