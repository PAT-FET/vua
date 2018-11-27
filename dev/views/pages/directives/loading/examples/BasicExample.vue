<template>
<div>
   <div class="m-3 d-inline-block">
     <div class="bg-info m-2" :class="[$style.box]" v-loading="spin1">
     </div>
     <p><label> <input type="checkbox" v-model="spin1"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @title 基本示例
 * @desc 基本示例
 */
@Component({
  components: {
  },
  })
export default class ListExample extends Vue {
    spin1: boolean = true
}
</script>

<style lang="scss" module>
.box{
    height: 120px;
    width: 160px;
}
</style>
