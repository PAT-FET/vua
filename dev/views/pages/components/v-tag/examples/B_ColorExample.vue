<template>
<div>
   <div class="m-3">
     <v-tag color="primary" closable> Primary </v-tag>
     <v-tag color="secondary" closable> Secondary </v-tag>
     <v-tag color="success" closable> Success </v-tag>
     <v-tag color="info" closable> Info </v-tag>
     <v-tag color="warning" closable> Warning </v-tag>
     <v-tag color="error" closable> Error </v-tag>
     <v-tag color="purple" closable> Purple </v-tag>
     <v-tag color="#87d068" closable> #87d068 </v-tag>
   </div>

   <div class="m-3">
     <v-tag color="primary" type="depressed" closable> Primary </v-tag>
     <v-tag color="secondary" type="depressed" closable> Secondary </v-tag>
     <v-tag color="success" type="depressed" closable> Success </v-tag>
     <v-tag color="info" type="depressed" closable> Info </v-tag>
     <v-tag color="warning" type="depressed" closable> Warning </v-tag>
     <v-tag color="error" type="depressed" closable> Error </v-tag>
     <v-tag color="purple" type="depressed" closable> Purple </v-tag>
     <v-tag color="#87d068" type="depressed" closable> #87d068 </v-tag>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 多彩标签
 * @desc 自定义色彩。
 */
@Component({
  components: {
  },
  })
export default class ColorExample extends Vue {

}
</script>
