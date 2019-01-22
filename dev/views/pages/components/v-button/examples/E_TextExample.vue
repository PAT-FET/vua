<template>
<div>
<div class="my-3">
   <div class="flex p-2 bg-2 rounded">
      <v-button type="text" color="primary">主要按钮</v-button>
      <v-button type="text" class="ml-3">常规按钮</v-button>
      <v-button type="text" disabled class="ml-3">置灰按钮</v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  文字按钮
 * @desc 无背景色与边框， 无点击特效。
 */
@Component({
  components: {
  }
})
export default class TextExample extends Vue {

}
</script>
