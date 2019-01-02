<template>
<div>
  <div class="my-3">
     <v-radio-group v-model="type" class="ml-3">
      <v-radio-button label="line">标准</v-radio-button>
      <v-radio-button label="circle">圆形</v-radio-button>
    </v-radio-group>
  </div>

   <div class="m-5">
     <v-progress :percent="percent" :type="type" class="m-3"></v-progress>

     <div class="m-3">
       <v-button-group>
        <v-button type="outline" color="primary" @click="subtract">-</v-button>
        <v-button type="outline" color="primary" @click="add">+</v-button>
      </v-button-group>
     </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  动态展示
 * @desc 会动的进度条才是好进度条。
 */
@Component({
  components: {
  },
  })
export default class DynamicExample extends Vue {
  type: string = 'line'

  percent: number = 30

  subtract () {
    this.percent = (this.percent - 10) < 0 ? 0 : (this.percent - 10)
  }

  add () {
    this.percent = (this.percent + 10) > 100 ? 100 : (this.percent + 10)
  }
}
</script>
