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
            <div>
                <span>Property : </span>
                <v-radio-group v-model="property">
                    <v-radio label="m">m</v-radio>
                    <v-radio label="p">p</v-radio>
                </v-radio-group>
            </div>
            <div>
                <span>Side : </span>
                <v-radio-group v-model="side">
                    <v-radio label="">none</v-radio>
                    <v-radio label="t">t</v-radio>
                    <v-radio label="b">b</v-radio>
                    <v-radio label="l">l</v-radio>
                    <v-radio label="r">r</v-radio>
                    <v-radio label="x">x</v-radio>
                    <v-radio label="y">y</v-radio>
                </v-radio-group>
            </div>
            <div>
                <span>Breakpoint : </span>
                <v-radio-group v-model="breakpoint">
                    <v-radio label="">none</v-radio>
                    <v-radio label="sm">sm</v-radio>
                    <v-radio label="md">md</v-radio>
                    <v-radio label="lg">lg</v-radio>
                    <v-radio label="xl">xl</v-radio>
                </v-radio-group>
            </div>
            <div>
                <span>Size : </span>
                 <v-radio-group v-model="size">
                    <v-radio label="0">0</v-radio>
                    <v-radio label="1">1</v-radio>
                    <v-radio label="2">2</v-radio>
                    <v-radio label="3">3</v-radio>
                    <v-radio label="4">4</v-radio>
                    <v-radio label="5">5</v-radio>
                    <v-radio label="auto">auto</v-radio>
                </v-radio-group>
            </div>
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
