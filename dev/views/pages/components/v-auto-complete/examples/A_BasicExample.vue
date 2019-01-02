<template>
<div>
   <div class="my-3">
      <v-radio-group v-model="size">
        <v-radio-button label="lg">大</v-radio-button>
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>
   </div>

   <div class="m-4">
     <v-auto-complete :size="size" placeholder="请输入内容" :search-fn="searchFn" v-model="value"></v-auto-complete>

    <v-auto-complete :size="size" placeholder="请输入内容" :search-fn="searchFn" v-model="value" disabled class="ml-3"></v-auto-complete>
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
  value: string = ''

  size: string ='md'

  searchFn (input: string, cb: (items: any[])=>void) {
    setTimeout(() => {
      let ret = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => {
        return {
          title: input + '-' + v
        }
      })
      cb(ret)
    }, 2000)
  }
}
</script>
