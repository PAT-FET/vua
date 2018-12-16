<template>
<div>
   <div class="d-flex">
    <div class="m-3">
      <v-dropdown>
        <span>下拉菜单</span>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item>1st menu item</v-dropdown-item>
          <v-dropdown-item>2st menu item</v-dropdown-item>
          <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </div>

    <div class="m-3">
      <v-dropdown>
        <v-button>下拉菜单</v-button>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item>1st menu item</v-dropdown-item>
          <v-dropdown-item>2st menu item</v-dropdown-item>
          <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
