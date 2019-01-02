<template>
<div>
  <div class="m-3">
      <v-radio-group v-model="size">
        <v-radio-button label="lg">大</v-radio-button>
        <v-radio-button label="md">中</v-radio-button>
        <v-radio-button label="sm">小</v-radio-button>
      </v-radio-group>
  </div>
   <div class="m-3">
     <v-input-number :size="size" v-model="value" :max="20" :min="0" :step="0.5" :precision="2"></v-input-number>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  其他
 * @desc 精度、步距以及最大最小值控制。
 */
@Component({
  components: {
  },
  })
export default class OtherExample extends Vue {
  size: string = "md"

  value: number = 0.5
}
</script>
