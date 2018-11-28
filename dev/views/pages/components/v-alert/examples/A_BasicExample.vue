<template>
<div>
   <div class="m-3">
     <v-alert description="alert message"></v-alert>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 最简单的用法，适用于简短的警告提示。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
