<template>
<div>
  <div class="my-3">
    <div class="d-flex justify-content-between">
     <div class="m-auto">
        <div class="my-2 text-center">hover 触发</div>
        <v-carousel trigger="hover" class="w-20">
          <v-carousel-item class="bg-primary"><h1 class="text-center mt-4">1</h1></v-carousel-item>
          <v-carousel-item class="bg-info"><h1 class="text-center mt-4">2</h1></v-carousel-item>
          <v-carousel-item class="bg-error"><h1 class="text-center mt-4">3</h1></v-carousel-item>
        </v-carousel>
     </div>

     <div class="m-auto">
       <div class="my-2 text-center">click 触发</div>
       <v-carousel class="w-20">
        <v-carousel-item class="bg-primary"><h1 class="text-center mt-4">1</h1></v-carousel-item>
        <v-carousel-item class="bg-info"><h1 class="text-center mt-4">2</h1></v-carousel-item>
        <v-carousel-item class="bg-error"><h1 class="text-center mt-4">3</h1></v-carousel-item>
      </v-carousel>
     </div>

    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 基本示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
