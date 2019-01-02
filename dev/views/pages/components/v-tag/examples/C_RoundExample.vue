<template>
<div>
   <div class="m-3">
     <v-tag shape="round" closable> Default </v-tag>
     <v-tag shape="round" color="primary" closable> Primary </v-tag>
     <v-tag shape="round" color="secondary" closable> Secondary </v-tag>
     <v-tag shape="round" color="success" closable> Success </v-tag>
     <v-tag shape="round" color="info" closable> Info </v-tag>
     <v-tag shape="round" color="warning" closable> Warning </v-tag>
     <v-tag shape="round" color="error" closable> Error </v-tag>
     <v-tag shape="round" color="purple" closable> Purple </v-tag>
     <v-tag shape="round" color="#87d068" closable> #87d068 </v-tag>
   </div>

   <div class="m-3">
     <v-tag shape="round" type="depressed" closable> Default </v-tag>
     <v-tag shape="round" color="primary" type="depressed" closable> Primary </v-tag>
     <v-tag shape="round" color="secondary" type="depressed" closable> Secondary </v-tag>
     <v-tag shape="round" color="success" type="depressed" closable> Success </v-tag>
     <v-tag shape="round" color="info" type="depressed" closable> Info </v-tag>
     <v-tag shape="round" color="warning" type="depressed" closable> Warning </v-tag>
     <v-tag shape="round" color="error" type="depressed" closable> Error </v-tag>
     <v-tag shape="round" color="purple" type="depressed" closable> Purple </v-tag>
     <v-tag shape="round" color="#87d068" type="depressed" closable> #87d068 </v-tag>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 圆角
 * @desc 圆角标签。
 */
@Component({
  components: {
  },
  })
export default class RoundExample extends Vue {

}
</script>
