<template>
<div>
   <div class="m-3 d-inline-block">
     <div class="bg-warning m-2" :class="[$style.box]">
       <v-spin v-model="spin1">
         <i slot="icon" class="anticon anticon-loading-3-quarters"></i>
       </v-spin>
     </div>
     <p><label> <input type="checkbox" v-model="spin1"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义图案
 * @desc 使用自定义图案。
 */
@Component({
  components: {
  },
  })
export default class IconExample extends Vue {
  spin1: boolean = true
}
</script>

<style lang="scss" module>
  .box{
    height: 120px;
    width: 160px;
  }
</style>
