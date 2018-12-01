<template>
<div>
   <div class="my-3">
     <v-input placeholder="请输入内容" v-model="value" clearable></v-input>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   可清空
 * @desc 可清空。
 */
@Component({
  components: {
  },
  })
export default class ClearExample extends Vue {
  value: string = ''
}
</script>
