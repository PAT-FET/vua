<template>
<div>
   <div class="m-3">
    <v-pagination :total="total" show-size-changer></v-pagination>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  改变
 * @desc 改变每页显示条目数。
 */
@Component({
  components: {
  },
  })
export default class PageSizeExample extends Vue {
  total: number = 500
}
</script>
