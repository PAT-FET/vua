<template>
<div>
    <p class="text-error">resize me</p>
    <div v-resize="onResize" class="border d-inline-block text-center p-2" style="overflow: hidden; resize: horizontal;">
        <p>line 1</p>
        <p>line 2</p>
    </div>

   <div class="my-3">
    <p class="text-info">I'll resized according above</p>
    <div class="border d-inline-block text-center p-2" :style="widthStyle">
        <p>line 1</p>
        <p>line 2</p>
    </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @title 基本示例
 * @desc 用于监听普通元素的尺寸变化事件
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
    width: string = ''

    onResize (e: HTMLElement) {
      this.width = e.offsetWidth + 'px'
    }

    get widthStyle () {
      if (!this.width) return {}
      return { width: this.width }
    }
}
</script>
