<template>
<div>
   <div class="d-flex">
    <div class="m-3">
      <v-dropdown trigger="click">
        <span>下拉菜单</span>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item>1st menu item</v-dropdown-item>
          <v-dropdown-item>2st menu item</v-dropdown-item>
          <v-dropdown-item>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </div>

    <div class="m-3">
      <v-dropdown trigger="click">
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
 * @title 触发方式
 * @desc 默认是移入触发菜单，可以点击触发。
 */
@Component({
  components: {
  },
  })
export default class TriggerExample extends Vue {
}
</script>
