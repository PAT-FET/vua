Meta<template>
<div>
  <div class="m-3">
    <div class="m-3">
      <v-radio-group v-model="size">
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
      </v-radio-group>
    </div>
    <v-card :size="size" class="w-18">
      <img slot="cover" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"/>
      <div slot="footer" class="d-flex justify-content-around">
        <v-button type="flat" shape="circle" icon="setting" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" icon="edit" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" color="error" icon="delete" ></v-button>
      </div>
      <v-card-meta
        title="Top western road trips"
        description="Located two hours south of Sydney in the Southern Highlands of New South Wales, ...">
           <v-avatar type="icon" shape="circle" slot="avatar"><v-icon type="user"></v-icon></v-avatar>
        </v-card-meta>
    </v-card>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 更灵活的内容展示
 * @desc 可以利用 v-card-meta 支持更灵活的内容。
 */
@Component({
  components: {
  },
  })
export default class MetaExample extends Vue {
  size: string = 'md'
}
</script>
