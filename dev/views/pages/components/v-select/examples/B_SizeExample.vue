<template>
<div>
  <div class="my-3">
    <v-row :gutter="16">
      <v-col :span="8">
        <v-select size="sm" v-model="value" placeholder="请选择" clearable>
          <v-option value="shanghai" label="上海"></v-option>
          <v-option value="guangzhou" label="广州"></v-option>
          <v-option value="beijing" label="北京" disabled></v-option>
          <v-option value="wuhan" label="武汉"></v-option>
        </v-select>
      </v-col>
      <v-col :span="8">
        <v-select v-model="value1" placeholder="请选择" clearable>
          <v-option value="shanghai" label="上海"></v-option>
          <v-option value="guangzhou" label="广州"></v-option>
          <v-option value="beijing" label="北京" disabled></v-option>
          <v-option value="wuhan" label="武汉"></v-option>
        </v-select>
      </v-col>
      <v-col :span="8">
        <v-select size="lg" v-model="value2" placeholder="请选择" clearable>
          <v-option value="shanghai" label="上海"></v-option>
          <v-option value="guangzhou" label="广州"></v-option>
          <v-option value="beijing" label="北京" disabled></v-option>
          <v-option value="wuhan" label="武汉"></v-option>
        </v-select>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  三种大小
 * @desc 三种大小的选择框, 与按钮、输入框大小保持一致
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value: string = 'shanghai'

  value1: string = 'wuhan'

  value2: string = 'wuhan'
}
</script>
