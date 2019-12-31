<template>
<div>
  <div class="m-3">
    <v-dropdown trigger="contextMenu">
      <div class="h-4 w-12 bg-2"></div>
      <v-dropdown-menu slot="dropdown">
        <v-dropdown-item>1st menu item</v-dropdown-item>
        <v-dropdown-item>2st menu item</v-dropdown-item>
        <v-dropdown-item>3rd menu item</v-dropdown-item>
      </v-dropdown-menu>
    </v-dropdown>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  右键菜单
 * @desc 可以点击鼠标右键触发。
 */
@Component({
  components: {
  },
  })
export default class RightExample extends Vue {
}
</script>
