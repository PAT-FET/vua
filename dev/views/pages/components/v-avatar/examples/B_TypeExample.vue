<template>
<div>
   <div class="my-3">
    <v-radio-group v-model="size" class="mx-2">
      <v-radio-button label="4rem">4rem</v-radio-button>
      <v-radio-button label="lg">大</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>
  </div>

   <div class="m-3">
     <v-avatar :size="size" type="icon"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar :size="size" type="char" class="ml-3">U</v-avatar>
     <v-avatar :size="size" type="char" class="ml-3">User</v-avatar>
     <v-avatar :size="size" type="char" class="ml-3">李</v-avatar>
     <v-avatar :size="size" type="char" class="ml-3">李狗蛋</v-avatar>
     <v-avatar :size="size" type="image" class="ml-3"><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></v-avatar>
     <v-avatar :size="size" type="icon" background-color="pink" color="#fff" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar :size="size" type="char" background-color="success" color="error" class="ml-3">U</v-avatar>
   </div>

   <div class="m-3">
     <v-avatar :size="size" type="icon" shape="circle"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar :size="size" type="char" shape="circle" class="ml-3">U</v-avatar>
     <v-avatar :size="size" type="char" shape="circle" class="ml-3">User</v-avatar>
     <v-avatar :size="size" type="char" shape="circle" class="ml-3">李</v-avatar>
     <v-avatar :size="size" type="char" shape="circle" class="ml-3">李狗蛋</v-avatar>
     <v-avatar :size="size" type="image" shape="circle" class="ml-3"><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></v-avatar>
     <v-avatar :size="size" type="icon" shape="circle" background-color="pink" color="#fff" class="ml-3"><v-icon type="user"></v-icon></v-avatar>
     <v-avatar :size="size" type="char" shape="circle" background-color="success" color="error" class="ml-3">U</v-avatar>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   类型
 * @desc 支持三种类型：图片、Icon 以及字符, Icon 和字符型可以自定义图标颜色及背景色。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {
  size: string = "md"
}
</script>
