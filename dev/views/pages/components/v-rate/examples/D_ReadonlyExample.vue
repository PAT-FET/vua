<template>
<div>
   <div class="m-3">
     <v-rate v-model="value" readonly></v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  只读
 * @desc 只读，无法进行鼠标交互。
 */
@Component({
  components: {
  },
  })
export default class ReadonlyExample extends Vue {
  value: number = 3
}
</script>
