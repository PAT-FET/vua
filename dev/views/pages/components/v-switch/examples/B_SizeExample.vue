<template>
<div>
   <div class="m-2">
    <v-switch size="sm" v-model="value1"></v-switch>
   </div>
   <div class="m-2">
    <v-switch v-model="value2"></v-switch>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   两种大小
 * @desc 两种大小。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value1: boolean = false

  value2: boolean = false
}
</script>
