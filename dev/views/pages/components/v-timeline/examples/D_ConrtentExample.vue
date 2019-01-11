<template>
<div>
    <v-timeline>
        <v-timeline-item>发布1.0版本</v-timeline-item>
        <v-timeline-item>发布2.0版本</v-timeline-item>
        <v-timeline-item>
            <span slot="left">2019-01-11</span>
            发布3.0版本</v-timeline-item>
    </v-timeline>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
}
</script>
