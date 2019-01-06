<template>
<div>
  <div class="m-3">
    <div class="m-3">
      <v-radio-group v-model="size">
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
      </v-radio-group>
      <v-switch v-model="loading" class="ml-3"></v-switch> Loading
    </div>
    <v-card :size="size" class="w-18" footer-cls="bg-1">
      <div slot="footer" class="d-flex justify-content-around">
        <v-button type="flat" shape="circle" icon="setting" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" icon="edit" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" color="error" icon="delete" ></v-button>
      </div>
      <v-skeleton :loading="loading" active :avatar="true">
        <v-card-meta
          title="Top western road trips"
          description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ...">
            <v-avatar type="icon" shape="circle" slot="avatar"><v-icon type="user"></v-icon></v-avatar>
        </v-card-meta>
      </v-skeleton>
    </v-card>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 预加载的卡片
 * @desc 数据读入前会有文本块样式。
 */
@Component({
  components: {
  },
  })
export default class LoadingExample extends Vue {
  size: string = 'md'

  loading: boolean = false
}
</script>
