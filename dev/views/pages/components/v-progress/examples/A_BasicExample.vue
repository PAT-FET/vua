<template>
<div>
   <div class="m-5">
     <v-progress :percent="30"></v-progress>
     <v-progress :percent="70" status="active" class="mt-3"></v-progress>
     <v-progress :percent="75" status="exception" class="mt-3"></v-progress>
     <v-progress :percent="100" class="mt-3"></v-progress>
     <v-progress :percent="100" class="mt-3">Done</v-progress>
     <v-progress :percent="100" class="mt-3" :show-info="false"></v-progress>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  进度条
 * @desc 标准的进度条。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
