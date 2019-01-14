<template>
<div>
<div class="my-3">
   <div class='flex'>
      <v-button size="sm" type="text" icon="share-alt" class="px-1"></v-button>
      <v-button size="sm" type="primary" icon="share-alt" class="ml-3 px-1"></v-button>
      <v-button size="sm" icon="share-alt" class="ml-3 px-1"></v-button>
      <v-button size="md" icon="share-alt" class="ml-3 px-2"></v-button>
      <v-button size="lg" icon="share-alt" class="ml-3 ft-lg px-3"></v-button>
   </div>
</div>
<div class="my-3">
   <div class='flex'>
      <v-button size="sm" type="text" shape="circle" color="primary" icon="edit" class="px-1"></v-button>
      <v-button size="sm" shape="circle" icon="edit" class="ml-3"></v-button>
      <v-button size="sm" type="primary" shape="circle" icon="edit" class="ml-3"></v-button>
      <v-button size="md" type="primary" shape="circle" icon="edit" class="ml-3"></v-button>
      <v-button size="lg" type="primary" shape="circle" icon="edit" class="ml-3 ft-lg"></v-button>
   </div>
</div>
<div class="my-3">
   <div class='flex'>
      <v-button type="primary" icon="edit" class="px-2">编辑</v-button>
      <v-button type="primary" icon="delete" class="ml-3 px-2">删除</v-button>
      <v-button type="primary" class="ml-3 px-2">分享 <v-icon type="share-alt"></v-icon></v-button>
   </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  图标按钮
 * @desc 带图标的按钮， 可增强辨识度（有文字）或节省空间（无文字）。
 */
@Component({
  components: {
  }
})
export default class IconExample extends Vue {

}
</script>
