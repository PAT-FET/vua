<template>
<div>
<div class="my-3">
   <div class='flex'>
      <v-button type="primary" class="ml-3 mb-2">确定</v-button>
      <v-button class="ml-3 mb-2">取消</v-button>
      <v-button color="primary" class="ml-3 mb-2">触及</v-button>
      <v-button type="dashed" class="ml-3 mb-2">虚线</v-button>
      <v-button type="primary" disabled class="ml-3 mb-2">禁用</v-button>
      <v-button type="primary" color="success" class="ml-3 mb-2">成功</v-button>
      <v-button type="primary" color="warning" class="ml-3 mb-2">警告</v-button>
      <v-button type="primary" color="error" class="ml-3 mb-2">错误</v-button>
   </div>
</div>

<div class="my-3">
   <div class='flex'>
      <v-button type="primary" shape="round" class="ml-3 mb-2">确定</v-button>
      <v-button shape="round" class="ml-3 mb-2">取消</v-button>
      <v-button shape="round" color="primary" class="ml-3 mb-2">触及</v-button>
      <v-button shape="round" type="dashed" class="ml-3 mb-2">虚线</v-button>
      <v-button shape="round" type="primary" disabled class="ml-3 mb-2">禁用</v-button>
      <v-button shape="round" type="primary" color="success" class="ml-3 mb-2">成功</v-button>
      <v-button shape="round" type="primary" color="warning" class="ml-3 mb-2">警告</v-button>
      <v-button shape="round" type="primary" color="error" class="ml-3 mb-2">错误</v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本按钮
 * @desc 按钮的样式包括宽高、圆角以及按钮字数，一般限制6个以内尽可能短（减少用户读取按钮功能成本）， 主按钮在同一个操作区最多出现一次。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
