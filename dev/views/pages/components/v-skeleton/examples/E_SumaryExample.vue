<template>
<div>
   <div class="my-3">
     <span><v-switch v-model="loading"></v-switch> Loading</span>
     <span class="ml-3"><v-switch v-model="avatar"></v-switch> Avatar</span>
     <span class="ml-3"><v-switch v-model="active"></v-switch> Active</span>
   </div>
   <div class="my-3">
     <v-skeleton :loading="loading" :avatar="avatar" :active="active">
       <div>
          <h4>Ant Design, a design language</h4>
          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        </div>
     </v-skeleton>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 综合示例
 * @desc 综合示例。
 */
@Component({
  components: {
  },
  })
export default class SumaryExample extends Vue {
  loading: boolean = true

  avatar: boolean = false

  active: boolean = false
}
</script>
