<template>
<div class="my-3">
  <div class="d-inline-block mx-3">
     <v-button :loading="loading">Normal</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="primary" :loading="loading">Primary</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="secondary" :loading="loading">Secondary</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="success" :loading="loading">Success</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="info" :loading="loading">Info</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="warning" :loading="loading">Warning</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="error" :loading="loading">Error</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="error" shape="circle" :loading="loading"> <i class="anticon anticon-user"></i></v-button>
  </div>

  <div class="my-3">
    <label> <input type="checkbox" v-model="loading"> Toggle </label>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   加载状态
 * @desc 加载状态下会存在一个loading遮罩，切不可点击
 */
@Component({
  components: {
  },
  })
export default class LoadingExample extends Vue {
  loading: boolean = true
}
</script>
