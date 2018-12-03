<template>
<div>
  <div class="my-3">
    <v-checkbox v-model="value" disabled>unchecked</v-checkbox>

    <v-checkbox v-model="value1" disabled>checked</v-checkbox>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  不可用
 * @desc checkbox 不可用。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: boolean = false

  value1: boolean = true
}
</script>
