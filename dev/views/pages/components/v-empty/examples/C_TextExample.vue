<template>
<div>
   <div class="m-3">
     <v-empty>
      <img slot="image" src="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" alt="">
      <span>自定义 <a>描述</a></span>
    </v-empty>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   自定义内容
 * @desc 可使用默认卡槽自定义描述
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {
}
</script>
