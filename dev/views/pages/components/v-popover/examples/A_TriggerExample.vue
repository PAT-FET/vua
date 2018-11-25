<template>
<div>
   <div class="my-3">
       <v-popover title="Title">
         <v-button color="primary" slot="reference">hover me</v-button>
         <div>
            <p>content</p>
            <p>content</p>
         </div>
      </v-popover>
      &nbsp;
      <v-popover title="Title" trigger="focus">
         <v-button color="primary" slot="reference">focus me</v-button>
         <div>
            <p>content</p>
            <p>content</p>
         </div>
      </v-popover>
      &nbsp;
      <v-popover title="Title" trigger="click">
         <v-button color="primary" slot="reference">click me</v-button>
         <div>
            <p>content</p>
            <p>content</p>
         </div>
      </v-popover>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  触发方式
 * @desc 三种触发方式， 鼠标移入、聚焦、点击
 */
@Component({
  components: {
  },
  })
export default class TriggerExample extends Vue {
}
</script>
