<template>
<div>
   <div class="m-3">
     <v-badge :value="10">
        <v-avatar type="icon" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     </v-badge>

     <v-badge dot class="ml-3">
        <v-avatar type="icon" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     </v-badge>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 带徽标的头像
 * @desc 通常用于消息提示。
 */
@Component({
  components: {
  },
  })
export default class BadgeExample extends Vue {

}
</script>
