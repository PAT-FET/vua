<template>
<div>
  <div class="m-3">
    <v-list :data-source="dataSource" bordered :grid="grid">
      <v-list-item slot-scope="{item}">
        <slot>
          <v-card>
            {{item.title}}
          </v-card>
        </slot>
      </v-list-item>
    </v-list>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 栅格列表
 * @desc 可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。
 */
@Component({
  components: {
  },
  })
export default class GridExample extends Vue {
  grid = {
    gutter: 16,
    column: 3
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
