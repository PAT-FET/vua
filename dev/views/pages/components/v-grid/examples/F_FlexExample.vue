<template>
<div>
   <div class="m-3">
     <p>水平对齐</p>
     <v-row justify="flex-start">
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
     </v-row>

     <v-row class="my-2" justify="center">
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
     </v-row>

     <v-row class="my-2" justify="flex-end">
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
     </v-row>

    <v-row class="my-2" justify="space-around">
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
     </v-row>

      <v-row class="my-2" justify="space-between">
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]"></div></v-col>
     </v-row>
   </div>

   <p>垂直对齐</p>
    <v-row class="my-2" align="flex-start">
       <v-col :span="4"><div :class="[$style.cell]" class="py-2"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-3"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]" class="py-4"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-5"></div></v-col>
     </v-row>

     <v-row class="my-2" align="center">
       <v-col :span="4"><div :class="[$style.cell]" class="py-2"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-3"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]" class="py-4"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-5"></div></v-col>
     </v-row>

      <v-row class="my-2" align="flex-end">
       <v-col :span="4"><div :class="[$style.cell]" class="py-2"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-3"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell]" class="py-4"></div></v-col>
       <v-col :span="4"><div :class="[$style.cell, $style.light]" class="py-5"></div></v-col>
     </v-row>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   flex 布局
 * @desc Grid使用了flex布局， Row组件提供了 justify 和 align 控制对齐方式， 值与 justify-content、align-items保持一致 。
 */
@Component({
  components: {
  },
  })
export default class FlexExample extends Vue {
}
</script>

<style lang="scss" module>
@import '../../../../../../src/style/var.scss';
  .cell {
    height: 36px;
    line-height: 36px;
    background-color: $primary-color;
    text-align: center;
    color: #fff;
  }

  .light {
    background-color: map-get($primary-colors, lighten-2)
  }
</style>
