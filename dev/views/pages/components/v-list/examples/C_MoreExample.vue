<template>
<div>
  <div class="m-3">
    <span><v-switch v-model="bordered"></v-switch> Border</span>

    <v-radio-group v-model="size" class="ml-3">
      <v-radio-button label="lg">大</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>

  </div>
  <div class="m-3">
    <v-list :data-source="dataSource" :bordered="bordered" :size="size" :loading="loading">
      <v-list-item slot-scope="{item}">
        <v-list-item-meta slot="meta" :title="item.title"
          description="Lists can take an array of list items. When given an array">
          <v-avatar type="image" slot="avatar">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="&times;">
          </v-avatar>
        </v-list-item-meta>
        <p>content ...</p>
        <div slot="action">
          <a class="text-secondary"><i class="anticon anticon-edit"></i></a>
          <span class="mx-3 text-disabled">|</span>
          <a class="text-secondary"><i class="anticon anticon-delete"></i></a>
        </div>
      </v-list-item>
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
 * @title  加载动画
 * @desc  加载动画。
 */
@Component({
  components: {
  },
  })
export default class MoreExample extends Vue {
  bordered: boolean = true

  size: string = 'md'

  loading: boolean = false

  index: number = 1

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
