<template>
<div>
   <div class="m-3">
     <v-rate v-model="value" allow-half></v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  半星
 * @desc 支持选中半星。
 */
@Component({
  components: {
  },
  })
export default class HalfStarExample extends Vue {
  value: number = 3.5
}
</script>
