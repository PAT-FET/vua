<template>
<div>
  <div class="my-3">
    <v-timeline>
      <v-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        position="right"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </v-timeline-item>
    </v-timeline>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  位置
 * @desc 时间轴点可以在内容的右边或左边。
 */
@Component({
  components: {
  },
  })
export default class PositionExample extends Vue {
  activities = [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
}
</script>
