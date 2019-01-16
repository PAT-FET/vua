<template>
<div>
   <div class="m-3 d-flex">
     <span :class="[ft]" v-for="ft in list" :key="ft" class="ml-3">{{ft}}</span>
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
  list = [
    'ft-10',
    'ft-sm',
    'ft-md',
    'ft-lg',
    'ft-18',
    'ft-24',
    'ft-32',
    'ft-64'
  ]
}
</script>

<style lang="scss" module>
</style>
