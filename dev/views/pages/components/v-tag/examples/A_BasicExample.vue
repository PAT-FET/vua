<template>
<div>
   <div class="m-3">
     <v-tag> Tag 1 </v-tag>
     <v-tag closable v-for="(tag, i) in tags" :key="tag" @close="onClose(i)"> {{tag}} </v-tag>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  tags: string[] = ['Tag 2', 'Tag 3']

  onClose (index: number) {
    this.tags.splice(index, 1)
  }
}
</script>
