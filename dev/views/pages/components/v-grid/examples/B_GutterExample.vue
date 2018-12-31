<template>
<div>
   <div class="m-3">
      <v-row :gutter="16" class="my-2">
       <v-col :span="6"><div :class="[$style.cell]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell, $style.light]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell, $style.light]">col-6</div></v-col>
     </v-row>
   </div>

   <div class="m-3">
      <v-row :gutter="16" class="my-2">
       <v-col :span="12">
         <v-row :gutter="8">
          <v-col :span="8"><div :class="[$style.cell]" class="bg-success">col-8</div></v-col>
          <v-col :span="8"><div :class="[$style.cell, $style.light]" class="bg-success">col-8</div></v-col>
          <v-col :span="8"><div :class="[$style.cell]" class="bg-success">col-8</div></v-col>
        </v-row>
       </v-col>
       <v-col :span="8">
          <v-row :gutter="8">
            <v-col :span="12"><div :class="[$style.cell]" class="bg-warning">col-12</div></v-col>
            <v-col :span="12"><div :class="[$style.cell, $style.light]" class="bg-warning">col-12</div></v-col>
          </v-row>
       </v-col>
       <v-col :span="4"><div :class="[$style.cell]" class="bg-error">col-4</div></v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   区块间隔
 * @desc 栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性, 可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }
 */
@Component({
  components: {
  },
  })
export default class GutterExample extends Vue {
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
