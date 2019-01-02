<template>
<div>
   <div class="m-4">
     <v-auto-complete placeholder="请输入内容" :search-fn="searchFn" v-model="value"></v-auto-complete>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  分组
 * @desc 分组显示
 */
@Component({
  components: {
  },
  })
export default class GroupExample extends Vue {
  value: string = ''

  clob: string[] = [
    'a', 'a1', 'a2', 'a3', 'a4',
    'b', 'b1', 'b2', 'b3', 'b4',
    'c', 'c1', 'c2', 'c3', 'c4',
  ]

  searchFn (input: string, cb: (items: any[])=>void) {
    setTimeout(() => {
      let ret = this.clob.filter(v => v.includes(input)).map((v, i) => {
        return {
          title: `分类${i}`,
          children: [
            {
              title: v
            }
          ]
        }
      })
      cb(ret)
    }, 800)
  }
}
</script>
