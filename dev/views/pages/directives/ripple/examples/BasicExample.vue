<template>
<div>
    <div class="d-inline-block align-top mx-3">
        <p :class="title">基本</p>
        <div :class="[$style.box]" v-ripple></div>
    </div>
    <div class="d-inline-block align-top mx-3">
        <p :class="title"><label><input type="checkbox" v-model="disabled"> 禁用/启用切换</label></p>
        <div :class="[$style.box]" v-ripple="disabled"></div>
    </div>

    <div class="d-inline-block align-top mx-3">
        <p :class="title">居中扩散</p>
        <div :class="[$style.box]" v-ripple="{center: true}"></div>
    </div>

    <div class="d-inline-block align-top mx-3">
        <p :class="title">内圆</p>
        <div :class="[$style.box]" v-ripple="{circle: true}"></div>
    </div>

    <div class="d-inline-block align-top mx-3">
        <p :class="title">自定义样式</p>
        <div :class="[$style.box]" v-ripple="{'class': $style.ripple}"></div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @title 基本示例
 * @desc 点击查看效果
 */
@Component({
  components: {
  },
  })
export default class ListExample extends Vue {
    disabled: boolean = false
}
</script>

<style lang="scss" module>
@import "~@/style/var.scss";
.box{
    height: 80px;
    width: 100px;
    background-color: $primary-color;
}

.ripple{
    background-color: $error-color;
}
</style>
