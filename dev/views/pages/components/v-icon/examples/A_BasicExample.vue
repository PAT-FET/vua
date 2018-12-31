<template>
<div>
   <div class="m-3">
     <p>基本</p>
     <v-icon type="home"></v-icon>
   </div>
   <div class="m-3">
     <p>旋转</p>
    <v-icon class="ml-3" type="loading" spin></v-icon>
   </div>
   <div class="m-3">
     <p>主题色</p>
     <v-icon class="ml-3" type="heart" color="primary"></v-icon>
     <v-icon class="ml-3" type="heart" color="success"></v-icon>
     <v-icon class="ml-3" type="heart" color="info"></v-icon>
     <v-icon class="ml-3" type="heart" color="warning"></v-icon>
     <v-icon class="ml-3" type="heart" color="error"></v-icon>
   </div>
    <div class="m-3">
     <p>内置色</p>
     <v-icon class="ml-3" type="heart" color="red"></v-icon>
     <v-icon class="ml-3" type="heart" color="volcano"></v-icon>
     <v-icon class="ml-3" type="heart" color="orange"></v-icon>
     <v-icon class="ml-3" type="heart" color="gold"></v-icon>
     <v-icon class="ml-3" type="heart" color="yellow"></v-icon>
     <v-icon class="ml-3" type="heart" color="lime"></v-icon>
     <v-icon class="ml-3" type="heart" color="green"></v-icon>
     <v-icon class="ml-3" type="heart" color="cyan"></v-icon>
     <v-icon class="ml-3" type="heart" color="blue"></v-icon>
     <v-icon class="ml-3" type="heart" color="geekblue"></v-icon>
     <v-icon class="ml-3" type="heart" color="purple"></v-icon>
     <v-icon class="ml-3" type="heart" color="magenta"></v-icon>
     <v-icon class="ml-3" type="heart" color="grey"></v-icon>
   </div>
   <div class="m-3">
     <p>自定义色</p>
     <v-icon class="ml-3" type="heart" color="#A27B4C"></v-icon>
   </div>

   <div class="m-3">
     <p>色阶</p>
     <v-icon class="ml-3" type="heart" color="error-lighten-5"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-lighten-4"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-lighten-3"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-lighten-2"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-lighten-1"></v-icon>
     <v-icon class="ml-3" type="heart" color="error"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-darken-1"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-darken-2"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-darken-3"></v-icon>
     <v-icon class="ml-3" type="heart" color="error-darken-4"></v-icon>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 基本用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
