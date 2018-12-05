<template>
<div>
  <div class="my-3">
    <v-tabs v-model="value">
      <v-tab-pane name="1" label="Tab 1">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  禁用
 * @desc 禁用某一项。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: string = '1'
}
</script>
