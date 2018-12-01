<template>
<div>
   <div class="my-3">
     <v-input prefix="search" placeholder="请输入内容" v-model="value" clearable></v-input>
   </div>

   <div class="my-3">
     <v-input suffix="calendar" placeholder="请输入内容" v-model="value1" clearable></v-input>
   </div>

   <div class="my-3">
     <v-input disabled prefix="search" suffix="calendar" placeholder="请输入内容" v-model="value2" clearable></v-input>
   </div>

   <div class="my-3">
     <v-row :gutter="16">
       <v-col :span="8">
         <v-input block prefix="search" size="sm" suffix="calendar" placeholder="请输入内容" v-model="value3" clearable></v-input>
       </v-col>
       <v-col :span="8">
         <v-input block prefix="search" suffix="calendar" placeholder="请输入内容" v-model="value4" clearable></v-input>
       </v-col>
       <v-col :span="8">
          <v-input block prefix="search" size="lg" suffix="calendar" placeholder="请输入内容" v-model="value5" clearable></v-input>
       </v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   带 icon 的输入框
 * @desc 带有图标标记输入类型。
 */
@Component({
  components: {
  },
  })
export default class IconExample extends Vue {
  value: string = ''

  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''

  value5: string = ''
}
</script>
