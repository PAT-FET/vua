<template>
<div>
   <div class="m-3">
     <v-rate v-model="value" allow-half clearable></v-rate>
   </div>
   <div class="m-3">
     <v-rate v-model="value1" allow-half></v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  清除
 * @desc 支持允许或者禁用清除。
 */
@Component({
  components: {
  },
  })
export default class ClearableExample extends Vue {
  value: number = 3.5

  value1: number = 3.5
}
</script>
