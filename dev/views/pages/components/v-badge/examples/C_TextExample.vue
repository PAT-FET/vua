<template>
<div>
   <div class="m-3">
     <v-badge value="new">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>

     <v-badge value="hot" class="ml-5">
       <v-button>评论</v-button>
     </v-badge>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义内容
 * @desc 可以显示数字以外的文本内容。
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {

}
</script>
