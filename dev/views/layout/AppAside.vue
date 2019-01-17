<template>
<div :class="$style.container">
    <nav-menu :data="pages" style="min-height: 100%; width: 256px;"></nav-menu>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '../../utils/page-loader'

@Component({
  components: {
  },
  })
export default class AppAside extends Vue {
    pages!: any[]

    created () {
      this.pages = pages
    }
}
</script>

<style lang="scss" module>
.container{
    overflow: auto;

    &>*{
        font-family: Avenir,"Chinese Quote",-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important;
    }
}
</style>
