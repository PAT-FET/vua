<template>
<div>
   <div class="m-3">
     <v-badge :value="10">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>

     <v-badge :value="100" :max="99" class="ml-5">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>

     <v-badge value="new" class="ml-5">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>

     <v-badge dot class="ml-5">
       <div class="bg-2 w-2 h-2"></div>
     </v-badge>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
