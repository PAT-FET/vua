C<template>
<div>
   <div class="my-3">
       <v-popover>
         <v-button color="primary" slot="reference">hover me</v-button>
         <div>
            <p>content</p>
            <p>content</p>
         </div>
      </v-popover>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  嵌套内容
 * @desc 不指定标题， 内容完全自定义
 */
@Component({
  components: {
  },
  })
export default class NestExample extends Vue {
}
</script>
