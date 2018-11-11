<template>
   <div>
    <h3>提供了一系列 mixins 帮助快速设置边框</h3>
    <p>颜色</p>
    <div>
        <div :class="[$style.box]" class="border border-primary">Primary</div>
        <div :class="[$style.box]" class="border border-secondary">Secondary</div>
        <div :class="[$style.box]" class="border border-success">Success</div>
        <div :class="[$style.box]" class="border border-info">Info</div>
        <div :class="[$style.box]" class="border border-warning">Warning</div>
        <div :class="[$style.box]" class="border border-error">Error</div>
        <div :class="[$style.box]" class="border border-base">Base</div>
        <div :class="[$style.box]" class="border border-split">Split</div>
    </div>

    <p>指定边</p>
    <div>
        <div :class="[$style.box]" class="border-top">Top</div>
        <div :class="[$style.box]" class="border-bottom">Bottom</div>
        <div :class="[$style.box]" class="border-left">Left</div>
        <div :class="[$style.box]" class="border-right">Right</div>
    </div>

    <p>去除指定边</p>
    <div>
        <div :class="[$style.box]" class="border border-top-0">Top-0</div>
        <div :class="[$style.box]" class="border border-bottom-0">Bottom-0</div>
        <div :class="[$style.box]" class="border border-left-0">Left-0</div>
        <div :class="[$style.box]" class="border border-right-0">Right-0</div>
    </div>

    <p>圆角</p>
    <div>
        <div :class="[$style.box]" class="border rounded">Rouned</div>
        <div :class="[$style.box]" class="border rounded-top">Top</div>
        <div :class="[$style.box]" class="border rounded-bottom">Bottom</div>
        <div :class="[$style.box]" class="border rounded-left">Left</div>
        <div :class="[$style.box]" class="border rounded-right">Right</div>

        <div :class="[$style.box]" class="border rounded rounded-top-0">Top-0</div>
        <div :class="[$style.box]" class="border rounded rounded-bottom-0">Bottom-0</div>
        <div :class="[$style.box]" class="border rounded rounded-left-0">Left-0</div>
        <div :class="[$style.box]" class="border rounded rounded-right-0">Right-0</div>

        <div :class="[$style.box]" class="border circle">Circle</div>
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

<style lang="scss" module>
.box{
    height: 80px;
    width: 80px;
    margin: 5px;
    display: inline-block;
}

</style>
