<template>
<div>
   <div class="m-3">
     <v-empty><img slot="image" src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" alt=""></v-empty>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   选择图片
 * @desc 可使用`image`自定义图片
 */
@Component({
  components: {
  },
  })
export default class ImageExample extends Vue {
}
</script>
