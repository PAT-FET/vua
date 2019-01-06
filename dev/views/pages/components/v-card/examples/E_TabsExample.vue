<template>
<div>
  <div class="m-3">
    <div class="m-3">
      <v-radio-group v-model="size">
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
      </v-radio-group>
    </div>
    <v-card :size="size">
        <v-tabs v-model="value">
          <v-tab-pane name="1" label="Tab 1">Content of Tab Pane 1</v-tab-pane>
          <v-tab-pane name="2" label="Tab 2">Content of Tab Pane 2</v-tab-pane>
          <v-tab-pane name="3" label="Tab 3">Content of Tab Pane 3</v-tab-pane>
          <v-tab-pane name="4" label="Tab 4">Content of Tab Pane 4</v-tab-pane>
        </v-tabs>
    </v-card>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 带页签的卡片
 * @desc 可承载更多内容。
 */
@Component({
  components: {
  },
  })
export default class LoadingExample extends Vue {
  size: string = 'md'

  value: string = '1'
}
</script>
