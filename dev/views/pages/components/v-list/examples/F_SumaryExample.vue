<template>
<div>
  <div class="m-3">
    <span><v-switch v-model="bordered"></v-switch> Border</span>

    <span><v-switch v-model="pageable" class="ml-3"></v-switch> Pageable</span>

    <span><v-switch v-model="gridable" class="ml-3"></v-switch> Grid</span>

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
    <v-list :data-source="dataSource" :bordered="bordered" :size="size" :layout="layout" :grid="grid" :pageable="pageable" :loading="loading">
      <v-list-item slot-scope="{item}">
        <v-list-item-meta slot="meta" title="List Title" description="Lists can take an array of list items. When given an array">
          <v-avatar type="image" slot="avatar">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="&times;">
          </v-avatar>
        </v-list-item-meta>
        <div>{{item.title}}</div>
        <div slot="action">
          <a class="text-secondary"><i class="anticon anticon-star-o"></i> 156</a>
        </div>
        <div slot="extra">
          <img class="w-6" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
        </div>
      </v-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </v-list>

     <div class="my-3 text-center">
      <v-button type="outline" @click="load" :loading="loading">加载更多</v-button>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  综合示例
 * @desc 综合示例
 */
@Component({
  components: {
  },
  })
export default class SumaryExample extends Vue {
  bordered: boolean = true

  size: string = 'md'

  layout: string = 'horizontal'

  pageable: boolean = false

  loading: boolean = false

  index: number = 1

  gridable: boolean = false

  get grid () {
    let ret = {
      gutter: 16,
      column: 2
    }
    return this.gridable ? ret : null
  }

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
      title: 'Los Angeles battles huge wildfires.',
    }]

  load () {
    this.loading = true
    setTimeout(() => {
      this.dataSource.push(...[1, 2, 3].map(v => ({ title: 'Title ' + this.index++ })))
      this.loading = false
    }, 3000)
  }
}
</script>
