<template>
<div>
  <div class="m-3">
    <v-radio-group v-model="placement">
      <v-radio-button label="top">Top</v-radio-button>
      <v-radio-button label="bottom">Bottom</v-radio-button>
      <v-radio-button label="left">left</v-radio-button>
      <v-radio-button label="right">Right</v-radio-button>
    </v-radio-group>
  </div>
  <div class="m-3">
     <v-drawer :visible.sync="visible" title="Basic Drawer" :placement="placement"></v-drawer>
     <v-button color="primary" @click="open">打开</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义位置
 * @desc 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭
 */
@Component({
  components: {
  },
  })
export default class PlacementExample extends Vue {
  visible: boolean = false

  placement: string = 'right'

  open () {
    this.visible = true
  }
}
</script>
