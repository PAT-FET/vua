<template>
<div>
  <v-radio-group v-model="position">
    <v-radio-button label="top"> top </v-radio-button>
    <v-radio-button label="bottom"> bottom </v-radio-button>
    <v-radio-button label="left"> left </v-radio-button>
    <v-radio-button label="right"> right </v-radio-button>
  </v-radio-group>

  <div class="my-3">
    <v-tabs justify="space-around" background-color="info" border-color="warning" text-color="#fff" v-model="value" :position="position">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>

  <div class="my-3">
    <v-tabs justify="space-between" background-color="info" border-color="warning" text-color="#fff" v-model="value1" :position="position">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>

   <div class="my-3">
    <v-tabs justify="center" background-color="info" border-color="warning" text-color="#fff" v-model="value2" :position="position">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>

   <div class="my-3">
    <v-tabs justify="flex-end" background-color="info" border-color="warning" text-color="#fff" v-model="value3" :position="position">
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
 * @title  对齐
 * @desc 支持flex中justify-content所有值， 只针对line模式。
 */
@Component({
  components: {
  },
  })
export default class JustifyExample extends Vue {
  value: string = '1'

  value1: string = '1'

  value2: string = '1'

  value3: string = '1'

  value4: string = '1'

  position: string = 'top'
}
</script>
