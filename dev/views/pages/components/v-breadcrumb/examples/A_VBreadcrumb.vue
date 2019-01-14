<template>
<div>
<v-breadcrumb separator="\">
  <v-breadcrumb-item :to="{ path: '/components/v-button/VButton' }">首页</v-breadcrumb-item>
  <v-breadcrumb-item><a href="/">活动管理</a></v-breadcrumb-item>
  <v-breadcrumb-item>活动列表</v-breadcrumb-item>
  <v-breadcrumb-item>活动详情</v-breadcrumb-item>
</v-breadcrumb>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 通过修改separator属性值，去自定义分隔符。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
