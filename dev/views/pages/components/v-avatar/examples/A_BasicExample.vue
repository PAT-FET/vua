<template>
<div>
   <div class="m-3">
     <v-avatar type="icon" size="4rem"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" size="lg" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" size="md" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" size="sm" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
   </div>

   <div class="m-3">
     <v-avatar type="icon" shape="circle" size="4rem"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" shape="circle" size="lg" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" shape="circle" size="md" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar type="icon" shape="circle" size="sm" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 头像有三种尺寸，两种形状可选。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
