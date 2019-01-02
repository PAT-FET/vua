<template>
<div>
    <div class="m-3">
     <v-progress :percent="30" type="circle"></v-progress>
     <v-progress :percent="70" type="circle" status="active" class="ml-3"></v-progress>
     <v-progress :percent="75" type="circle" status="exception" class="ml-3"></v-progress>
     <v-progress :percent="100" type="circle" class="ml-3"></v-progress>
     <v-progress :percent="100" type="circle" class="ml-3">Done</v-progress>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  进度圈
 * @desc 圈形的进度。
 */
@Component({
  components: {
  },
  })
export default class CircleExample extends Vue {

}
</script>
