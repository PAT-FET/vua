<template>
   <div>
    <div class="subheading">指定边</div>
    <div class="m-3 d-flex flex-nowrap">
        <div class="w-8 h-4 m-2 bg-1 text-center" style="line-height: 4rem;" :class="[add]" v-for="add in adds" :key="add">{{add}}</div>
    </div>

    <div class="subheading">颜色</div>
   <div class="m-3 d-flex flex-wrap">
        <div class="w-12 h-4 m-2 bg-1 text-center" style="line-height: 4rem;" :class="[color]" v-for="color in colors" :key="color">{{color}}</div>
    </div>

   <div class="subheading">去除指定边</div>
   <div class="m-3 d-flex flex-wrap">
        <div class="w-12 h-4 m-2 bg-1 text-center" style="line-height: 4rem;" :class="[sub]" v-for="sub in subs" :key="sub">{{sub}}</div>
    </div>

   <div class="subheading">圆角</div>
   <div class="m-3 d-flex flex-wrap">
        <div class="w-8 h-8 m-2 bg-disabled text-center" style="line-height: 8rem;" :class="[round]" v-for="round in rounds" :key="round">{{round}}</div>
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
    adds = [
        'border',
        'border-top',
        'border-bottom',
        'border-left',
        'border-right',
    ]

    colors = [
        'border border-primary',
        'border border-secondary',
        'border border-success',
        'border border-info',
        'border border-warning',
        'border border-error',
        'border border-base',
        'border border-split'
    ]

    subs = [
        'border border-0',
        'border border-top-0',
        'border border-bottom-0',
        'border border-left-0',
        'border border-right-0'
    ]

    rounds = [
        'rounded',
        'rounded-top',
        'rounded-left',
        'rounded-right',
        'rounded-bottom',
        'circle',
        'rounded-0'
    ]
}
</script>

<style lang="scss" module>

</style>
