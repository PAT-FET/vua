<template>
<div>
   <div class="m-3 h-8">
        <v-swing-transition>
            <div class="bg-primary w-8 h-6" v-show="visible"></div>
        </v-swing-transition>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 晃动效果
 * @desc  晃动效果 swing。
 */
@Component({
  components: {
  },
  })
export default class SwingExample extends Vue {
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
