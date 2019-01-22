<template>
<div>
<div class="my-3">
   <div class='flex'>
      <v-button type="primary">默认/悬停/点击</v-button>
      <v-button type="primary" disabled class='ml-3'>禁用</v-button>
      <v-button type="primary" class='ml-3' loading>加载</v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 按钮状态
 * @desc 按钮状态包括默认状态、悬停状态、点击状态、禁用状态、加载状态
 */
@Component({
  components: {
  }
})
export default class StatusExample extends Vue {

}
</script>
