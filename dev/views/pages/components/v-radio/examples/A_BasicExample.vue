<template>
<div>
  <div class="my-3">
    <v-radio v-model="value" :label="1">Radio</v-radio>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 基本使用。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = ''
}
</script>
