<template>
<div>
  <div class="m-3">
    <v-card class="w-18" title="Card Title">
      <v-dropdown slot="extra">
        <span>...</span>
        <v-dropdown-menu slot="dropdown">
          <v-dropdown-item>操作一</v-dropdown-item>
          <v-dropdown-item>操作二</v-dropdown-item>
        </v-dropdown-menu>
      </v-dropdown>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <div slot="footer" class="d-flex justify-content-around">
        <v-button type="flat" shape="circle" icon="setting" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" icon="edit" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" color="error" icon="delete" ></v-button>
      </div>
    </v-card>
  </div>

   <div class="m-3">
    <v-card size="sm" class="w-18" title="Card Title">
      <a slot="extra"> more </a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <div slot="footer" class="d-flex justify-content-around">
        <v-button type="flat" shape="circle" icon="setting" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" icon="edit" ></v-button>
        <v-button class="ml-3" type="flat" shape="circle" color="error" icon="delete" ></v-button>
      </div>
    </v-card>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
