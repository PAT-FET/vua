<template>
<div>
   <v-alert type="warning" class="my-3" show-icon
   description="不要在含有内外补的元素上应用，因为内外补没有过渡处理，会使过渡出现卡顿效果，应该用div包裹后再应用该过渡"></v-alert>
   <div class="m-3 h-14">
      <v-expand-transition>
        <div class="bg-primary w-8" v-show="visible">
                <div class="h-6"></div>
        </div>
        </v-expand-transition>
         <div class="bg-info w-8 h-6">
        </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title Expand
 * @desc  Expand效果。
 */
@Component({
  components: {
  },
  })
export default class ExpandExample extends Vue {
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
