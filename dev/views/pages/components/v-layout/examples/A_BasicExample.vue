<template>
<div>
   <div class="m-4">
     <v-layout>
       <v-header class="bg-secondary"><div class="text-center">header</div></v-header>
       <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
       <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
     </v-layout>
   </div>

  <div class="m-4">
     <v-layout>
       <v-header class="bg-secondary"><div class="text-center">header</div></v-header>
       <v-layout>
           <v-sider><div class="text-center" style="width: 240px;">sider</div></v-sider>
           <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
       </v-layout>
       <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
     </v-layout>
   </div>

   <div class="m-4">
     <v-layout>
       <v-header class="bg-secondary"><div class="text-center">header</div></v-header>
       <v-layout>
           <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
           <v-sider><div class="text-center" style="width: 240px;">sider</div></v-sider>
       </v-layout>
       <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
     </v-layout>
   </div>

   <div class="m-4">
     <v-layout>
       <v-sider><div class="text-center" style="width: 240px;">sider</div></v-sider>
       <v-layout>
          <v-header class="bg-secondary"><div class="text-center">header</div></v-header>
          <v-content style="height: 180px;" class="bg-2"><div class="text-center">content</div></v-content>
          <v-footer class="bg-secondary"><div class="text-center">footer</div></v-footer>
       </v-layout>
     </v-layout>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   常见布局示例
 * @desc 常见布局示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  visible1: boolean = false
}
</script>
