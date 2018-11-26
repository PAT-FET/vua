<template>
<div>
   <div class="my-3">
     <v-button @click="open">打开</v-button>  &nbsp;
     <v-button color="error" @click="update">更新</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  更新消息内容
 * @desc 可以通过唯一的 key 来更新内容。
 */
@Component({
  components: {
  },
  })
export default class UpdateExample extends Vue {
  open () {
    this.$notification.open({
      key: 'test001',
      title: 'Loading',
      message: 'loading in action....'
    })
  }

  update () {
    this.$notification.open({
      key: 'test001',
      title: 'Loading',
      message: 'loading completed....'
    })
  }
}
</script>
