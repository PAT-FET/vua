<template>
<div>
  <div class="my-3">
    <v-checkbox v-model="accordion">手风琴模式</v-checkbox>

    <v-checkbox v-model="checkable">可选择</v-checkbox>

    <v-button class="ml-2" color="primary" @click="expandAll">展开/收起全部</v-button>
  </div>
  <div class="my-3">
    <v-tree node-key="key" :data-source="dataSource" :accordion="accordion" :checkable="checkable" ref="tree"></v-tree>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from 'src'

/**
 * @title   基本示例
 * @desc 基本示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  accordion: boolean = false

  checkable: boolean = false

  expand: boolean = false

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

  expandAll () {
    this.expand = !this.expand
    this.$refs.tree.expandAll(this.expand)
  }

  $refs!: {
    tree: VTree
  }
}
</script>
