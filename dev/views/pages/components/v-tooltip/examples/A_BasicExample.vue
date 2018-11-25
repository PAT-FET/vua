<template>
<div>
   <div class="my-3">
      <v-tooltip content="tooltip text">
         <span>Tooltip will show when mouse enter</span>
      </v-tooltip>

      <p class="mt-3">禁用</p>
      <v-tooltip disabled content="tooltip text">
         <span>Tooltip will disabled</span>
      </v-tooltip>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本使用
 * @desc 鼠标移入显示提示信息, tooltip中的文本需要有标签包裹
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
