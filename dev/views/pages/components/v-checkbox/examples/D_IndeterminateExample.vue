<template>
<div>
  <div class="my-3">
    <v-checkbox :indeterminate="indeterminate" v-model="checkedAll"></v-checkbox>
  </div>

  <div class="my-3">
    <v-checkbox-group v-model="value">
      <v-checkbox label="shanghai">上海</v-checkbox>
      <v-checkbox label="beijing">北京</v-checkbox>
      <v-checkbox label="guangzhou">广州</v-checkbox>
    </v-checkbox-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  indeterminate 状态
 * @desc indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。
 */
@Component({
  components: {
  },
  })
export default class IndeterminateExample extends Vue {
  value: string[] = ['shanghai']

  get checkedAll () {
    return this.value.length === 3
  }

  set checkedAll (all: any) {
    this.value = ['shanghai', 'beijing', 'guangzhou']
  }

  get indeterminate () {
    return this.value.length > 0 && this.value.length < 3
  }
}
</script>
