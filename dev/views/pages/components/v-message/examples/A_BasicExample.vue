<template>
<div>
   <div class="my-3">
    <v-button @click="info">Display normal Message</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本使用
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  info () {
    this.$message.info('this is a normal message')
  }
}
</script>
