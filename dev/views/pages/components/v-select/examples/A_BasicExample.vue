<template>
<div>
  <div class="my-3">
    <v-select v-model="value" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
    </v-select>
  </div>

  <div class="my-3">
    <v-select disabled v-model="value1" placeholder="请选择" clearable>
      <v-option value="shanghai" label="上海"></v-option>
      <v-option value="guangzhou" label="广州"></v-option>
      <v-option value="beijing" label="北京" disabled></v-option>
      <v-option value="wuhan" label="武汉"></v-option>
    </v-select>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 基本示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = 'shanghai'

  value1: string = 'wuhan'
}
</script>
