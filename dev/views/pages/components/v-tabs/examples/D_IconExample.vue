<template>
<div>
  <div class="my-3">
    <v-tabs v-model="value">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  图标
 * @desc 有图标的标签。
 */
@Component({
  components: {
  },
  })
export default class IconExample extends Vue {
  value: string = '1'
}
</script>
