<template>
<div>
   <div class="m-2">
    <v-switch size="sm" v-model="value1" disabled></v-switch>
   </div>
   <div class="m-2">
    <v-switch v-model="value2" disabled></v-switch>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   不可用
 * @desc Switch 失效状态。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value1: boolean = false

  value2: boolean = false
}
</script>
