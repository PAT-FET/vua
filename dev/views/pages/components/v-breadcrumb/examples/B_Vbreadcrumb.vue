<template>
<div>
<v-breadcrumb separator="\" separator-class="heart">
  <v-breadcrumb-item :to="{ path: '/' }">首页</v-breadcrumb-item>
  <v-breadcrumb-item><a href="/">活动管理</a></v-breadcrumb-item>
  <v-breadcrumb-item>
    活动列表
    </v-breadcrumb-item>
  <v-breadcrumb-item>活动详情</v-breadcrumb-item>
</v-breadcrumb>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   加入图标元素
 * @desc 通过定义separator-class 引入图标分隔符
*/
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
