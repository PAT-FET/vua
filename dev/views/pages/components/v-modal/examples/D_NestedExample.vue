<template>
<div>
   <div class="m-3">
     <v-modal :visible.sync="visible3" title="Parallel Modal">
          <p>some content</p>
          <p>some content</p>
          <p>some content</p>
          <div slot="footer" class="text-right">
            <v-button class="mr-2" @click="visible3 = false">取消</v-button>
            <v-button color="primary" @click="visible3 = false">确认</v-button>
          </div>
      </v-modal>

     <v-modal :visible.sync="visible1" title="Outter Modal">
       <p>some content</p>
       <p>some content</p>
       <p>some content</p>
       <v-modal :visible.sync="visible2" title="Inner Modal">
          <p>some content</p>
          <p>some content</p>
          <p>some content</p>
          <div slot="footer" class="text-right">
            <v-button class="mr-2" @click="visible2 = false">取消</v-button>
            <v-button color="primary" @click="visible2 = false">确认</v-button>
          </div>
      </v-modal>
       <v-button @click="visible2 = true" class="mr-2">Open inner modal</v-button>
       <v-button @click="visible3 = true">Open parallel modal</v-button>
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
 * @title   嵌套
 * @desc 模态框中嵌套模态框。
 */
@Component({
  components: {
  },
  })
export default class NestedExample extends Vue {
  visible1: boolean = false

  visible2: boolean = false

  visible3: boolean = false
}
</script>
