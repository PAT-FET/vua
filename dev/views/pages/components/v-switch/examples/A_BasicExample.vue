<template>
<div>
   <div class="m-4">
    <v-switch v-model="value"></v-switch>
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
  value: boolean = false
}
</script>
