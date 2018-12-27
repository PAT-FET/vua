<template>
<div>
   <div class="m-3 h-8">
        <v-fade-transition>
            <div class="bg-primary w-8 h-6" v-show="fadeVisible"></div>
        </v-fade-transition>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 渐入渐出
 * @desc  渐入渐出效果。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  fadeVisible: boolean = true

  mounted () {
    let timer = setInterval(() => {
      this.fadeVisible = !this.fadeVisible
    }, 3000)
    this.$once('hook:beforeDestroy', function () {
      clearInterval(timer)
    })
  }
}
</script>
