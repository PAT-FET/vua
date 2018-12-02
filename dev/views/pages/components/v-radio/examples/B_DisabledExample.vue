<template>
<div>
  <div class="my-3">
    <v-radio :value="1" :label="1" disabled>Radio</v-radio>
    <v-radio :value="0" :label="1" disabled>Radio</v-radio>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   不可用
 * @desc Radio 不可用。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: string = ''
}
</script>
