<template>
<div>
  <div class="my-3">
    <v-alert class="mb-3" type="warning" description="默认关联选中， 即选择父节点， 其子节点也相应选上；所有子节点选中， 父节点也相应选中"></v-alert>
    <v-checkbox v-model="checkStrictly" class="mr-2">是否取消关联选中</v-checkbox>
    <v-button color="primary" @click="select">选中 1-1、2-1</v-button>
    <v-checkbox v-model="disabled" class="ml-3">禁用</v-checkbox>
  </div>
  <div class="my-3">
    <v-tree node-key="key" :disabled="disabled" :checkStrictly="checkStrictly" checkable :data-source="dataSource" ref="tree" @check="onCheck"></v-tree>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from 'src'

/**
 * @title  可选择
 * @desc 树节点的选择。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  checkStrictly: boolean = false

  disabled: boolean = false

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

  select () {
    this.$refs.tree.setCheckedKeys(['1-1', '2-1'])
  }

  onCheck (node: any) {
    console.log('event [check]', node)
  }

  $refs!: {
    tree: VTree
  }
}
</script>
