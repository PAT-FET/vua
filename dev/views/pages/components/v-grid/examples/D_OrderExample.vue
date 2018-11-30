<template>
<div>
   <div class="m-3">
      <v-row>
       <v-col :span="6" :push="18"><div :class="[$style.cell]">col-6 push-18</div></v-col>
       <v-col :span="18" :pull="6"><div :class="[$style.cell, $style.light]">col-18 pull-6</div></v-col>
     </v-row>
   </div>

   <div class="m-3">
      <v-row>
       <v-col :span="6" :order="2"><div :class="[$style.cell]">col-6 order-2</div></v-col>
       <v-col :span="18" :order="1"><div :class="[$style.cell, $style.light]">col-18 order-1</div></v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   列排序
 * @desc 通过使用 push 和 pull 或 order 改变列（column）的顺序 (建议使用order)。
 */
@Component({
  components: {
  },
  })
export default class OrderExample extends Vue {
}
</script>

<style lang="scss" module>
@import '~@/style/var.scss';
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
