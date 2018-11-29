<template>
<div>
   <div class="m-3">
     <v-button color="success" class="mr-2" @click="success">Success</v-button>
     <v-button color="info" class="mr-2" @click="info">Info</v-button>
     <v-button color="warning" class="mr-2" @click="warning">Warning</v-button>
     <v-button color="error" class="mr-2" @click="error">Error</v-button>
     <v-button class="mr-2" @click="confirm">Confirm</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   服务方法
 * @desc 提供了五种服务方法用于简单的确认场景。
 */
@Component({
  components: {
  },
  })
export default class ServiceExample extends Vue {
  info () {
    this.$modal.info({
      title: 'Info',
      content: 'this is a info message, this is a info message, this is a info message, this is a info message '
    }).then(() => {
      this.$message.success('confirm')
    }).catch(() => {
      this.$message.error('cancel')
    })
  }

  success () {
    this.$modal.success({
      title: 'Success',
      content: 'this is a success message, this is a success message, this is a success message, this is a success message '
    }).then(() => {
      this.$message.success('confirm')
    }).catch(() => {
      this.$message.error('cancel')
    })
  }

  warning () {
    this.$modal.warning({
      title: 'Warning',
      content: 'this is a warning message, this is a warning message, this is a warning message, this is a warning message '
    }).then(() => {
      this.$message.success('confirm')
    }).catch(() => {
      this.$message.error('cancel')
    })
  }

  error () {
    this.$modal.error({
      title: 'Error',
      content: 'this is a error message, this is a error message, this is a error message, this is a error message '
    }).then(() => {
      this.$message.success('confirm')
    }).catch(() => {
      this.$message.error('cancel')
    })
  }

  confirm () {
    this.$modal.confirm({
      title: 'Confirm',
      content: 'this is a confirm message, this is a confirm message, this is a confirm message, this is a confirm message '
    }).then(() => {
      this.$message.success('confirm')
    }).catch(() => {
      this.$message.error('cancel')
    })
  }
}
</script>
