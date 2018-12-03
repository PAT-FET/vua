<template>
<div>
  <div class="my-3">
    <v-checkbox v-model="value">Checkbox</v-checkbox>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: boolean = false
}
</script>
