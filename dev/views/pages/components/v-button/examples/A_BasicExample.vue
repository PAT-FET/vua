<template>
<div>

   <div class="my-3">
     <p class="subheading">常规</p>
     <v-button>NORMAL</v-button>
   </div>

<div class="my-3">
  <p class="subheading">尺寸</p>
  <div class="d-inline-block mx-3">
     <v-button size="lg">Large</v-button>
  </div>
   <div class="d-inline-block mx-3">
     <v-button>Middle</v-button>
  </div>
   <div class="d-inline-block mx-3">
     <v-button size="sm">Small</v-button>
  </div>
</div>

<div class="my-3">
  <p class="subheading">颜色</p>
  <div class="d-inline-block mx-3">
     <v-button color="primary">Primary</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="secondary">Secondary</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="success">Success</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="info">Info</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="warning">Warning</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="error">Error</v-button>
  </div>
</div>

<div class="my-3">
  <p class="subheading">禁用</p>
  <div class="d-inline-block mx-3">
     <v-button disabled>Normal</v-button>
  </div>
  <div class="d-inline-block mx-3">
     <v-button color="primary" disabled>Primary</v-button>
  </div>
</div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用
 * @desc 有 lg、 md、 sm 三种尺寸以及 priamry、secondary、success、info、warning、error五种颜色
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
