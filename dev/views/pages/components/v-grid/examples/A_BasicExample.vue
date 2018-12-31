<template>
<div>
   <div class="m-3">
     <v-row class="my-2">
       <v-col :span="12"><div :class="[$style.cell]">col-12</div></v-col>
       <v-col :span="12"><div :class="[$style.cell, $style.light]">col-12</div></v-col>
     </v-row>

     <v-row class="my-2">
       <v-col :span="8"><div :class="[$style.cell]">col-8</div></v-col>
       <v-col :span="8"><div :class="[$style.cell, $style.light]">col-8</div></v-col>
       <v-col :span="8"><div :class="[$style.cell]">col-8</div></v-col>
     </v-row>

      <v-row class="my-2">
       <v-col :span="6"><div :class="[$style.cell]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell, $style.light]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell]">col-6</div></v-col>
       <v-col :span="6"><div :class="[$style.cell, $style.light]">col-6</div></v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基础栅格
 * @desc 使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
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
