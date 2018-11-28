<template>
<div>
   <div class="m-3">
     <v-alert type="success" description="success message"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="info" description="info message"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="warning" description="warning message"></v-alert>
   </div>

    <div class="m-3">
     <v-alert type="error" description="error message"></v-alert>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   四种样式
 * @desc 共有四种样式 success、info、warning、error。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {

}
</script>
