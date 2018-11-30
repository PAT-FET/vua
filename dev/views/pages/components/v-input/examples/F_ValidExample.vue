<template>
<div>
   <div class="m-3">
     <v-input placeholder="请输入姓名" class="v-input--valid" v-model="value1"></v-input>
   </div>
   <div class="m-3">
     <v-input placeholder="请输入邮箱" class="v-input--invalid" v-model="value2"></v-input>
   </div>

   <div class="m-3">
     <v-textarea placeholder="请输入内容" class="v-textarea--valid" v-model="value3" style="width: 320px;"></v-textarea>
   </div>

   <div class="m-3">
     <v-textarea placeholder="请输入内容" class="v-textarea--invalid" v-model="value4" style="width: 320px;"></v-textarea>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   验证状态
 * @desc 配合表单实现验证状态。
 */
@Component({
  components: {
  },
  })
export default class ValidExample extends Vue {
  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''
}
</script>
