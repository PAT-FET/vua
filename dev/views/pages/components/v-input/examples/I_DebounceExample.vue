<template>
<div>
  <div class="m-4">
    <input type="number" step="100" min="0" v-model.number="delay">
    <v-alert :description="value" class="my-2"></v-alert>
    <v-input :debounce="delay" placeholder="请输入内容" v-model="value"></v-input>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   输入去抖
 * @desc 输入去抖。
 */
@Component({
  components: {
  },
  })
export default class DebounceExample extends Vue {
  delay: number = 0

  value: string = ''
}
</script>
