<template>
<div>
  <div class="m-3">
    <v-breadcrumb>
      <v-breadcrumb-item to="/home">首页</v-breadcrumb-item>
      <v-breadcrumb-item to="/home/components">组件</v-breadcrumb-item>
      <v-breadcrumb-item>按钮</v-breadcrumb-item>
      <span slot="separator"><v-icon type="right"></v-icon></span>
    </v-breadcrumb>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义分隔符
 * @desc 自定义分隔符。
 */
@Component({
  components: {
  },
  })
export default class SeparatorExample extends Vue {
}
</script>
