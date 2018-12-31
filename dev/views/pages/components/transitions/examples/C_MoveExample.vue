<template>
<div>
   <div class="m-3 h-8 d-flex">
      <v-move-down-transition>
          <div class="bg-primary w-8 h-6" v-show="visible"></div>
      </v-move-down-transition>

      <v-move-up-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-move-up-transition>

      <v-move-left-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-move-left-transition>

      <v-move-right-transition>
          <div class="bg-primary w-8 h-6 ml-4" v-show="visible"></div>
      </v-move-right-transition>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 移入移出
 * @desc  移入移出效果。
 */
@Component({
  components: {
  },
  })
export default class MoveExample extends Vue {
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
