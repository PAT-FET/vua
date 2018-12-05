<template>
<div>
  <div class="my-3">
    <v-select searchable v-model="value" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
    </v-select>
  </div>

  <div class="my-3">
    <p>远程搜索</p>
    <v-select searchable :search-fn="searchFn" v-model="value1" placeholder="请选择" clearable>
    </v-select>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  带搜索框
 * @desc 展开后可对选项进行搜索。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = 'shanghai'

  value1: string = ''

  clob: string[] = [
    'a', 'a1', 'a2', 'a3', 'a4',
    'b', 'b1', 'b2', 'b3', 'b4',
    'c', 'c1', 'c2', 'c3', 'c4',
  ]

  searchFn (input: string, cb: (items: any[])=>void) {
    setTimeout(() => {
      let ret = this.clob.filter(v => v.includes(input)).map(v => {
        return {
          label: v,
          value: v
        }
      })
      cb(ret)
    }, 2000)
  }
}
</script>
