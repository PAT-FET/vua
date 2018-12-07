<template>
<div>
  <div class="my-3">
    <v-select searchable v-model="value" placeholder="请选择" clearable>
      <v-option-group title="中国东部">
        <v-option value="shanghai" label="上海"></v-option>
        <v-option value="jiangsu" label="江苏"></v-option>
        <v-option value="zhejiang" label="浙江"></v-option>
      </v-option-group>
      <v-option-group title="中国西部">
        <v-option value="sichuan" label="四川"></v-option>
        <v-option value="gansu" label="甘肃"></v-option>
        <v-option value="qinghai" label="青海"></v-option>
      </v-option-group>
    </v-select>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  分组
 * @desc 用 OptionGroup 进行选项分组。
 */
@Component({
  components: {
  },
  })
export default class GroupExample extends Vue {
  value: string = 'shanghai'

  value1: string = ''
}
</script>
