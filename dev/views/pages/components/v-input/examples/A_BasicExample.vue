<template>
<div>
   <div class="m-4">
     <v-input placeholder="请输入内容" v-model="value"></v-input>
   </div>

   <div class="m-4">
     <v-input disabled placeholder="请输入内容" v-model="value4"></v-input>
   </div>

    <div class="m-4">
      <p>v-model.trim</p>
      <v-alert :description="value1.length + ''" class="my-2"></v-alert>
      <v-input placeholder="请输入内容" v-model.trim="value1"></v-input>
   </div>

    <div class="m-4">
      <p>v-model.number</p>
      <v-alert :description="value2" class="my-2"></v-alert>
      <v-input placeholder="请输入内容" v-model.number="value2"></v-input>
   </div>

    <div class="m-4">
      <p>v-model.lazy 不起作用</p>
      <v-alert :description="value3" class="my-2"></v-alert>
      <v-input placeholder="请输入内容" v-model.lazy="value3"></v-input>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 基本使用。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value: string = ''

  value1: string = ''

  value2: number| string = ''

  value3: string = ''

  value4: string = ''
}
</script>
