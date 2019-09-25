<template>
<div>
  <div class="my-3">
    <div class="my-3">
      <v-radio-group v-model="size">
        <v-radio-button label="sm">小</v-radio-button>
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="lg">大</v-radio-button>
      </v-radio-group>
    </div>
    <v-select :size="size" style="width: 320px;" multiple v-model="value" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
      <v-option value="chengdu" label="成都"></v-option>
      <v-option value="hangzhou" label="杭州"></v-option>
      <v-option value="suzhou" label="苏州"></v-option>
    </v-select>
  </div>

  <div class="my-4">
    <p>可筛选</p>
    <v-select searchable style="width: 320px;" multiple v-model="value1" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
      <v-option value="chengdu" label="成都"></v-option>
      <v-option value="hangzhou" label="杭州"></v-option>
      <v-option value="suzhou" label="苏州"></v-option>
    </v-select>
  </div>

  <div class="my-4">
    <p>可搜索</p>
    <v-select searchable :search-fn="searchFn" style="width: 320px;" multiple v-model="value2" placeholder="请选择" clearable>
    </v-select>
  </div>

  <div class="my-4">
    <p>可添加</p>
    <v-select addable searchable style="width: 320px;" multiple v-model="value3" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
      <v-option value="chengdu" label="成都"></v-option>
      <v-option value="hangzhou" label="杭州"></v-option>
      <v-option value="suzhou" label="苏州"></v-option>
    </v-select>
  </div>

  <div class="my-4">
    <p>可折叠标签</p>
    <v-select addable searchable style="width: 320px;" multiple v-model="value4" placeholder="请选择" collapse-tags clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
      <v-option value="chengdu" label="成都"></v-option>
      <v-option value="hangzhou" label="杭州"></v-option>
      <v-option value="suzhou" label="苏州"></v-option>
    </v-select>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基础多选
 * @desc 适用性较广的基础多选，用 Tag 展示已选项
 */
@Component({
  components: {
  },
  })
export default class GroupExample extends Vue {
  value: string[] = ['shanghai']

  size: string = 'md'

  value1: string[] = []

  value2: string[] = ['上海']

  value3: string[] = []

  value4: string[] = []

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
