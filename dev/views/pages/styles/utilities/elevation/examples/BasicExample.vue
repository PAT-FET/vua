<template>
 <div class="my-5 p-4 border rounded d-flex">
        <div>
             <v-slider v-model="value" class="w-16" :min="0" :max="24" :step="1"></v-slider> {{value}}
        </div>
        <div class="w-16 h-8 bg-2 ml-5" :class="[elevationCls]">
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
    value: number = 4

    get elevationCls () {
      return `elevation-${this.value}`
    }
}
</script>
