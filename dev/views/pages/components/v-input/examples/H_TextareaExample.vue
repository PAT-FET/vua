<template>
<div>
   <div class="m-4">
     <v-textarea placeholder="请输入内容" v-model="value1" style="width: 320px;"></v-textarea>
   </div>

   <div class="m-4">
     <p>禁用</p>
     <v-textarea placeholder="请输入内容" v-model="value2" style="width: 320px;" disabled></v-textarea>
   </div>

   <div class="m-4">
     <p>可清除</p>
     <v-textarea suffix="edit" placeholder="请输入内容" v-model="value3" style="width: 320px;" clearable></v-textarea>
   </div>

    <div class="m-4">
     <p>自动高度</p>
     <v-textarea autosize placeholder="请输入内容" v-model="value4" style="width: 320px;" clearable></v-textarea>
   </div>

   <div class="m-4">
     <p>自动高度, 指定最大最小行(3/5)</p>
     <v-textarea :autosize="autosize" placeholder="请输入内容" v-model="value5" style="width: 320px;" clearable></v-textarea>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   文本域
 * @desc 用于多行输入。
 */
@Component({
  components: {
  },
  })
export default class TextareaExample extends Vue {
  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''

  value5: string = ''

  autosize = {
    maxRows: 5,
    minRows: 3
  }
}
</script>
