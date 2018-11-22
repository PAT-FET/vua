<template>
<div>
   <div class="my-3">
      <v-button @click="collapse = !collapse">Toggle</v-button>

      <v-menu mode="inline" :collapse="collapse" unique-opened default-active="Mac Book" style="width: 256px;">
         <v-sub-menu>
            <div slot="title">通讯设备</div>
            <i slot="icon" class="anticon anticon-apple"></i>
            <v-menu-item disabled>电话</v-menu-item>
            <v-menu-group>
               <span slot="title">笔记本</span>
               <v-menu-item index="Mac Book">Mac Book</v-menu-item>
               <v-sub-menu>
                  <div slot="title">Mac Pro</div>
                  <v-menu-item>2016版</v-menu-item>
                  <v-menu-item>2018版</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
            <v-menu-group>
               <span slot="title">手机</span>
               <v-menu-item>iphone 6</v-menu-item>
               <v-sub-menu disabled>
                  <div slot="title">2018</div>
                  <v-menu-item>iphone x</v-menu-item>
                  <v-menu-item disabled>iphone 8</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
         </v-sub-menu>
         <v-menu-item disabled>
            <i slot="icon" class="anticon anticon-ie"></i>
            Dell 台式机
         </v-menu-item>
         <v-sub-menu>
            <div slot="title">物理学</div>
            <i slot="icon" class="anticon anticon-chrome"></i>
            <v-menu-item disabled>量子力学</v-menu-item>
            <v-menu-group>
               <span slot="title">经典力学</span>
               <v-menu-item index="Newton">牛顿定律</v-menu-item>
               <v-sub-menu>
                  <div slot="title">刚体运动</div>
                  <v-menu-item>力矩</v-menu-item>
                  <v-menu-item>平行轴定理</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
            <v-menu-group>
               <span slot="title">电磁学</span>
               <v-menu-item>静电力</v-menu-item>
               <v-sub-menu disabled>
                  <div slot="title">电与磁</div>
                  <v-menu-item>安培环路定理</v-menu-item>
                  <v-menu-item disabled>麦克斯韦方程组</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
         </v-sub-menu>
      </v-menu>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  内联布局菜单
 * @desc 垂直排列，子菜单内联展开， 用于侧边导航
 */
@Component({
  components: {
  },
  })
export default class InlineExample extends Vue {
   collapse: boolean = false
}
</script>
