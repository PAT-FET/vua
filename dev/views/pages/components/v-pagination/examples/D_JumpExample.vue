<template>
<div>
   <div class="m-3">
    <v-pagination :total="total" show-size-changer show-jumper show-total></v-pagination>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 跳转
 * @desc 快速跳转到某一页。
 */
@Component({
  components: {
  },
  })
export default class JumpExample extends Vue {
  total: number = 500
}
</script>
