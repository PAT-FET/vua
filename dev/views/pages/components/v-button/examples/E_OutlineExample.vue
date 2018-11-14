<template>
<div class="d-flex justify-content-between">
   <div>
     <div class="m-3">
       <v-button type="outline" size="sm">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="sm" disabled>Disabled</v-button>
     </div>
   </div>

   <div>
     <div class="m-3">
       <v-button type="outline">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" disabled>Disabled</v-button>
     </div>
   </div>

    <div>
     <div class="m-3">
       <v-button type="outline" size="lg">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="outline" size="lg" disabled>Disabled</v-button>
     </div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 轮廓
 * @desc 轮廓按钮从当前色彩应用继承他们的边框颜色
 */
@Component({
  components: {
  },
  })
export default class OutlineExample extends Vue {

}
</script>
