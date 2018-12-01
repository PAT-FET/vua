<template>
<div>
   <div class="my-3">
     <v-input size="lg" placeholder="Large Size" v-model="value"></v-input>
   </div>
    <div class="my-3">
     <v-input placeholder="Middle Size" v-model="value1"></v-input>
   </div>
    <div class="my-3">
     <v-input size="sm" placeholder="Small Size" v-model="value2"></v-input>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   三种大小
 * @desc 高度分别为 2.5rem、2rem 和 1.5rem。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value: string = ''

  value1: string = ''

  value2: string = ''
}
</script>
