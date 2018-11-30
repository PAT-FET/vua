<template>
<div>
   <div class="my-3">
     <v-row :gutter="16">
       <v-col :span="8">
         <v-input block size="lg" prepend="http://" append=".com" placeholder="请输入内容" v-model="value" clearable></v-input>
       </v-col>
       <v-col :span="8">
         <v-input block prepend="http://" append=".com" placeholder="请输入内容" v-model="value1" clearable></v-input>
       </v-col>
       <v-col :span="8">
         <v-input block size="sm" prepend="http://" append=".com" placeholder="请输入内容" v-model="value2" clearable></v-input>
       </v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   前置/后置标签
 * @desc 用于配置一些固定组合。
 */
@Component({
  components: {
  },
  })
export default class LabelExample extends Vue {
  value: string = ''

  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''

  value5: string = ''
}
</script>
