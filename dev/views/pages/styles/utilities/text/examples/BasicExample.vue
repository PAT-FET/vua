<template>
<div>
    <div class="my-4">
        <div class="title my-2">颜色</div>
        <div>
            <p class="text-primary">text-primary</p>
            <p class="text-secondary">text-secondary</p>
            <p class="text-success">text-success</p>
            <p class="text-info">text-info</p>
            <p class="text-warning">text-warning</p>
            <p class="text-error">text-error</p>
            <p class="text-base">text-base</p>
            <p class="text-disabled">text-disabled</p>
        </div>
    </div>

     <div class="my-4">
        <div class="title my-2">对齐 <span class="subheading">（支持断点）</span></div>
        <div class="border rounded p-4 text-center">
            <p class="text-left">Left aligned text on all viewport sizes.</p>
            <p class="text-center">Center aligned text on all viewport sizes.</p>
            <p class="text-right">Right aligned text on all viewport sizes.</p>

            <p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
            <p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
            <p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
            <p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
        </div>
    </div>

     <div class="my-4">
        <div class="title my-2">wrapping and overflow</div>
        <div class="bg-2 w-4 my-2 text-nowrap">this text will no wrap (text-nowrap)</div>
        <div class="bg-2 w-4 my-2 text-truncate">this text will truncate (text-nowrap)</div>
    </div>

     <div class="my-4">
        <div class="title my-2">Text transform</div>
        <p class="text-lowercase">Lowercased text (text-lowercas).</p>
        <p class="text-uppercase">Uppercased text (text-uppercase).</p>
        <p class="text-capitalize">CapiTaliZed text (text-capitalize).</p>
    </div>

    <div class="my-4">
        <div class="title my-2">weight and italics</div>
        <p class="font-weight-thin">font-weight-thin.</p>
        <p class="font-weight-light">font-weight-light.</p>
        <p class="font-weight-regular">font-weight-regular.</p>
        <p class="font-weight-medium">font-weight-medium.</p>
        <p class="font-weight-bold">font-weight-bold.</p>
        <p class="font-weight-black">font-weight-black.</p>
        <p class="font-italic">font-italic.</p>
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
}
</script>
