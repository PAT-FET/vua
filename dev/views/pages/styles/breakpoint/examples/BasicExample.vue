<template>
<div>
    <div :class="[$style.box]">
        <p>view width: {{$vua.breakpoint.width}} </p>
        <p>breakpoint: {{$vua.breakpoint.name}}</p>
    </div>

    <div style="line-height: 80px; margin-top: 20px; color: #fff; text-align: center; font-size: 24px;" :style=[jsStyle]>
        In JS
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   js 与 scss
 * @desc 提供两种写法， 使用js或者使用scss的mixins
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  jsColor: string = ''

  @Watch('$vua.breakpoint.name') breakpointChange (name: string) {
    this.setJsColor(name)
  }

  setJsColor (name: string) {
    if (name === 'xl') this.jsColor = '#1890ff'
    if (name === 'lg') this.jsColor = '#722ed1'
    if (name === 'md') this.jsColor = '#13c2c2'
    if (name === 'sm') this.jsColor = '#52c41a'
    if (name === 'xs') this.jsColor = '#eb2f96'
  }

  mounted () {
    this.setJsColor(this.$vua.breakpoint.name)
  }

  get jsStyle () {
    return {
      backgroundColor: this.jsColor
    }
  }
}
</script>

<style lang="scss" module>
@import "../../../../../../src/style/mixins/breakpoint.scss";
@import "../../../../../../src/style/var.scss";

.box{
        background-color: $primary-color;
        color: #fff;
        padding: 10px;
}
@include breakpoint-only(sm){
    .box{
         background-color: $success-color;
    }
}
@include breakpoint-only(md){
    .box{
         background-color: $info-color;
    }
}
@include breakpoint-only(lg){
    .box{
         background-color: $warning-color;
    }
}
@include breakpoint-only(xl){
    .box{
         background-color: $error-color;
    }
}
</style>
