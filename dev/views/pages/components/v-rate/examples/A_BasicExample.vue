<template>
<div>
   <div class="m-3">
     <v-rate v-model="value"></v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: number = 3
}
</script>
