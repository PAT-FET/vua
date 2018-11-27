<template>
<div>
   <div class="m-3 d-inline-block">
     <div class="bg-error m-2" :class="[$style.box]">
       <v-spin v-model="spin1" tip="loading..."></v-spin>
     </div>
     <p><label> <input type="checkbox" v-model="spin1"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义描述文案
 * @desc 自定义描述文案。
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {
  spin1: boolean = true
}
</script>

<style lang="scss" module>
  .box{
    height: 120px;
    width: 160px;
  }
</style>
