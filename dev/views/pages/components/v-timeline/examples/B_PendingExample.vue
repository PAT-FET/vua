<template>
<div>
    <v-timeline pending>
        <v-timeline-item>发布1.0版本</v-timeline-item>
        <v-timeline-item>发布2.0版本</v-timeline-item>
        <v-timeline-item>发布3.0版本</v-timeline-item>
    </v-timeline>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  最后一个pending
 * @desc 添加通过pending属性来标记求最后一个为幽灵节点，标识还未完成。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
}
</script>
