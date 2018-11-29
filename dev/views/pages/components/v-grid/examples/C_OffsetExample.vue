<template>
<div>
   <div class="m-3">
      <v-row>
       <v-col :span="8"><div :class="[$style.cell]">col-8</div></v-col>
       <v-col :span="8" :offset="8"><div :class="[$style.cell, $style.light]">col-8 offset-8</div></v-col>
     </v-row>
   </div>

   <div class="m-3">
      <v-row>
       <v-col :span="6" :offset="6"><div :class="[$style.cell]">col-6 offset-6</div></v-col>
       <v-col :span="6" :offset="6"><div :class="[$style.cell, $style.light]">col-6 offset-6</div></v-col>
     </v-row>
   </div>

   <div class="m-3">
      <v-row>
       <v-col :span="12" :offset="6"><div :class="[$style.cell]">col-12 offset-6</div></v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   左右偏移
 * @desc 使用 offset 可以将列向右侧偏
 */
@Component({
  components: {
  },
  })
export default class OffsetExample extends Vue {
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
