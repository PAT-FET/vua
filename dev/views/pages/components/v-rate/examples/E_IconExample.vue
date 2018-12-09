<template>
<div>
   <div class="m-3">
     <v-rate v-model="value" icon="smile" allow-half clearable></v-rate>
   </div>
   <div class="m-3">
     <v-rate v-model="value1" char="A" allow-half clearable></v-rate>
   </div>
    <div class="m-3">
     <v-rate v-model="value2" char="0" allow-half clearable></v-rate>
   </div>
    <div class="m-3">
     <v-rate v-model="value3" char="好" allow-half clearable></v-rate>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  其他字符
 * @desc 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 */
@Component({
  components: {
  },
  })
export default class IconExample extends Vue {
  value: number = 3.5

  value1: number = 3.5

  value2: number = 3.5

  value3: number = 3.5
}
</script>
