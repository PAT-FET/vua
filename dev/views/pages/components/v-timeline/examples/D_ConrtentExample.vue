<template>
<div class="timeline">
    <v-timeline>
        <v-timeline-item>
            <div slot="left">2019-01-11 18:00:00</div>
            发布1.0版本</v-timeline-item>
        <v-timeline-item>
            <div slot="left">2019-01-12 18:00:00</div>
            发布2.0版本</v-timeline-item>
        <v-timeline-item>
            <div slot="left">2019-01-13 18:00:00</div>
            <div slot="right">发布3.0版本</div>
        </v-timeline-item>
    </v-timeline>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 左右两侧
 * @desc 内容可以在时间轴点的两边。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
}
</script>

<style lang="scss" scoped>
.timeline{
    div{
        width: 90px;
    }
}
</style>
