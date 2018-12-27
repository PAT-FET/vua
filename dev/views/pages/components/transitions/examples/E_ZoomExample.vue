<template>
<div>
   <div class="m-3 h-8 d-flex">
     <v-zoom-transition>
        <div class="bg-primary w-8 h-6" v-show="visible"></div>
      </v-zoom-transition>

      <v-zoom-big-transition>
        <div class="bg-primary w-8 h-6 ml-3" v-show="visible"></div>
      </v-zoom-big-transition>

      <v-zoom-down-transition>
          <div class="bg-primary w-8 h-6 ml-3" v-show="visible"></div>
      </v-zoom-down-transition>

      <v-zoom-up-transition>
          <div class="bg-primary w-8 h-6 ml-3" v-show="visible"></div>
      </v-zoom-up-transition>

      <v-zoom-left-transition>
          <div class="bg-primary w-8 h-6 ml-3" v-show="visible"></div>
      </v-zoom-left-transition>

      <v-zoom-right-transition>
          <div class="bg-primary w-8 h-6 ml-3" v-show="visible"></div>
      </v-zoom-right-transition>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title Zoom
 * @desc  Zoom效果。
 */
@Component({
  components: {
  },
  })
export default class ZoomExample extends Vue {
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
