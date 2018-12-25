<template>
<div>
  <div class="my-3">
    <v-tree node-key="key" default-expand-all :data-source="dataSource" ref="tree">
      <template slot="indicator" slot-scope="{node}">
        <i class="anticon anticon-folder" v-if="!node.isLeaf"></i>
        <i class="anticon anticon-file" v-else></i>
      </template>

      <div slot="content"  slot-scope="{node}" class="d-flex justify-content-between">
        <span class="mr-4">{{node.data.label}}</span>
        <span>
          <a class="mr-2" @click="append(node)">添加</a>
          <a @click="del(node)">删除</a>
        </span>
      </div>
    </v-tree>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from 'src'
import { TreeNodeFilterFn } from '@/mixins/tree-iterable/type'
import Node from '@/mixins/tree-iterable/Node'

let index = 1000

/**
 * @title 自定义图标和内容
 * @desc 可以针对不同的节点定制图标和内容。
 */
@Component({
  components: {
  },
  })
export default class IconContentExample extends Vue {
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

  append (node: Node) {
    if (!node.data.children) {
      this.$set(node.data, 'children', [])
    }
    node.data.children.push({
      key: index++,
      label: 'label' + index
    })
    node.expandNode(true)
  }

  del (node: Node) {
    if (node.parent) {
      let children = node.parent.data.children || node.parent.data
      let idx = children.findIndex((v: any) => node.data.key === v.key)
      if (idx >= 0) children.splice(idx, 1)
    }
  }

  $refs!: {
    tree: VTree
  }
}
</script>
