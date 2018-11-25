<template>
<div>
   <div class="my-3">
      <div class="d-flex">
         <div class="m-4">
            <v-popover placement="top-start" title="Title">
               <v-button color="primary" slot="reference">上左</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
         <div class="m-4">
            <v-popover placement="top" title="Title">
               <v-button color="primary" slot="reference">上中</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
         <div class="m-4">
            <v-popover placement="top-end" title="Title">
               <v-button color="primary" slot="reference">上右</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
      </div>

      <div>
         <div class="d-flex">
            <div class="m-4">
               <v-popover placement="left-start" title="Title">
                  <v-button color="primary" slot="reference">左上</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
            <div class="m-4">
               <v-popover placement="left" title="Title">
                  <v-button color="primary" slot="reference">左中</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
            <div class="m-4">
               <v-popover placement="left-end" title="Title">
                  <v-button color="primary" slot="reference">左下</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
         </div>

         <div class="d-flex">
            <div class="m-4">
               <v-popover placement="right-start" title="Title">
                  <v-button color="primary" slot="reference">右上</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
            <div class="m-4">
               <v-popover placement="right" title="Title">
                  <v-button color="primary" slot="reference">右中</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
            <div class="m-4">
               <v-popover placement="right-end" title="Title">
                  <v-button color="primary" slot="reference">右下</v-button>
                  <div>
                     <p>content</p>
                     <p>content</p>
                  </div>
               </v-popover>
            </div>
         </div>
      </div>

      <div class="d-flex">
         <div class="m-4">
            <v-popover placement="bottom-start" title="Title">
               <v-button color="primary" slot="reference">下左</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
         <div class="m-4">
            <v-popover placement="bottom" title="Title">
               <v-button color="primary" slot="reference">下中</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
         <div class="m-4">
            <v-popover placement="bottom-end" title="Title">
               <v-button color="primary" slot="reference">下右</v-button>
               <div>
                  <p>content</p>
                  <p>content</p>
               </div>
            </v-popover>
         </div>
      </div>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义位置
 * @desc 支持12种位置选项， 可参考popper.js
 */
@Component({
  components: {
  },
  })
export default class PlacementExample extends Vue {
   collapse: boolean = false
}
</script>
