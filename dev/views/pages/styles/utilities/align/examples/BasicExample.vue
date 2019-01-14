<template>
<div>
   <span class="ml-2 align-baseline">baseline</span>
  <span class="ml-2 align-top">top</span>
  <span class="ml-2 align-middle">middle</span>
  <span class="ml-2 align-bottom">bottom</span>
  <span class="ml-2 align-text-top">text-top</span>
  <span class="ml-2 align-text-bottom">text-bottom</span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>

<style lang="scss" module>
</style>
