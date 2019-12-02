<template>
<div>
  <div class="my-3">
    <v-timeline>
      <v-timeline-item color="#e2e2e2" timestamp="2019-01-01">失效</v-timeline-item>
      <v-timeline-item color="primary" timestamp="2019-01-02">正常</v-timeline-item>
      <v-timeline-item color="info" timestamp="2019-01-03">信息</v-timeline-item>
      <v-timeline-item color="warning" timestamp="2019-01-04">警告</v-timeline-item>
      <v-timeline-item color="error" timestamp="2019-01-05">错误</v-timeline-item>
      <v-timeline-item timestamp="2019-01-01" icon="clock-circle-o">等待</v-timeline-item>
    </v-timeline>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  状态和自定义图标
 * @desc 可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。
 */
@Component({
  components: {
  },
  })
export default class StatusExample extends Vue {

}
</script>
