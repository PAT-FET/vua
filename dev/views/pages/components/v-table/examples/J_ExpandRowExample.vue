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

   <div class="m-3">
     <v-table :size="size" :bordered="bordered" :data-source="dataSource">
       <v-table-column type="expand" label="-">
         <template slot-scope="{row}">详细地址: {{row.address}}</template>
       </v-table-column>
       <v-table-column type="index" label="#"></v-table-column>
       <v-table-column prop="name" label="姓名"></v-table-column>
       <v-table-column prop="age" label="年龄"></v-table-column>
       <v-table-column prop="address" label="地址">
         <template slot-scope="{row}">{{row.address}}</template>
       </v-table-column>
       <v-table-column column-key="opt" label="操作">
         <template slot-scope="{}">
           <v-button type="flat" color="warning">编辑</v-button> | <v-button type="flat" color="error">删除</v-button>
         </template>
       </v-table-column>
     </v-table>
   </div>

   <div class="mt-5">
     <p>内嵌表格</p>
     <div class="m-3">
      <v-table :size="size" :bordered="bordered" :data-source="dataSource">
        <v-table-column type="expand" label="-">
          <template slot-scope="{}">
            <v-table :size="size" :bordered="bordered" :data-source="dataSource">
              <v-table-column type="index" label="#"></v-table-column>
              <v-table-column prop="name" label="姓名"></v-table-column>
              <v-table-column prop="age" label="年龄"></v-table-column>
              <v-table-column prop="address" label="地址">
                <template slot-scope="{row}">{{row.address}}</template>
              </v-table-column>
            </v-table>
          </template>
        </v-table-column>
        <v-table-column type="index" label="#"></v-table-column>
        <v-table-column prop="name" label="姓名"></v-table-column>
        <v-table-column prop="age" label="年龄"></v-table-column>
        <v-table-column prop="address" label="地址">
          <template slot-scope="{row}">{{row.address}}</template>
        </v-table-column>
        <v-table-column column-key="opt" label="操作">
          <template slot-scope="{}">
            <v-button type="flat" color="warning">编辑</v-button> | <v-button type="flat" color="error">删除</v-button>
          </template>
        </v-table-column>
      </v-table>
    </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  可展开
 * @desc 当表格内容较多不能一次性完全展示时。
 */
@Component({
  components: {
  },
  })
export default class ExpandRowExample extends Vue {
  dataSource = [ { key: 1, name: '易平', age: 85, address: '陕西省 咸阳市 彬县' },
  { key: 2, name: '方洋', age: 42, address: '山西省 朔州市 怀仁县' },
  { key: 3, name: '钱勇', age: 92, address: '上海 上海市 杨浦区' },
  { key: 4, name: '钱超', age: 97, address: '河北省 唐山市 丰润区' },
  { key: 5, name: '谭娟', age: 95, address: '江西省 萍乡市 莲花县' },
  { key: 6, name: '魏霞', age: 86, address: '澳门特别行政区 澳门半岛' },
  { key: 7, name: '郝艳', age: 29, address: '四川省 遂宁市 其它区' },
  { key: 8, name: '万军', age: 55, address: '贵州省 毕节市 金沙县' },
  { key: 9, name: '江洋', age: 31, address: '内蒙古自治区 锡林郭勒盟 正镶白旗' },
  { key: 10, name: '余涛', age: 92, address: '重庆 重庆市 巴南区' },
  { key: 11, name: '陈洋', age: 42, address: '河北省 秦皇岛市 昌黎县' } ]

  size: string = 'lg'

  border: string = '0'

  get bordered () {
    return this.border !== '0'
  }
}
</script>
