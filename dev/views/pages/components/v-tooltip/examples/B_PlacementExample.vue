<template>
<div>
   <div class="my-3">
      <div class="d-flex">
         <div class="m-4">
            <v-tooltip placement="top-start" content="tooltip text 提示文字">
               <v-button>上左</v-button>
            </v-tooltip>
         </div>
         <div class="m-4">
            <v-tooltip placement="top" content="tooltip text 提示文字">
               <v-button>上中</v-button>
            </v-tooltip>
         </div>
         <div class="m-4">
            <v-tooltip placement="top-end" content="tooltip text 提示文字">
               <v-button>上右</v-button>
            </v-tooltip>
         </div>
      </div>

      <div>
         <div class="d-flex">
            <div class="m-4">
               <v-tooltip placement="left-start" content="tooltip text 提示文字">
                  <v-button>左上</v-button>
               </v-tooltip>
            </div>
            <div class="m-4">
                <v-tooltip placement="left" content="tooltip text 提示文字">
                  <v-button>左中</v-button>
               </v-tooltip>
            </div>
            <div class="m-4">
               <v-tooltip placement="left-end" content="tooltip text 提示文字">
                  <v-button>左下</v-button>
               </v-tooltip>
            </div>
         </div>

         <div class="d-flex">
            <div class="m-4">
               <v-tooltip placement="right-start" content="tooltip text 提示文字">
                  <v-button>右上</v-button>
               </v-tooltip>
            </div>
            <div class="m-4">
               <v-tooltip placement="right" content="tooltip text 提示文字">
                  <v-button>右中</v-button>
               </v-tooltip>
            </div>
            <div class="m-4">
               <v-tooltip placement="right-end" content="tooltip text 提示文字">
                  <v-button>右下</v-button>
               </v-tooltip>
            </div>
         </div>
      </div>

      <div class="d-flex">
         <div class="m-4">
            <v-tooltip placement="bottom-start" content="tooltip text 提示文字">
               <v-button>下左</v-button>
            </v-tooltip>
         </div>
         <div class="m-4">
            <v-tooltip placement="bottom" content="tooltip text 提示文字">
               <v-button>下中</v-button>
            </v-tooltip>
         </div>
         <div class="m-4">
            <v-tooltip placement="bottom-end" content="tooltip text 提示文字">
               <v-button>下右</v-button>
            </v-tooltip>
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
