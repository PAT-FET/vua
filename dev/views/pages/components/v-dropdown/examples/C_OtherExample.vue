<template>
<div>
   <div class="m-3">
      <v-dropdown trigger="click">
        <span>下拉菜单</span>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item>1st menu item</v-dropdown-item>
          <v-dropdown-item>2st menu item</v-dropdown-item>
          <v-dropdown-item divider></v-dropdown-item>
          <v-dropdown-item disabled>3rd menu item</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 其他元素
 * @desc 分割线和不可用菜单项。
 */
@Component({
  components: {
  },
  })
export default class OtherExample extends Vue {
}
</script>
