<template>
<div>
   <div class="m-3">
     <v-skeleton active></v-skeleton>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  动画效果
 * @desc 显示动画效果。
 */
@Component({
  components: {
  },
  })
export default class ActiveExample extends Vue {
}
</script>
