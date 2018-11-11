<template>
<div>
    <div>
        <div class="title">颜色</div>
        <div class="border rounded p-4 text-center">
            <p class="text-primary">text-primary</p>
            <p class="text-secondary">text-secondary</p>
            <p class="text-success">text-success</p>
            <p class="text-info">text-info</p>
            <p class="text-warning">text-warning</p>
            <p class="text-error">text-error</p>
            <p class="text-base">text-base</p>
        </div>
    </div>

     <div>
        <div class="title">对齐 <span class="subheading">（支持断点）</span></div>
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
