<template>
   <div>
        <div>
            <div :class="[$style.box]" class="bg-primary"></div>
            <div :class="[$style.box]" class="bg-secondary"></div>
            <div :class="[$style.box]" class="bg-success"></div>
            <div :class="[$style.box]" class="bg-info"></div>
            <div :class="[$style.box]" class="bg-warning"></div>
            <div :class="[$style.box]" class="bg-error"></div>
            <div :class="[$style.box]" class="bg-base"></div>
            <div :class="[$style.box]" class="bg-1"></div>
            <div :class="[$style.box]" class="bg-2"></div>
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
