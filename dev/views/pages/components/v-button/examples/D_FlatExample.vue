<template>
<div class="d-flex justify-content-between">
   <div>
     <div class="m-3">
       <v-button type="flat" size="sm">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="sm" disabled>Disabled</v-button>
     </div>
   </div>

   <div>
     <div class="m-3">
       <v-button type="flat">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" disabled>Disabled</v-button>
     </div>
   </div>

    <div>
     <div class="m-3">
       <v-button type="flat" size="lg">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="flat" size="lg" disabled>Disabled</v-button>
     </div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   扁平
 * @desc 扁平按钮没有阴影，也没有背景。只有鼠标悬浮时才显示按钮的容器
 */
@Component({
  components: {
  },
  })
export default class FlatExample extends Vue {

}
</script>
