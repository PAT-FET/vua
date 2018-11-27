<template>
<div>
   <div class="my-3">
      <v-button @click="success" color="primary">success</v-button> &nbsp;
      <v-button @click="info" color="info">info</v-button> &nbsp;
      <v-button @click="warning" color="warning">warning</v-button> &nbsp;
      <v-button @click="error" color="error">error</v-button> &nbsp;
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  类型
 * @desc 提供4种内置类型，每种类型有特定的图标与颜色。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {
  info () {
    this.$notification.info('Info Title', 'this is a info notification.')
  }

  success () {
    this.$notification.success('Success Title', 'this is a success notification.')
  }

  warning () {
    this.$notification.warning('Warning Title', 'this is a warning notification.')
  }
  error () {
    this.$notification.error('Error Title', 'this is a error notification.')
  }
}
</script>
