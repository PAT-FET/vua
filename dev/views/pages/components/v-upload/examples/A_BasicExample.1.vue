<template>
<div>
  <div class="m-3">
    <v-radio-group v-model="listType">
      <v-radio-button label="text">text</v-radio-button>
      <v-radio-button label="picture">picture</v-radio-button>
      <v-radio-button label="picture-card">picture-card</v-radio-button>
    </v-radio-group>
  </div>
  <div class="m-3">
     <v-upload :list-type="listType">
       <v-button type="outline">点击上传</v-button>
     </v-upload>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基础抽屉
 * @desc 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  listType: string = 'text'
}
</script>
