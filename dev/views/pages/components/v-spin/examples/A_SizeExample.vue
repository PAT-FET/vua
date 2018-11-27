<template>
<div>
   <div class="m-3 d-inline-block">
     <p class="text-center">小</p>
     <div class="bg-1 m-2" :class="[$style.box]">
       <v-spin size="sm" v-model="spin1"></v-spin>
     </div>
     <p class="text-center"><label> <input type="checkbox" v-model="spin1"> toggle</label></p>
   </div>

   <div class="m-3 d-inline-block">
     <p class="text-center">中</p>
     <div class="bg-1 m-2" :class="[$style.box]">
       <v-spin v-model="spin2"></v-spin>
     </div>
     <p class="text-center"><label> <input type="checkbox" v-model="spin2"> toggle</label></p>
   </div>

    <div class="m-3 d-inline-block">
      <p class="text-center">大</p>
     <div class="bg-1 m-2" :class="[$style.box]">
       <v-spin size="lg" v-model="spin3"></v-spin>
     </div>
     <p class="text-center"><label> <input type="checkbox" v-model="spin3"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   各种大小
 * @desc 小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  spin1: boolean = true

  spin2: boolean = true

  spin3: boolean = true
}
</script>

<style lang="scss" module>
  .box{
    height: 80px;
    width: 100px;
  }
</style>
