<template>
<div>
    <div>
        <div :class="[$style.spacingBox, $style.spacingBox1]">1</div>
        <div :class="[$style.spacingBox, $style.spacingBox2]">2</div>
        <div :class="[$style.spacingBox, $style.spacingBox3]">3</div>
        <div :class="[$style.spacingBox, $style.spacingBox4]">4</div>
        <div :class="[$style.spacingBox, $style.spacingBox5]">5</div>
    </div>

    <div class="my-5">
        <p>动态演示</p>
        <div :class="[$style.demoOuter]">
            <div :class="[$style.demo, spacingCls]">
                <div :class="[$style.demoInner]"></div>
            </div>
        </div>

        <div>
            <span>
                <span>Property : </span>
                <select v-model="property">
                    <option value="">请选择</option>
                    <option value="m">m</option>
                    <option value="p">p</option>
                </select>
                &nbsp;
            </span>
            <span>
                <span>Side : </span>
                <select v-model="side">
                    <option value="">请选择</option>
                    <option value="t">t</option>
                    <option value="b">b</option>
                    <option value="l">l</option>
                    <option value="r">r</option>
                    <option value="x">x</option>
                    <option value="y">y</option>
                    <option value="blank">blank</option>
                </select>
                &nbsp;
            </span>
            <span>
                <span>Breakpoint : </span>
                <select v-model="breakpoint">
                    <option value="">请选择</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                </select>
                &nbsp;
            </span>
            <span>
                <span>Size : </span>
                <select v-model="size">
                    <option value="">请选择</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="auto">auto</option>
                </select>
                &nbsp;
            </span>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  property: string = ''
    side: string = ''
    breakpoint: string = ''
    size: string = ''

    get spacingCls () {
      return `${this.property}${this.side}${this.breakpoint ? '-' : ''}${this.breakpoint}-${this.size}`
    }
}
</script>

<style lang="scss" module>
@import "../../../../../../../src/style/var.scss";

.spacingBox{
    background-color: $primary-color;
    margin: 5px;
    display: inline-block;
    line-height: 80px;
    text-align: center;
    color: #fff;
}
.spacingBox1{
    width: map-get($spacers, 1);

}

.spacingBox2{
    width: map-get($spacers, 2);
}

.spacingBox3{
    width: map-get($spacers, 3);
}

.spacingBox4{
    width: map-get($spacers, 4);
}

.spacingBox5{
    width: map-get($spacers, 5);
}

.demoOuter{
   background-color: $primary-color;
   margin-bottom: 20px;
   width: 560px;

   &:before { // margin在元素前没有其他元素时会溢出
       content: "";
       display: table;
   }
   &:after {
       content: "";
       display: table;
   }

}

.demo{
    background-color: $warning-color;
}

.demoInner{
   background-color: $error-color;
   height: 100px;
   box-sizing: content-box;
}
</style>
