<template>
<div>
<div class="my-3">
   <div class="flex p-2 bg-2 rounded">
      <v-button ghost>Default</v-button>
      <v-button ghost color="primary" class="ml-3">Primary</v-button>
      <v-button ghost type="dashed" class="ml-3">Dashed</v-button>
      <v-button ghost color="error" class="ml-3">Danger</v-button>
      <v-button ghost disabled class="ml-3">Default</v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  幽灵按钮
 * @desc 幽灵按钮常用在有颜色的背景上。
 */
@Component({
  components: {
  },
  })
export default class GhostExample extends Vue {

}
</script>
