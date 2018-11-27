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
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 指令方式
 * @desc 见v-loading， 一般使用指令方式更加方便。
 */
@Component({
  components: {
  },
  })
export default class DirectiveExample extends Vue {
  spin1: boolean = true
}
</script>

<style lang="scss" module>
  .box{
    height: 120px;
    width: 160px;
  }
</style>
