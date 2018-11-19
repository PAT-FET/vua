<template>
<div>
   <div class="my-3">
      <v-menu mode="horizontal" default-active="Alliance">
         <v-sub-menu>
            <div slot="title">通讯设备</div>
            <i slot="icon" class="anticon anticon-apple"></i>
            <v-menu-item disabled>电话</v-menu-item>
            <v-menu-group>
               <span slot="title">笔记本</span>
               <v-menu-item>Mac Book</v-menu-item>
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
         <v-menu-item index="Alliance">
            <i slot="icon" class="anticon anticon-chrome"></i>
            Alliance 笔记本
         </v-menu-item>
      </v-menu>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  水平布局菜单
 * @desc 水平排列， 用于顶部导航
 */
@Component({
  components: {
  },
  })
export default class HorizontalExample extends Vue {
   collapse: boolean = false
}
</script>
