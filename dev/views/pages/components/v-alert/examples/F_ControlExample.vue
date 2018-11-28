<template>
<div>
   <div class="m-3">
     <v-alert closable show-icon type="success" :description="text" v-model="visible"></v-alert>

     <p><label><input type="checkbox" v-model="visible"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 可控的关闭
 * @desc 使用v-model控制警告提示的显示/隐藏。
 */
@Component({
  components: {
  },
  })
export default class ControlExample extends Vue {
  text: string = "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  visible: boolean = true
}
</script>
