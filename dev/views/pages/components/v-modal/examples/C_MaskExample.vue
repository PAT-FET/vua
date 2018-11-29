<template>
<div>
   <div class="m-3">
     <v-modal :mask="false" :mask-closable="false" :keyboard="false" :visible.sync="visible1" title="Basic Modal">
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
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   遮罩
 * @desc 不显示遮罩以及关闭 maskClosable 和 keyboard。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  visible1: boolean = false
}
</script>
