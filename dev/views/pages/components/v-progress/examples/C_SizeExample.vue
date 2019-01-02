<template>
<div>
  <div class="my-3">
    <v-radio-group v-model="size">
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>

     <v-radio-group v-model="type" class="ml-3">
      <v-radio-button label="line">标准</v-radio-button>
      <v-radio-button label="circle">圆形</v-radio-button>
    </v-radio-group>
  </div>

   <div class="m-5">
     <v-progress :percent="30" :type="type" v-bind="sizeProp" class="m-3"></v-progress>
     <v-progress :percent="70" :type="type" v-bind="sizeProp" status="active" class="m-3"></v-progress>
     <v-progress :percent="75" :type="type" v-bind="sizeProp" status="exception" class="m-3"></v-progress>
     <v-progress :percent="100" :type="type" v-bind="sizeProp" class="m-3"></v-progress>
     <v-progress :percent="100" :type="type" v-bind="sizeProp" class="m-3">Done</v-progress>
     <v-progress :percent="100" :type="type" v-bind="sizeProp" class="m-3" :show-info="false"></v-progress>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  尺寸
 * @desc 自定义大小。
 */
@Component({
  components: {
  },
  })
export default class SizeExample extends Vue {
  type: string = 'line'

  size: string = 'md'

  get sizeProp () {
    return {
      width: this.size === 'md' ? 120 : 80,
      strokeWidth: this.size === 'md' ? 8 : 4
    }
  }
}
</script>
