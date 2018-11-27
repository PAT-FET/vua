<template>
<div>
   <div class="my-3">
       <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" title="Are you sure delete this task?" >
         <a>删除</a>
      </v-popconfirm>

      &nbsp;

      <v-popconfirm disabled :cancel-fn="onCancel" :confirm-fn="onConfirm" title="Are you sure delete this task?" >
         <a>禁用</a>
      </v-popconfirm>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本使用
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  onConfirm () {
    this.$message.info('confirm')
  }

  onCancel () {
    this.$message.error('cancel')
  }
}
</script>
