<template>
<div>
  <div class="my-3">
    <v-input v-model="value" placeholder="search"></v-input>
  </div>
  <div class="my-3">
    <v-tree node-key="key" default-expand-all :data-source="dataSource" :filter-fn="filterFn" ref="tree"></v-tree>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from 'src'
import { TreeNodeFilterFn } from '@/mixins/tree-iterable/type'

/**
 * @title 可搜索
 * @desc 可搜索的树。
 */
@Component({
  components: {
  },
  })
export default class FilterExample extends Vue {
  value: string = ''

  dataSource = [{
    key: '1',
    label: '一级 1',
    disabled: true,
    children: [{
      key: '1-1',
      label: '二级 1-1',
      children: [{
        key: '1-1-1',
        label: '三级 1-1-1'
      }]
    }]
  }, {
    key: '2',
    label: '一级 2',
    children: [{
      key: '2-1',
      label: '二级 2-1',
      children: [{
        key: '2-1-1',
        label: '三级 2-1-1'
      }]
    }, {
      key: '2-2',
      label: '二级 2-2',
      children: [{
        key: '2-2-1',
        label: '三级 2-2-1'
      }]
    }]
  }, {
    key: '3',
    label: '一级 3',
    children: [{
      disabled: true,
      key: '3-1',
      label: '二级 3-1',
      children: [{
        key: '3-1-1',
        label: '三级 3-1-1'
      }]
    }, {
      key: '3-2',
      label: '二级 3-2',
      children: [{
        key: '3-2-1',
        label: '三级 3-2-1'
      }]
    }]
  }]

  filterFn: TreeNodeFilterFn = ({node, value}) => {
    if (!value) return true
    return node.data.label.indexOf(value) !== -1
  }

  @Watch('value') valueChange (value: any) {
    this.$refs.tree.filter(value)
  }

  $refs!: {
    tree: VTree
  }
}
</script>
