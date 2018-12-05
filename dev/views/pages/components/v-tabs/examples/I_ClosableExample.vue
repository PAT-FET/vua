<template>
<div>
  <v-radio-group v-model="position" class="mr-2">
    <v-radio-button label="top"> top </v-radio-button>
    <v-radio-button label="bottom"> bottom </v-radio-button>
  </v-radio-group>

  <v-radio-group v-model="type" class="mr-2">
    <v-radio-button label="card"> card </v-radio-button>
    <v-radio-button label="line" disabled> line </v-radio-button>
  </v-radio-group>

  <div class="my-3">
    <v-tabs closable :type="type" v-model="value" :position="position">
      <v-tab-pane name="1" label="Tab 1" icon="apple">Content of Tab Pane 1</v-tab-pane>
      <v-tab-pane name="2" label="Tab 2" icon="windows">Content of Tab Pane 2</v-tab-pane>
      <v-tab-pane name="3" label="Tab 3" icon="github" disabled>Content of Tab Pane 3</v-tab-pane>
      <v-tab-pane :name="tab.name" :label="tab.label" v-for="tab in tabs" :key="tab.name">Content of Tab Pane {{tab.name}}</v-tab-pane>

      <span slot="extra">
        <v-button type="outline" icon="plus" @click="add"></v-button>
      </span>
    </v-tabs>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  新增和关闭页签
 * @desc 只有卡片样式的页签支持新增和关闭选项, 使用 closable启用。
 */
@Component({
  components: {
  },
  })
export default class ClosableExample extends Vue {
  value: string = '1'

  position: string = 'top'

  type="card"

  tabs: any[] = []

  index: number = 10

  add () {
    let i = this.index++
    this.tabs.push({
      name: i + '',
      label: 'Label ' + i
    })
  }
}
</script>
