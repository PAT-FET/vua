<template>
<div>
  <div :class="[$style.col]" v-for="color in colors" :key=color.value>
    <div :class="[$style.title]" class="text-heading">{{color.title}}</div>
    <div>
      <div :class="[$style.strip, $style[`color-${color.value}-lighten-5`], $style.darken]">{{color.value}}-lighten-5</div>
      <div :class="[$style.strip, $style[`color-${color.value}-lighten-4`], $style.darken]">{{color.value}}-lighten-4</div>
      <div :class="[$style.strip, $style[`color-${color.value}-lighten-3`], $style.darken]">{{color.value}}-lighten-3</div>
      <div :class="[$style.strip, $style[`color-${color.value}-lighten-2`], $style.darken]">{{color.value}}-lighten-2</div>
      <div :class="[$style.strip, $style[`color-${color.value}-lighten-1`], $style.darken]">{{color.value}}-lighten-1</div>
      <div :class="[$style.strip, $style[`color-${color.value}-base`], $style.white]">{{color.value}}-base</div>
      <div :class="[$style.strip, $style[`color-${color.value}-darken-1`], $style.white]">{{color.value}}-darken-1</div>
      <div :class="[$style.strip, $style[`color-${color.value}-darken-2`], $style.white]">{{color.value}}-darken-2</div>
      <div :class="[$style.strip, $style[`color-${color.value}-darken-3`], $style.white]">{{color.value}}-darken-3</div>
      <div :class="[$style.strip, $style[`color-${color.value}-darken-4`], $style.white]">{{color.value}}-darken-4</div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @title   色板列表
 * @desc ant design 内置13种颜色 `(中性色并不是由色板算法生成)`
 */
@Component({
  components: {
  },
  })
export default class ListExample extends Vue {
  colors: any[] = [
    {
      title: 'Dust Red / 薄暮',
      value: 'red'
    },
    {
      title: 'Volcano / 火山',
      value: 'volcano'
    },
    {
      title: 'Sunset Orange / 日暮',
      value: 'orange'
    },
    {
      title: 'Calendula Gold / 金盏花',
      value: 'gold'
    },
    {
      title: 'Sunrise Yellow / 日出',
      value: 'yellow'
    },
    {
      title: 'Lime / 青柠',
      value: 'lime'
    },
    {
      title: 'Polar Green / 极光绿',
      value: 'green'
    },
    {
      title: 'Cyan / 明青',
      value: 'cyan'
    },
    {
      title: 'Daybreak Blue / 拂晓蓝',
      value: 'blue'
    },
    {
      title: 'Geek Blue / 极客蓝',
      value: 'geekblue'
    },
    {
      title: 'Golden Purple / 酱紫',
      value: 'purple'
    },
    {
      title: 'Magenta / 法式洋红',
      value: 'magenta'
    },
    {
      title: 'Grey / 中性色',
      value: 'grey'
    }
  ]
}
</script>

<style lang="scss" module>
@import "~@/style/color/colors";

@each $color in map-keys($colors) {
  @each $grad in map-keys(map-get($colors, $color)) {
    .color-#{$color}-#{$grad}{
      background-color: map-get(map-get($colors, $color), $grad);
    }
  }
}

.strip {
  line-height: 42px;
  text-align: center;
}
.white{
  color: rgba(255, 255, 255, 85%);
}
.darken{
  color: rgba(0, 0, 0, 85%);
}
.col{
  width: 240px;
  display: inline-block;
  padding: 10px;
}

.title{
  line-height: 36px;
  text-align: center;
  font-size: 18px;
}
</style>
