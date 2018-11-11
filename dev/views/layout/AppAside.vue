<template>
<div :class="$style.container" class="border-right">
    <nav-menu :data="pages"></nav-menu>
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
    width: 240px;
    height: 100vh;
    overflow: auto;
}
</style>
