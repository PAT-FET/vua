<template>
<div>
  <v-radio-group v-model="position">
    <v-radio-button label="top"> top </v-radio-button>
    <v-radio-button label="bottom"> bottom </v-radio-button>
    <!-- <v-radio-button label="left"> left </v-radio-button>
    <v-radio-button label="right"> right </v-radio-button> -->
  </v-radio-group>

  <div class="my-3">
    <v-tabs type="card" v-model="value" :position="position">
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
 * @title  卡片式页签
 * @desc 另一种样式的页签，不提供对应的垂直样式。
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
