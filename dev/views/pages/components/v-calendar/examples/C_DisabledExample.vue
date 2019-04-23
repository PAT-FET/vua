<template>
<div>
  <v-calendar v-model="value" :disabled-date="disabledDate"></v-calendar>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  禁用
 * @desc 禁用特定日期。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: string = ''

  disabledDate (date: Date) {
    if (!this.value) return false
    let year = +this.value.substr(0, 4)
    let month = +this.value.substr(5, 2)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    return year !== y || month !== m
  }
}
</script>
