<template>
<div>
   <div class="my-3">
     <v-transfer v-model="value" :data-source="dataSource" filterable style="height: 32rem;"></v-transfer>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义高度
 * @desc 自定义高度。
 */
@Component({
  components: {
  },
  })
export default class HeightExample extends Vue {
  value: number[] = [2, 4]

  disabled: boolean = false

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
    },
     {
      key: 12,
      label: 'content 12'
    },
     {
      key: 13,
      label: 'content 13'
    },
     {
      key: 14,
      label: 'content 14'
    },
     {
      key: 15,
      label: 'content 15'
    },
     {
      key: 16,
      label: 'content 16'
    },
     {
      key: 17,
      label: 'content 17'
    },
     {
      key: 18,
      label: 'content 18'
    },
     {
      key: 19,
      label: 'content 19'
    },
     {
      key: 20,
      label: 'content 20'
    },
     {
      key: 21,
      label: 'content 21'
    }
  ]
}
</script>
