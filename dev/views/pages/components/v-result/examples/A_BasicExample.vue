<template>
<div>

  <v-result type="success" title="Successfully Purchased Cloud Server ECS!"
    subtitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.">
    <div slot="extra">
      <v-button type="primary">Go Console</v-button>
      <v-button class="ml-2">Buy Again</v-button>
    </div>
  </v-result>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 基本用法
 * @desc 最基本的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
