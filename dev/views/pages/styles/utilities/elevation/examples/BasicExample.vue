<template>
 <div class="my-5 p-4 border rounded d-flex">
        <div>
            <input type="number" max="24" min="0" step="1" v-model.number="level" style="width: 220px;">
        </div>
        <div style="width: 240px; height: 80px; background:" :class="[elevationCls]" class="bg-primary text-primary ml-5">
            Elevation-{{level}}
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
    level: number = 0

    get elevationCls () {
      return `elevation-${this.level}`
    }
}
</script>
