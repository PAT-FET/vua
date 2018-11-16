<template>
<div class="d-flex justify-content-between">
   <div>
     <div class="m-3">
       <v-button type="depressed" size="sm">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="sm" disabled>Disabled</v-button>
     </div>
   </div>

   <div>
     <div class="m-3">
       <v-button type="depressed">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" disabled>Disabled</v-button>
     </div>
   </div>

    <div>
     <div class="m-3">
       <v-button type="depressed" size="lg">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button type="depressed" size="lg" disabled>Disabled</v-button>
     </div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   凹陷
 * @desc 凹陷的按钮依然保持其背景色，但没有框阴影
 */
@Component({
  components: {
  },
  })
export default class DepressedExample extends Vue {

}
</script>
