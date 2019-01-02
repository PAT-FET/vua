<template>
<div>
   <div class="m-3">
     <v-input-number size="lg" v-model="value"></v-input-number>
     <v-input-number size="md" v-model="value" class="ml-3"></v-input-number>
     <v-input-number size="sm" v-model="value" class="ml-3"></v-input-number>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  三种大小
 * @desc 三种大小的数字输入框。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  value: number = 0
}
</script>
