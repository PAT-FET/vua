<template>
<div>
   <div class="m-3 display-4 text-center"> 当前断点： {{$vua.breakpoint.name}}</div>
   <div class="m-3">
      <v-row :gutter="gutter">
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
       <v-col :xs="xs" :sm="sm" :md="md" :lg="lg" :xl="xl"><div :class="[$style.cell]">col-24,12,8,6,4</div></v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   响应式
 * @desc 响应式布局, gutter需要借助$vua.breakpoint， 本身不带响应式。
 */
@Component({
  components: {
  },
  })
export default class ReactiveExample extends Vue {
  xs = {
    span: 24
  }

  sm = {
    span: 12
  }

  md = {
    span: 8
  }

  lg = {
    span: 6
  }

  xl = {
    span: 4
  }

  get gutter () {
    const bp = this.$vua.breakpoint
    if (bp.sm) return 4
    if (bp.md) return 8
    if (bp.lg) return 16
    if (bp.xlOnly) return 32
    return 0
  }
}
</script>

<style lang="scss" module>
@import '../../../../../../src/style/var.scss';
  .cell {
    height: 36px;
    line-height: 36px;
    background-color: $primary-color;
    text-align: center;
    color: #fff;
    margin: .5rem 0;
  }

  .light {
    background-color: map-get($primary-colors, lighten-2)
  }
</style>
