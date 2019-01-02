<template>
<div>
   <div class="m-3">
     <v-input-number :disabled="disabled" v-model="value"></v-input-number>

     <div class="my-3">
       <v-button @click="disabled=!disabled">切换</v-button>
     </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  不可用
 * @desc 点击按钮切换可用状态。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: number = 0

  disabled: boolean = true
}
</script>
