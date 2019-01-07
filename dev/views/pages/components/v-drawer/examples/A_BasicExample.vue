<template>
<div>
  <div class="m-3">
     <v-drawer :visible.sync="visible" title="Basic Drawer"></v-drawer>
     <v-button color="primary" @click="open">打开</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基础抽屉
 * @desc 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  visible: boolean = false

  open () {
    this.visible = true
  }
}
</script>
