<template>
<div>
   <div class="m-3">
     <p>设置宽度 50vw， 高度 5vh</p>
     <v-modal width="50vw" top="5vh" :visible.sync="visible1" title="Basic Modal">
       <p>some content</p>
       <p>some content</p>
       <p>some content</p>
       <div slot="footer" class="text-right">
         <v-button class="mr-2" @click="visible1 = false">取消</v-button>
         <v-button color="primary" @click="visible1 = false">确认</v-button>
       </div>
     </v-modal>
     <v-button color="primary" @click="visible1 = true">Open Modal</v-button>
   </div>

   <div class="m-3">
     <p>始终垂直居中</p>
     <v-modal centered :visible.sync="visible2" title="Basic Modal">
       <p>some content</p>
       <p>some content</p>
       <p>some content</p>
       <div slot="footer" class="text-right">
         <v-button class="mr-2" @click="visible2 = false">取消</v-button>
         <v-button color="primary" @click="visible2 = false">确认</v-button>
       </div>
     </v-modal>
     <v-button color="primary" @click="visible2 = true">Open Modal（Center）</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 自定义位置
 * @desc 可以自定义宽度， 垂直位置。
 */
@Component({
  components: {
  },
  })
export default class PositionExample extends Vue {
  visible1: boolean = false

  visible2: boolean = false
}
</script>
