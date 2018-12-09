<template>
<div>
   <div class="m-3">
     <v-rate v-model="value">{{value}} 星</v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   文案展现
 * @desc 给评分组件加上文案展示。
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {
  value: number = 3
}
</script>
