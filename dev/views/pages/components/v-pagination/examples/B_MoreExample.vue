<template>
<div>
   <div class="m-3">
    <v-pagination :total="total"></v-pagination>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   更多
 * @desc 更多分页。
 */
@Component({
  components: {
  },
  })
export default class MoreExample extends Vue {
  total: number = 500
}
</script>
