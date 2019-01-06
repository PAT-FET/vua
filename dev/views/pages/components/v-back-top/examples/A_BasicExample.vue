<template>
<div>
   <div class="m-3" style="height: 4rem; overflow: scroll;">
    <v-back-top :offset="20"></v-back-top>
    <h4>滚动 20px 将出现 back-top</h4>
    <p>content </p>
    <p>content </p>
    <p>content </p>
    <p>content </p>
    <p>content </p>
    <p>content </p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
