<template>
<div>
  <div class="my-3">
    <div class="text-center my-2">
      <v-radio-group v-model="value">
        <v-radio-button label="bottom">bottom</v-radio-button>
        <v-radio-button label="top">top</v-radio-button>
        <v-radio-button label="left">left</v-radio-button>
        <v-radio-button label="right">right</v-radio-button>
      </v-radio-group>

      <v-checkbox v-model="autoplay" class="ml-3">自动播放</v-checkbox>
    </div>
    <v-carousel :direction="value" :autoplay="autoplay" class="w-20 m-auto">
      <v-carousel-item class="bg-primary"><h1 class="text-center mt-5">1</h1></v-carousel-item>
      <v-carousel-item class="bg-info"><h1 class="text-center mt-5">2</h1></v-carousel-item>
      <v-carousel-item class="bg-error"><h1 class="text-center mt-5">3</h1></v-carousel-item>
    </v-carousel>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  方向
 * @desc 位置有 4 个方向。
 */
@Component({
  components: {
  },
  })
export default class DirectionExample extends Vue {
  value: string = 'bottom'

  autoplay: boolean = true
}
</script>
