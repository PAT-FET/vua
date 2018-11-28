<template>
<div>
   <div class="m-3">
     <v-alert closable show-icon type="success" :description="text"></v-alert>
   </div>

    <div class="m-3">
     <v-alert closable show-icon type="error" :description="text" title="Error Title"></v-alert>
   </div>

   <div class="m-3">
     <v-alert closable show-icon :description="text" title="Info Title">
       <a slot="close">关闭</a>
     </v-alert>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 可关闭与自定义关闭
 * @desc 可关闭与自定义关闭。
 */
@Component({
  components: {
  },
  })
export default class CloseExample extends Vue {
  text: string = "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
}
</script>
