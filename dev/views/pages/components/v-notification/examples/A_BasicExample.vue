<template>
<div>
   <div class="my-3">
    <v-button @click="open">open notification box</v-button> &nbsp;
    <v-button @click="open('top-left')">open notification box on topLeft</v-button> <br><br>
    <v-button @click="open('bottom-right')">open notification box bottomRight</v-button> &nbsp;
    <v-button @click="open('bottom-left')">open notification box bottomLeft</v-button>
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
  open (placement?: any) {
    this.$notification.open({
      placement: placement,
      title: 'Notification Title',
      message: 'I will never close automatically. I will be close automatically. I will never close automatically.'
    })
  }
}
</script>
