<template>
<div>
  <div class="my-3">
    <v-checkbox v-model="accordion">手风琴模式</v-checkbox>

    <v-button class="ml-2" color="primary" @click="expandAll">展开全部</v-button>
  </div>
  <div class="my-3">
    <v-tree :data-source="dataSource" :accordion="accordion" ref="tree"></v-tree>
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

  dataSource = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1'
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }]

  expandAll () {
    this.$refs.tree.expandAll()
  }

  $refs!: {
    tree: VTree
  }
}
</script>
