<template>
<div>
  <div class="my-3">
    <v-radio-group v-model="size">
      <v-radio-button label="sm">小</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="lg">大</v-radio-button>
    </v-radio-group>
  </div>
  <div class="my-3">
    <v-cascader :size="size" node-key="key" :data-source="dataSource" v-model="value" clearable placeholder="请选择"></v-cascader>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm, VTree } from 'src'

/**
 * @title 大小
 * @desc 不同大小的级联选择器。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  size: string = 'md'

  value: Array<string | number> = []

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
}
</script>
