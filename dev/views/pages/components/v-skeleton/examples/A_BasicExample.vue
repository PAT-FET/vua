<template>
<div>
   <div class="m-3">
     <v-skeleton></v-skeleton>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 最简单的占位效果。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
