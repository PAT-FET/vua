<template>
<div>
   <div class="m-3">
    <v-pagination size="sm" :total="50"></v-pagination>
   </div>

    <div class="m-3">
      <v-pagination size="sm" :total="total"></v-pagination>
    </div>

    <div class="m-3">
      <v-pagination size="sm" :total="total" show-size-changer show-jumper show-total></v-pagination>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 迷你
 * @desc 迷你版本。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  total: number = 500
}
</script>
