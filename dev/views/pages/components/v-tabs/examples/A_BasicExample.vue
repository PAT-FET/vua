<template>
<div>
  <div class="my-3">
    <v-tabs v-model="value">
      <v-tab-pane name="1" label="Tab 1">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3">Content of Tab Pane 3</v-tab-pane>
      <v-tab-pane name="4" label="Tab 4">Content of Tab Pane 4</v-tab-pane>
    </v-tabs>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 基本示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = '1'
}
</script>
