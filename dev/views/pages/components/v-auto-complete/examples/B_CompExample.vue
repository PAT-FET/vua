<template>
<div>
   <div class="m-4">
     <v-auto-complete :search-fn="searchFn" v-model="value">
        <v-textarea placeholder="请输入内容" v-model="value" style="width: 320px;"></v-textarea>
     </v-auto-complete>

    <v-auto-complete placeholder="请输入内容" :search-fn="searchFn" v-model="value1" disabled class="ml-3">
       <v-textarea placeholder="请输入内容" v-model="value1" style="width: 320px;" disabled></v-textarea>
    </v-auto-complete>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义输入组件
 * @desc 自定义输入组件。
 */
@Component({
  components: {
  },
  })
export default class CompExample extends Vue {
  value: string = ''

  value1: string = ''

  clob: string[] = [
    'a', 'a1', 'a2', 'a3', 'a4',
    'b', 'b1', 'b2', 'b3', 'b4',
    'c', 'c1', 'c2', 'c3', 'c4',
  ]

  searchFn (input: string, cb: (items: any[])=>void) {
    setTimeout(() => {
      let ret = this.clob.filter(v => v.includes(input)).map((v, i) => {
        return {
          title: v
        }
      })
      cb(ret)
    }, 800)
  }
}
</script>
