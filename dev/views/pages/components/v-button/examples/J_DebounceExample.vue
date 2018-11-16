<template>
<div class="my-3">
  <p>
    <input type="number" v-model.number="debounce" step="100"> ms
  </p>
  <span @click="onParentClick">
    <v-button @click="onClick" :debounce="debounce">Click Me</v-button>
  </span>
  <span>
    间隔: {{interval}}
  </span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   去抖
 * @desc 点击去抖， debounce 非 0 正整数
 */
@Component({
  components: {
  },
  })
export default class DebounceExample extends Vue {
  debounce: number = 0

  pTime: number = Date.now()

  cTime: number = Date.now()

  get interval (): number {
    let t = this.cTime - this.pTime
    return t > 0 ? t : 0
  }

  onClick () {
    this.cTime = Date.now()
  }

  onParentClick () {
    this.pTime = Date.now()
  }
}
</script>
