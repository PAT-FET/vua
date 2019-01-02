<template>
<div>
   <div class="m-3">
     <v-badge :value="100" :max="99" class="ml-5">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>

     <v-badge :value="120" :max="99"  class="ml-5">
       <v-button>评论</v-button>
     </v-badge>

      <v-badge :value="120" :max="99"  class="ml-5">
       <v-button color="primary" type="outline">回复</v-button>
     </v-badge>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 最大值
 * @desc 可自定义最大值。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
