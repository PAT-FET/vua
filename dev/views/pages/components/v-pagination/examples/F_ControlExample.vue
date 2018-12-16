<template>
<div>
    <div class="m-3">
      <v-alert class="my-2" :description="description"></v-alert>
      <v-pagination :total="total" :currentPage.sync="currentPage" :pageSize.sync="pageSize" show-size-changer show-jumper show-total></v-pagination>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 受控
 * @desc 受控制的页码和每页条数。
 */
@Component({
  components: {
  },
  })
export default class ControlExample extends Vue {
  total: number = 500

  pageSize: number = 50

  currentPage: number = 5

  get description () {
    return `currentPage: ${this.currentPage}, pageSize: ${this.pageSize}`
  }
}
</script>
