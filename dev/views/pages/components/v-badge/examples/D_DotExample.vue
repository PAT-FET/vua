<template>
<div>
   <div class="m-3">
     <v-badge dot>
       数据查询
     </v-badge>

     <v-badge dot class="ml-5">
       <v-button>评论</v-button>
     </v-badge>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 小红点
 * @desc 以红点的形式标注需要关注的内容。
 */
@Component({
  components: {
  },
  })
export default class DotExample extends Vue {

}
</script>
