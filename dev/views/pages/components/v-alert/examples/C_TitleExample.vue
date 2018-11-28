<template>
<div>
   <div class="m-3">
     <v-alert type="success" :description="text" title="Success Title"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="info" :description="text" title="Info Title"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="warning" :description="text" title="Warning Title"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="error" :description="text" title="Error Title"></v-alert>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   标题
 * @desc 含有标题文字介绍的警告提示。
 */
@Component({
  components: {
  },
  })
export default class TitleExample extends Vue {
  text: string = "这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
}
</script>
