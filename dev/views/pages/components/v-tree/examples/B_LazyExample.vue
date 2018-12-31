<template>
<div>
  <div class="my-3">
    <v-tree node-key="key" :data-source="dataSource" lazy :load-fn="loadFn" ref="tree"></v-tree>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from '@/components'
import { TreeNodeLoadFn } from '@/mixins'

let index = 100

/**
 * @title 异步数据加载
 * @desc 点击展开节点，动态加载数据, 可以手动指定 isLeaf。
 */
@Component({
  components: {
  },
  })
export default class LazyExample extends Vue {
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

  $refs!: {
    tree: VTree
  }
}
</script>
