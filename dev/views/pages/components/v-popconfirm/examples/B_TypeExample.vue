<template>
<div>
   <div class="my-3">
      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" title="Are you sure delete this task?" >
         <a class="text-primary">Primary</a>
      </v-popconfirm>

      &nbsp;

      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" type="success" title="Are you sure delete this task?" >
         <a class="text-success">Success</a>
      </v-popconfirm>

      &nbsp;

      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" type="info" title="Are you sure delete this task?" >
         <a class="text-info">Info</a>
      </v-popconfirm>

      &nbsp;

      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" type="warning" title="Are you sure delete this task?" >
         <a class="text-warning">Warning</a>
      </v-popconfirm>

      &nbsp;

      <v-popconfirm :cancel-fn="onCancel" :confirm-fn="onConfirm" type="error" title="Are you sure delete this task?" >
         <a class="text-error">Error</a>
      </v-popconfirm>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  类型
 * @desc 提供五中内置类型，每种类型有特定的图标与颜色， 也可以使用icon属性自定义图标。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {
  onConfirm () {
    this.$message.info('confirm')
  }

  onCancel () {
    this.$message.error('cancel')
  }
}
</script>
