<template>
<div>
  <div class="my-4">
    <div class="m-2">
      <v-switch size="sm" v-model="value1" inactive-text="Off" active-text="On"></v-switch>
    </div>
    <div class="m-2">
      <v-switch v-model="value2" inactive-text="Off" active-text="On"></v-switch>
    </div>
  </div>

  <div class="my-4">
    <div class="m-2">
      <v-switch size="sm" v-model="value3" inactive-icon="close" active-icon="check"></v-switch>
    </div>
    <div class="m-2">
      <v-switch v-model="value4" inactive-icon="close" active-icon="check"></v-switch>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   文字和图标
 * @desc 带有文字和图标。
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {
  value1: boolean = false

  value2: boolean = false

  value3: boolean = false

  value4: boolean = false
}
</script>
