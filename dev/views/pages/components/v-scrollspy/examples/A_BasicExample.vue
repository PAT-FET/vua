<template>
<div>
  <div class="m-3">
    <v-row :gutter="24">
      <v-col :span="18">
        <div id="container" style="height: 240px; overflow: auto;">
          <div class="display-4" id="d-1">一级标题 一</div>
          <div>
            <div class="title" id="d-1-1">二级标题 一</div>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
          </div>

          <div class="display-4" id="d-2">一级标题 二</div>
          <div>
            <div class="title" id="d-2-2">二级标题 二</div>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
          </div>

          <div class="display-4" id="d-3">一级标题 三</div>
          <div>
            <div class="title" id="d-3-3">二级标题 三</div>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
          </div>
          <div>
            <div class="title" id="d-3-4">二级标题 四</div>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
            <p>some context some context some context</p>
          </div>
          <div style="height: 240px;"></div>
        </div>
      </v-col>
      <v-col :span="6">
        <v-scrollspy target="#container">
          <v-scrollspy-item href="#d-1" title="一级标题 一">
            <v-scrollspy-item href="#d-1-1" title="二级标题 一" class="ml-2"></v-scrollspy-item>
          </v-scrollspy-item>
          <v-scrollspy-item href="#d-2" title="一级标题 二">
            <v-scrollspy-item href="#d-2-2" title="二级标题 二" class="ml-2"></v-scrollspy-item>
          </v-scrollspy-item>
          <v-scrollspy-item href="#d-3" title="一级标题 三">
            <v-scrollspy-item href="#d-3-3" title="二级标题 三" class="ml-2"></v-scrollspy-item>
            <v-scrollspy-item href="#d-3-4" title="二级标题 四" class="ml-2"></v-scrollspy-item>
          </v-scrollspy-item>
        </v-scrollspy>
      </v-col>
    </v-row>
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
