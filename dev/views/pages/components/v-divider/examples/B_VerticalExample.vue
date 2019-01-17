<template>
<div>
  <a>link</a> <v-divider type="vertical"></v-divider> <a>link</a> <v-divider type="vertical"></v-divider> <span>text</span>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  垂直分割线
 * @desc使用 type="vertical" 设置为行内的垂直分割线。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
