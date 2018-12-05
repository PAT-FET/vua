<template>
<div>
  <v-radio-group v-model="position">
    <v-radio-button label="top"> top </v-radio-button>
    <v-radio-button label="bottom"> bottom </v-radio-button>
    <!-- <v-radio-button label="left"> left </v-radio-button>
    <v-radio-button label="right"> right </v-radio-button> -->
  </v-radio-group>

  <div class="my-3">
    <v-tabs background-color="info" border-color="warning" text-color="#fff" v-model="value" :position="position">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
    </v-tabs>
  </div>

  <div class="my-4">
    <v-alert class="my-2" type="warning" show-icon description="暂时没有对card模式做处理， 该模式三个变量不够， 将来有需要再做修改"></v-alert>
    <v-radio-group v-model="position1">
      <v-radio-button label="top"> top </v-radio-button>
      <v-radio-button label="bottom"> bottom </v-radio-button>
      <!-- <v-radio-button label="left"> left </v-radio-button>
      <v-radio-button label="right"> right </v-radio-button> -->
    </v-radio-group>

    <div class="my-3">
      <v-tabs background-color="info" border-color="warning" text-color="#fff" type="card" v-model="value1" :position="position">
        <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
        <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
        <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
      </v-tabs>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义主题
 * @desc 可使用 background-color border-color text-color 设置主题样式。
 */
@Component({
  components: {
  },
  })
export default class ThemeExample extends Vue {
  value: string = '1'

  position: string = 'top'

  value1: string = '1'

  position1: string = 'top'
}
</script>
