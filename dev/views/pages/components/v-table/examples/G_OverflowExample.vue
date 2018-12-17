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
     <v-table :size="size" :bordered="bordered" :data-source="dataSource">
       <v-table-column type="index" label="#"></v-table-column>
       <v-table-column prop="name" label="姓名"></v-table-column>
       <v-table-column prop="age" label="年龄"></v-table-column>
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
 * @title   溢出行为
 * @desc 内容溢出时换行、不换行或省略
 */
@Component({
  components: {
  },
  })
export default class OverflowExample extends Vue {
  dataSource = [ { key: 1,
    name: '邹芳',
    age: 76,
    address: '湖南省 娄底市 新化县',
    remark: '难员须级风才林段口把去明经。' },
  { key: 2,
    name: '韩娟',
    age: 23,
    address: '海南省 三沙市 南沙群岛',
    remark: '出资阶育此状一关数史知难基军复开就。' },
  { key: 3,
    name: '冯秀兰',
    age: 70,
    address: '吉林省 松原市 乾安县',
    remark: '连等教点东里无己同程但热。' },
  { key: 4,
    name: '郭霞',
    age: 58,
    address: '江苏省 常州市 金坛市',
    remark: '群热性克积十风中器且们。' },
  { key: 5,
    name: '蔡敏',
    age: 77,
    address: '广西壮族自治区 梧州市 龙圩区',
    remark: '个光地子几原很它说家示但东适标它动快四。' } ]

  size: string = 'lg'

  border: string = '0'

  get bordered () {
    return this.border !== '0'
  }

  overflow="wrap"
}
</script>
