<template>
<div>
  <v-radio-group v-model="size">
    <v-radio-button label="lg">大</v-radio-button>
    <v-radio-button label="md">中</v-radio-button>
    <v-radio-button label="sm">小</v-radio-button>
  </v-radio-group>
   <div class="m-3">
     <v-table pageable :pagination="pagination" :size="size" :data-source="dataSource" @page-size-change="onPageSizeChange">
       <v-table-column type="index" label="#"></v-table-column>
       <v-table-column prop="name" label="姓名"></v-table-column>
       <v-table-column prop="age" label="年龄"></v-table-column>
       <v-table-column prop="address" label="地址"></v-table-column>
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
 * @title   分页
 * @desc 数据量过多时，分页进行显示。
 */
@Component({
  components: {
  },
  })
export default class PaginationExample extends Vue {
  dataSource = [ { key: 1, name: '孟霞', age: 37, address: '西藏自治区 那曲地区 索县' },
  { key: 2, name: '郝军', age: 75, address: '香港特别行政区 香港岛 中西区' },
  { key: 3, name: '任伟', age: 21, address: '江西省 景德镇市 乐平市' },
  { key: 4, name: '孔霞', age: 39, address: '湖南省 永州市 江永县' },
  { key: 5, name: '陈刚', age: 78, address: '青海省 海东市 化隆回族自治县' },
  { key: 6, name: '姜平', age: 54, address: '香港特别行政区 香港岛 东区' },
  { key: 7, name: '梁平', age: 61, address: '澳门特别行政区 离岛 -' },
  { key: 8, name: '傅勇', age: 78, address: '四川省 德阳市 绵竹市' },
  { key: 9, name: '朱芳', age: 46, address: '香港特别行政区 新界 大埔区' },
  { key: 10, name: '萧芳', age: 91, address: '浙江省 衢州市 开化县' },
  { key: 11, name: '方杰', age: 100, address: '宁夏回族自治区 固原市 泾源县' },
  { key: 12, name: '易超', age: 59, address: '澳门特别行政区 澳门半岛 -' },
  { key: 13, name: '唐超', age: 99, address: '吉林省 通化市 通化县' },
  { key: 14, name: '万敏', age: 79, address: '重庆 重庆市 渝中区' },
  { key: 15, name: '谢勇', age: 28, address: '北京 北京市 怀柔区' },
  { key: 16, name: '汪娟', age: 58, address: '四川省 乐山市 沐川县' },
  { key: 17, name: '赖平', age: 26, address: '新疆维吾尔自治区 克拉玛依市 克拉玛依区' },
  { key: 18, name: '侯强', age: 75, address: '海南省 三亚市 -' },
  { key: 19, name: '段涛', age: 35, address: '河北省 石家庄市 栾城县' },
  { key: 20, name: '苏静', age: 88, address: '陕西省 安康市 其它区' },
  { key: 21, name: '康刚', age: 100, address: '香港特别行政区 香港岛 东区' },
  { key: 22, name: '王静', age: 39, address: '浙江省 嘉兴市 桐乡市' },
  { key: 23, name: '贾芳', age: 69, address: '贵州省 安顺市 普定县' },
  { key: 24, name: '武刚', age: 74, address: '重庆 重庆市 九龙坡区' },
  { key: 25, name: '孙涛', age: 51, address: '澳门特别行政区 澳门半岛 -' },
  { key: 26, name: '田超', age: 91, address: '湖南省 常德市 鼎城区' },
  { key: 27, name: '杨杰', age: 51, address: '安徽省 巢湖市 无为县' },
  { key: 28, name: '余涛', age: 35, address: '江西省 吉安市 井冈山市' },
  { key: 29, name: '方勇', age: 70, address: '北京 北京市 昌平区' },
  { key: 30, name: '丁丽', age: 52, address: '陕西省 渭南市 澄城县' } ]

  size: string = 'lg'

  pagination = {
    pageSize: 5
  }

  onPageSizeChange (pageSize: number) {
    console.log('pageSize change to : ' + pageSize)
    this.pagination.pageSize = pageSize
  }
}
</script>
