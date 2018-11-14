<template>
<div class="d-flex justify-content-between">
   <div>
     <div class="m-3">
       <v-button shape="round" size="sm">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="sm" disabled>Disabled</v-button>
     </div>
   </div>

   <div>
     <div class="m-3">
       <v-button shape="round">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" disabled>Disabled</v-button>
     </div>
   </div>

    <div>
     <div class="m-3">
       <v-button shape="round" size="lg">Normal</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="primary">Primary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="secondary">Secondary</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="success">Success</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="info">Info</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="warning">Warning</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" color="error">Error</v-button>
     </div>
    <div class="m-3">
       <v-button shape="round" size="lg" disabled>Disabled</v-button>
     </div>
   </div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 圆角
 * @desc 圆角按钮的行为与常规按钮相同，但具有圆角边缘
 */
@Component({
  components: {
  },
  })
export default class RoundExample extends Vue {

}
</script>
