<template>
<div>
  <v-radio-group v-model="position">
    <v-radio-button label="top"> top </v-radio-button>
    <v-radio-button label="bottom"> bottom </v-radio-button>
    <v-radio-button label="left"> left </v-radio-button>
    <v-radio-button label="right"> right </v-radio-button>
  </v-radio-group>

  <div class="my-3">
    <v-tabs v-model="value" :position="position">
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
 * @title  位置
 * @desc 提供上、下、左、右四种定位。
 */
@Component({
  components: {
  },
  })
export default class PositionExample extends Vue {
  value: string = '1'

  position: string = 'top'
}
</script>
