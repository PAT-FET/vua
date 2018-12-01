<template>
<div>
   <div class="m-4">
     <v-layout v-if="!top">
       <v-sider>
         <v-menu mode="inline" :collapse="collapse" unique-opened default-active="Mac Book" style="width: 256px;">
          <v-sub-menu>
              <div slot="title">通讯设备</div>
              <i slot="icon" class="anticon anticon-apple"></i>
              <v-menu-item index="phone" disabled>电话</v-menu-item>
              <v-menu-group>
                <span slot="title">笔记本</span>
                <v-menu-item index="Mac Book">Mac Book</v-menu-item>
                <v-sub-menu>
                    <div slot="title">Mac Pro</div>
                    <v-menu-item index="laptop 2016">2016版</v-menu-item>
                    <v-menu-item index="laptop 2018">2018版</v-menu-item>
                </v-sub-menu>
              </v-menu-group>
              <v-menu-group>
                <span slot="title">手机</span>
                <v-menu-item index="iphone 6">iphone 6</v-menu-item>
                <v-sub-menu disabled>
                    <div slot="title">2018</div>
                    <v-menu-item index="iphone x">iphone x</v-menu-item>
                    <v-menu-item index="iphone 8" disabled>iphone 8</v-menu-item>
                </v-sub-menu>
              </v-menu-group>
          </v-sub-menu>
          <v-menu-item index="Alliance">
            <i slot="icon" class="anticon anticon-chrome"></i>
            Alliance 笔记本
         </v-menu-item>
        </v-menu>
       </v-sider>
       <v-layout>
          <v-header class="bg-secondary">
             <v-button color="primary" :icon="icon" @click="collapse = !collapse"></v-button>
          </v-header>
          <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
          <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
       </v-layout>
     </v-layout>

     <v-layout v-else>
        <v-header>
            <v-menu mode="horizontal" :collapse="collapse" unique-opened default-active="Mac Book">
              <v-sub-menu>
                <div slot="title">通讯设备</div>
                <i slot="icon" class="anticon anticon-apple"></i>
                <v-menu-item index="phone" disabled>电话</v-menu-item>
                <v-menu-group>
                  <span slot="title">笔记本</span>
                  <v-menu-item index="Mac Book">Mac Book</v-menu-item>
                  <v-sub-menu>
                      <div slot="title">Mac Pro</div>
                      <v-menu-item index="laptop 2016">2016版</v-menu-item>
                      <v-menu-item index="laptop 2018">2018版</v-menu-item>
                  </v-sub-menu>
                </v-menu-group>
                <v-menu-group>
                  <span slot="title">手机</span>
                  <v-menu-item index="iphone 6">iphone 6</v-menu-item>
                  <v-sub-menu disabled>
                      <div slot="title">2018</div>
                      <v-menu-item index="iphone x">iphone x</v-menu-item>
                      <v-menu-item index="iphone 8" disabled>iphone 8</v-menu-item>
                  </v-sub-menu>
                </v-menu-group>
            </v-sub-menu>
            <v-menu-item index="Alliance">
                <i slot="icon" class="anticon anticon-chrome"></i>
                Alliance 笔记本
            </v-menu-item>
          </v-menu>
        </v-header>
        <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
        <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
     </v-layout>

     <div class="m-3">
       <label><input type="checkbox" v-model="top"> 顶部导航</label>
     </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   折叠
 * @desc 折叠示例, 将来可能需要在sider组件上指定 width、 collapseWidth 以及 collapse。
 */
@Component({
  components: {
  },
  })
export default class CollapseExample extends Vue {
  collapse: boolean = false

  top: boolean = false

  get icon () {
    return this.collapse ? 'menu-unfold' : 'menu-fold'
  }
}
</script>
