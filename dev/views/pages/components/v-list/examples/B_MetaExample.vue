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
    <v-list :data-source="dataSource" :bordered="bordered" :size="size">
      <v-list-item slot-scope="{item}">
        <v-list-item-meta slot="meta" :title="item.title"
          description="Lists can take an array of list items. When given an array">
          <v-avatar type="image" slot="avatar">
            <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="&times;">
          </v-avatar>
        </v-list-item-meta>
      </v-list-item>
    </v-list>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基础列表
 * @desc 基础列表。
 */
@Component({
  components: {
  },
  })
export default class MetaExample extends Vue {
  bordered: boolean = true

  size: string = 'md'

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
}
</script>
