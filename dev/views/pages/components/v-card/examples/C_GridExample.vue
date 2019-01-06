Meta<template>
<div>
  <div class="m-3">
    <div class="m-3">
      <v-radio-group v-model="size">
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
      </v-radio-group>
    </div>
    <v-row :gutter="16">
      <v-col :span="8">
        <v-card :size="size" body-cls="bg-cyan">
            <v-card-meta colored
              title="Supermodel">
                <div slot="description">
                  <div>Foster the People</div>
                  <div>(2014)</div>
                </div>
                <v-avatar type="image" slot="avatar" size="5rem">
                  <img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" alt="&times;">
                </v-avatar>
            </v-card-meta>
        </v-card>
      </v-col>
      <v-col :span="8">
        <v-card :size="size" body-cls="bg-pink">
            <v-card-meta colored
              title="Halycon Days">
                <div slot="description">
                  <div>Ellie Goulding</div>
                  <div>(2013)</div>
                </div>
                <v-avatar type="image" slot="avatar" size="5rem">
                  <img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" alt="&times;">
                </v-avatar>
            </v-card-meta>
        </v-card>
      </v-col>
      <v-col :span="8">
        <v-card :size="size" body-cls="bg-volcano">
            <v-card-meta colored
              title="Start Over">
                <div slot="description">
                  <div>Imagine Dragons</div>
                  <div>(2014)</div>
                </div>
                <v-avatar type="image" slot="avatar" size="5rem">
                  <img src="https://cdn.vuetifyjs.com/images/cards/road.jpg" alt="&times;">
                </v-avatar>
            </v-card-meta>
        </v-card>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 栅格卡片
 * @desc 在系统概览页面常常和栅格进行配合。
 */
@Component({
  components: {
  },
  })
export default class GridExample extends Vue {
  size: string = 'md'
}
</script>
