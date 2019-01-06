<template>
<div>
   <div class="my-3">
     <v-skeleton :loading="loading" :avatar="true">
       <div>
          <h4>Ant Design, a design language</h4>
          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        </div>
     </v-skeleton>
   </div>
  <div class="my-3">
     <v-button @click="load" color="primary" :loading="loading">加载</v-button>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 包含子组件
 * @desc 加载占位图包含子组件。
 */
@Component({
  components: {
  },
  })
export default class LoadingExample extends Vue {
  loading: boolean = false

  load () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
