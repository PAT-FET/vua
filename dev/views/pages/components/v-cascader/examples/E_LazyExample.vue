<template>
<div>
  <div class="my-3">
    <v-radio-group v-model="size" class="mr-3">
      <v-radio-button label="sm">小</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="lg">大</v-radio-button>
    </v-radio-group>

    <v-checkbox v-model="changeOnSelect">选择即改变</v-checkbox>
  </div>
  <div class="my-3">
    <v-cascader :size="size"
      node-key="key"
      :data-source="dataSource"
      :change-on-select="changeOnSelect"
      v-model="value"
      searchable
      lazy
      :load-fn="loadFn"
      clearable placeholder="请选择"></v-cascader>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from '@/components'
import { TreeNodeLoadFn } from '@/mixins'

let index = 1000

/**
 * @title 动态加载选项
 * @desc 点击展开节点，动态加载数据, 可以手动指定 isLeaf。
 */
@Component({
  components: {
  },
  })
export default class LazyExample extends Vue {
  size: string = 'md'

  value: Array<string | number> = []

  changeOnSelect: boolean = true

  dataSource = [{
    key: '1',
    label: '一级 1'
  }, {
    key: '2',
    label: '一级 2',
    isLeaf: true
  }]

  loadFn: TreeNodeLoadFn = ({node}, resovle) => {
    if (node.level < 4) {
      setTimeout(() => {
        resovle([1, 2].map(v => {return {key: index++, label: 'label' + index}}))
      }, 1000)
    } else {
      resovle([])
    }
  }
}
</script>
