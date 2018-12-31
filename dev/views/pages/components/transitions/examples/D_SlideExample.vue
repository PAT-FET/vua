<template>
<div>
   <div class="m-3 h-8 d-flex">
      <v-slide-down-transition>
          <div class="bg-primary w-8 h-6" v-show="visible"></div>
      </v-slide-down-transition>

      <v-slide-up-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-slide-up-transition>

      <v-slide-left-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-slide-left-transition>

      <v-slide-right-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-slide-right-transition>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 滑入滑出
 * @desc  滑入滑出效果。
 */
@Component({
  components: {
  },
  })
export default class SlideExample extends Vue {
  visible: boolean = true

  mounted () {
    let timer = setInterval(() => {
      this.visible = !this.visible
    }, 3000)
    this.$once('hook:beforeDestroy', function () {
      clearInterval(timer)
    })
  }
}
</script>
