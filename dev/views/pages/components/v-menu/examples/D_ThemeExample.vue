<template>
<div>
   <div class="my-3">
      <div class="my-3">
         <v-switch v-model="collapse" inactive-text="收起" active-text="展开"></v-switch>

          <v-radio-group class="ml-3" v-model="mode">
            <v-radio-button label="inline">inline</v-radio-button>
            <v-radio-button label="horizontal">horizontal</v-radio-button>
            <v-radio-button label="vertical">vertical</v-radio-button>
         </v-radio-group>

         <v-radio-group class="ml-3" v-model="trigger">
            <v-radio-button label="hover">hover</v-radio-button>
            <v-radio-button label="click">click</v-radio-button>
         </v-radio-group>
      </div>

      <v-menu :mode="mode"
         :collapse="collapse"
         unique-opened
         :css-variable="cssVariable"
         :trigger="trigger"
         default-active="Mac Book"
         :style="[widthStyle]">
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
         <v-menu-item index="dell" disabled>
            <i slot="icon" class="anticon anticon-ie"></i>
            Dell 台式机
         </v-menu-item>
         <v-sub-menu>
            <div slot="title">物理学</div>
            <i slot="icon" class="anticon anticon-chrome"></i>
            <v-menu-item index="quantum" disabled>量子力学</v-menu-item>
            <v-menu-group>
               <span slot="title">经典力学</span>
               <v-menu-item index="Newton">牛顿定律</v-menu-item>
               <v-sub-menu>
                  <div slot="title">刚体运动</div>
                  <v-menu-item index="torque">力矩</v-menu-item>
                  <v-menu-item index="parallel axis theorem">平行轴定理</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
            <v-menu-group>
               <span slot="title">电磁学</span>
               <v-menu-item index="static electricity">静电力</v-menu-item>
               <v-sub-menu disabled>
                  <div slot="title">电与磁</div>
                  <v-menu-item index="amp">安培环路定理</v-menu-item>
                  <v-menu-item index="max" disabled>麦克斯韦方程组</v-menu-item>
               </v-sub-menu>
            </v-menu-group>
         </v-sub-menu>
      </v-menu>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { MenuCssVariable } from '@/index'

/**
 * @title  自定义主题
 * @desc 自定义主题。
 */
@Component({
  components: {
  },
  })
export default class ThemeExample extends Vue {
   collapse: boolean = false

   mode: string = 'inline'

   trigger: string = 'hover'

   cssVariable: MenuCssVariable = {
      menuBgColor: 'info',
      menuBorderColor: 'purple',
      menuItemTextColor: 'grey-lighten-2',
      menuItemDisabledTextColor: 'grey',
      menuItemHoverTextColor: 'grey-lighten-3',
      menuItemActiveTextColor: 'grey-lighten-5',
      menuItemActiveBgColor: 'warning',
      menuItemActiveBorderColor: 'warning-darken-1',
      menuGroupTextColor: 'orange'
   }

   get widthStyle () {
     if (this.mode === 'horizontal') return {}
     return {
       width: '256px'
     }
   }
}
</script>
