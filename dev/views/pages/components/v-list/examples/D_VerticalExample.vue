<template>
<div>
  <div class="m-3">
    <span><v-switch v-model="bordered"></v-switch> Border</span>

    <span><v-switch v-model="pageable" class="ml-3"></v-switch> Pageable</span>

    <v-radio-group v-model="size" class="ml-3">
      <v-radio-button label="lg">大</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>

    <v-radio-group v-model="layout" class="ml-3">
      <v-radio-button label="horizontal">水平</v-radio-button>
      <v-radio-button label="vertical">垂直</v-radio-button>
    </v-radio-group>
  </div>
  <div class="m-3">
    <v-list :data-source="dataSource" :bordered="bordered" :size="size" :layout="layout" :pageable="pageable">
      <v-list-item slot-scope="{item}">
        <v-list-item-meta slot="meta" title="List Title" description="Lists can take an array of list items. When given an array">
          <v-avatar type="image" slot="avatar">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="&times;">
          </v-avatar>
        </v-list-item-meta>
        <div>{{item.title}}</div>
        <div slot="action">
          <a class="text-secondary"><i class="anticon anticon-star-o"></i> 156</a>
          <span class="mx-2 text-disabled">|</span>
          <a class="text-secondary"><i class="anticon anticon-like-o"></i> 100</a>
          <span class="mx-2 text-disabled">|</span>
          <a class="text-secondary"><i class="anticon anticon-message"></i> 3</a>
        </div>
        <div slot="extra">
          <img class="w-14" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
        </div>
      </v-list-item>
    </v-list>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  竖排列表样式
 * @desc 通过设置 layout 属性为 vertical 可实现竖排列表样式。
 */
@Component({
  components: {
  },
  })
export default class VerticalExample extends Vue {
  bordered: boolean = true

  size: string = 'md'

  layout: string = 'vertical'

  pageable: boolean = true

  dataSource = [
    {
      title: 'Racing car sprays burning fuel into crowd.'
    },
    {
      title: 'Japanese princess to wed commoner.',
    },
    {
      title: 'Australian walks 100km after outback crash.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Man charged over missing wedding girl.',
    },
    {
      title: 'Los Angeles battles huge wildfires.',
    }]
}
</script>
