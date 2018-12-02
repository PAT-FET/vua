<template>
<div>
  <div class="my-4">
    <div class="m-2">
      <v-switch :loading="loading" size="sm" v-model="value1" inactive-text="Off" active-text="On" @change="load"></v-switch>
    </div>
    <div class="m-2">
      <v-switch :loading="loading" v-model="value2" inactive-text="Off" active-text="On" @change="load"></v-switch>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   加载中
 * @desc 标识开关操作仍在执行中。
 */
@Component({
  components: {
  },
  })
export default class LoadingExample extends Vue {
  loading: boolean = false

  load (value: boolean) {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
