<template>
<div :class="$style.container">
    <nav-menu :data="pages" style="height: 100%; width: 256px;"></nav-menu>
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
    height: 100vh;
    overflow: auto;
}
</style>
