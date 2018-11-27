<template>
<div>
   <div class="my-3">
      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" :locale="locale" title="Are you sure delete this task?" >
         <a class="text-primary">编辑</a>
      </v-popconfirm>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义文字内容
 * @desc 提供locale替换文字。
 */
@Component({
  components: {
  },
  })
export default class TextExample extends Vue {
   locale: Record<string, string> = {
      ok: '保存',
      cancel: '撤销'
   }

   onConfirm () {
     this.$message.info('confirm')
   }

   onCancel () {
     this.$message.error('cancel')
   }
}
</script>
