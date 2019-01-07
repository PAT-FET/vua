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
     <v-drawer :visible.sync="visible" :placement="placement" title="Basic Drawer">
       <v-drawer :visible.sync="visible1" :placement="placement" title="Two Level Drawer"></v-drawer>
       <v-button color="primary" @click="open1">Two Level Drawer</v-button>
     </v-drawer>
     <v-button color="primary" @click="open">打开</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  多层抽屉
 * @desc 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。
 */
@Component({
  components: {
  },
  })
export default class MultipleExample extends Vue {
  visible: boolean = false

  visible1: boolean = false

  placement: string = 'right'

  open () {
    this.visible = true
  }

  open1 () {
    this.visible1 = true
  }
}
</script>
