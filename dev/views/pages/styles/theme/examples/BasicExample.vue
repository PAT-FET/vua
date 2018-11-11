<template>
<div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">primary color:</span> <div :class="[$style.block]" class="bg-primary"></div>
  </div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">secondary color:</span> <div :class="[$style.block]" class="bg-secondary"></div>
  </div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">success color:</span> <div :class="[$style.block]" class="bg-success"></div>
  </div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">info color:</span> <div :class="[$style.block]" class="bg-info"></div>
  </div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">warning color:</span> <div :class="[$style.block]" class="bg-warning"></div>
  </div>
  <div :class="[$style.row]">
    <span :class="[$style.block]">error color:</span> <div :class="[$style.block]" class="bg-error"></div>
  </div>

  <div style="margin-top: 20px;">
    <div class="text-heading" style="font-size: 24px; line-height: 48px;">标题文字色</div>

    <div>
      分割线 <div class="border-top border-base" style="display: inline-block; width: 400px;"></div>
    </div>

    <div>
      <span class="text-base" style="font-size: 18px; line-height: 36px;">常规字体色 </span>  <span class="text-secondary" style="font-size: 16px; line-height: 24px;">次要字体色</span>
    </div>

    <div style="height: 32px; line-height: 32px; border-radius: 4px;" class="border text-secondary">&nbsp;普通边框</div>
  </div>

  <div style="margin-top: 20px;">
    <div style="width: 220px; display: inline-block; padding-left: 10px;" class="border" v-for="(val, key) in currentTheme" :key="key">
      <div :class="[`text-${key}`]" style="text-align: center; line-height: 32px;">{{key}}</div>
      <label style="inline-height: 32px; height: 32px; display: block;" v-for="theme in themes" :key="theme"><input type="radio" v-model="currentTheme[key]" :value="theme"> {{theme}} &nbsp;</label>
    </div>
  </div>

  <div style="margin-top: 20px;">
    <label><input type="checkbox" v-model="dark"> 暗色模式 &nbsp;</label>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   控制台
 * @desc 尝试切换各种主题色及明暗模式
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  themes: string[] = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
    'grey']

  currentTheme = Object.assign({}, this.$vua.theme)

  dark: boolean = false

  @Watch('currentTheme', {deep: true}) currentThemeChange (currentTheme: string) {
    Object.assign(this.$vua.theme, currentTheme)
  }

  @Watch('dark') darkChange (dark: boolean) {
    this.$vua.dark = dark
  }
}
</script>

<style lang="scss" module>
.block{
  height: 24px;
  width: 150px;
  display: inline-block;
  vertical-align: middle;
}

.row{
  margin-top: 20px;
  vertical-align: middle;
}
</style>
