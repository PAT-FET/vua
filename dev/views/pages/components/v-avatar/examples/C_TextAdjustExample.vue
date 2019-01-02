<template>
<div>
   <div class="my-3">
    <v-radio-group v-model="size" class="mx-2">
      <v-radio-button label="4rem">4rem</v-radio-button>
      <v-radio-button label="lg">大</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>
  </div>

   <div class="m-3">
     <v-avatar :size="size" type="char" class="ml-3" :background-color="list[this.index].color">{{list[this.index].text}}</v-avatar>

     <v-button size="sm" class="ml-3" @click="change">更换</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自动调整字符大小
 * @desc 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
 */
@Component({
  components: {
  },
  })
export default class TextAdjustExample extends Vue {
  size: string = "md"

  index: number = 0

  list = [
    {
      color: 'orange',
      text: 'U'
    },
    {
      color: 'purple',
      text: 'Lucy'
    },
    {
      color: 'Tom',
      text: 'yellow'
    },
    {
      color: 'info',
      text: 'Spencer'
    },
    {
      color: 'error',
      text: '王二牛'
    }
  ]

  change () {
    let len = this.list.length
    if (this.index < len - 1) this.index++
    else this.index = 0
  }
}
</script>
