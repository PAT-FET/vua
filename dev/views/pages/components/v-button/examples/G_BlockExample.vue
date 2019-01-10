<template>
<div>
<div class="my-3">
  <div class="w-16">
      <v-button type="primary" block>主要</v-button>
      <v-button block class="my-2">默认</v-button>
      <v-button type="dashed" block class="my-2"> + 新建 </v-button>
  </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  块级按钮
 * @desc 宽度适应父级宽度。
 */
@Component({
  components: {
  },
  })
export default class BlockExample extends Vue {

}
</script>
