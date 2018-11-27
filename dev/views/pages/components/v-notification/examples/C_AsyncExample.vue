<template>
<div>
   <div class="my-3">
     <v-button @click="loading">load</v-button>  &nbsp;
     <v-button color="error" @click="close">关闭</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  异步关闭
 * @desc 如果传入duration为0， 将不会自动关闭， 返回一个关闭函数， 自动关闭模式下将返回一个Promise。
 */
@Component({
  components: {
  },
  })
export default class AsyncExample extends Vue {
   closeFn: Function | null = null

   loading () {
     this.closeFn = this.$notification.open({
       title: 'Loading',
       message: 'loading in action....',
       duration: 0
     })
   }

   close () {
     if (this.closeFn) this.closeFn()
   }
}
</script>
