<template>
<div>
   <div class="m-3">
     <v-tag closable v-for="(tag, i) in tags" :key="tag" @close="onClose(i)"> {{tag}} </v-tag>
     <v-input size="sm" @change="add" class="align-middle"></v-input>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  动态添加和删除
 * @desc 用数组生成一组标签，可以动态添加和删除。
 */
@Component({
  components: {
  },
  })
export default class AddRemoveExample extends Vue {
  tags: string[] = ['Tag 2', 'Tag 3']

  onClose (index: number) {
    this.tags.splice(index, 1)
  }

  add (value: string) {
    if (!value || !value.trim()) return
    if (this.tags.includes(value)) return
    this.tags.push(value)
  }
}
</script>
