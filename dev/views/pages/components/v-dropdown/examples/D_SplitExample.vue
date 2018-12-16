<template>
<div>
   <div class="m-3">
      <v-dropdown trigger="click">
         <v-button-group>
            <v-button color="primary" type="outline">Submit</v-button>
            <v-button color="primary" type="outline" x-reference slim><i class="anticon anticon-down"></i></v-button>
         </v-button-group>
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
 * @title 带下拉框的按钮
 * @desc 左边是按钮，右边是额外的相关功能菜单, 使用按钮组实现, 触发元素添加 x-reference 属性。
 */
@Component({
  components: {
  },
  })
export default class SplitExample extends Vue {
}
</script>
