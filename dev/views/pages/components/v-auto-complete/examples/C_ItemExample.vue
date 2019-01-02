<template>
<div>
   <div class="m-4">
     <v-auto-complete :search-fn="searchFn" v-model="value" placeholder="请输入内容">
        <div slot="item" slot-scope="{item}" class="d-flex justify-content-between w-12">
          <span>{{item.title}}</span>
          <span class="text-secondary">大约 {{item.count}} 条记录</span>
        </div>
     </v-auto-complete>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义模版
 * @desc 自定义模版。
 */
@Component({
  components: {
  },
  })
export default class ItemExample extends Vue {
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
          title: v,
          count: Math.floor(Math.random() * 1000)
        }
      })
      cb(ret)
    }, 2000)
  }
}
</script>
