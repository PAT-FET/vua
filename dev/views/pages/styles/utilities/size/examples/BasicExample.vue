<template>
<div>
   <div v-for="i in 24" :class="[`w-${i}`]" :key="i" class="h-2 my-2 bg-2">w-{{i}}</div>
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
</style>
