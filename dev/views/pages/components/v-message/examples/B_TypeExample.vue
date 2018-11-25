<template>
<div>
   <div class="my-3">
      <v-button @click="success" color="primary">success</v-button> &nbsp;
      <v-button @click="info" color="info">info</v-button> &nbsp;
      <v-button @click="warning" color="warning">warning</v-button> &nbsp;
      <v-button @click="error" color="error">error</v-button> &nbsp;
      <v-button @click="loading">loading</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  类型
 * @desc 提供五中内置类型，每种类型有特定的图标与颜色。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {
  info () {
    this.$message.info('this is a message of info')
  }

  success () {
    this.$message.success('this is a message of success')
  }

  warning () {
    this.$message.warning('this is a message of warning')
  }

  error () {
    this.$message.error('this is a message of error')
  }

  loading () {
    this.$message.loading('this is a message of loading')
  }
}
</script>
