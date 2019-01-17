<template>
<div>
  <div class="m-3">
    <v-breadcrumb>
      <v-breadcrumb-item to="/home">首页</v-breadcrumb-item>
      <v-breadcrumb-item to="/home/components">组件</v-breadcrumb-item>
      <v-breadcrumb-item>按钮</v-breadcrumb-item>
    </v-breadcrumb>
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
