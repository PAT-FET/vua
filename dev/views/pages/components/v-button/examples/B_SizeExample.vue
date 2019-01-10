<template>
<div>
<div class="my-3">
   <div class='flex'>
      <v-button size="sm">按钮</v-button>
      <v-button size="md" class="ml-3">按钮</v-button>
      <v-button size="lg" class="ml-3">按钮</v-button>
   </div>
</div>

<div class="my-3">
   <div class='flex'>
      <v-button type="primary" size="sm">按钮</v-button>
      <v-button type="primary" size="md" class="ml-3">按钮</v-button>
      <v-button type="primary" size="lg" class="ml-3">按钮</v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 按钮尺寸
 * @desc 按钮有大、中、小三种尺寸、按钮的高度一般为 24、32、40， 默认尺寸为中
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {

}
</script>
