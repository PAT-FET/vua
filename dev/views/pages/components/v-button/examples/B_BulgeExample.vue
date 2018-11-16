<template>
<div class="d-flex justify-content-between">
   <div>
     <div class="m-3">
       <v-button size="sm">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button size="sm" disabled>Disabled</v-button>
     </div>
   </div>

   <div>
     <div class="m-3">
       <v-button type="depressed">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button disabled>Disabled</v-button>
     </div>
   </div>

    <div>
     <div class="m-3">
       <v-button size="lg">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button size="lg" disabled>Disabled</v-button>
     </div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   凸起
 * @desc 凸起的按钮有一个会在在点击时加重的框阴影，这是默认的样式。
 */
@Component({
  components: {
  },
  })
export default class BulgeExample extends Vue {

}
</script>
