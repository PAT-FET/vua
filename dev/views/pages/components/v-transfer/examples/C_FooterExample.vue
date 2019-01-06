<template>
<div>
   <div class="my-3 w-24">
     <v-transfer v-model="value" :data-source="dataSource" filterable :title="title">
       <v-button size="sm" type="outline" slot="source-footer">加载</v-button>
     </v-transfer>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义页脚
 * @desc 自定义页脚。
 */
@Component({
  components: {
  },
  })
export default class FilterExample extends Vue {
  value: number[] = [2, 4]

  disabled: boolean = false

  title: string[] = ['未分类', '类别1']

  dataSource = [
    {
      key: 1,
      label: 'content 1'
    },
    {
      key: 2,
      label: 'content 2'
    },
    {
      key: 3,
      label: 'content 3',
      disabled: true
    },
    {
      key: 4,
      label: 'content 4'
    },
    {
      key: 5,
      label: 'content 5'
    },
    {
      key: 6,
      label: 'content 6'
    },
    {
      key: 7,
      label: 'content 7',
      disabled: true
    },
    {
      key: 8,
      label: 'content 8'
    },
    {
      key: 9,
      label: 'content 9'
    },
     {
      key: 10,
      label: 'content 10'
    },
     {
      key: 11,
      label: 'content 11'
    }
  ]
}
</script>
