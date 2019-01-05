<template>
<div>
   <div class="my-3">
     <v-switch v-model="disabled"></v-switch> Disabled
   </div>
   <div class="my-3 w-24">
     <v-transfer v-model="value" :disabled="disabled" :data-source="dataSource"></v-transfer>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 基本使用。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
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
    }
  ]
}
</script>
