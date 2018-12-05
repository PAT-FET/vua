<template>
<div>
  <v-radio-group v-model="size">
    <v-radio-button label="sm"> sm </v-radio-button>
    <v-radio-button label="md"> md </v-radio-button>
    <v-radio-button label="lg"> lg </v-radio-button>
  </v-radio-group>
  <div class="my-3">
    <v-tabs v-model="value" :size="size">
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
 * @title  大小
 * @desc 大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value: string = '1'

  size: string = 'md'
}
</script>
