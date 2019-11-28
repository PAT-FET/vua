<template>
<div>
  <div class="my-3">
    <v-timeline>
      <v-timeline-item timestamp="2019-01-01" placement="top">
        <v-card>
          <p>更新 wiki 文档</p>
          <p class="caption">李狗蛋 提交于 2019-01-01 12:00:00</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item timestamp="2019-01-02" placement="top">
        <v-card>
          <p>更新 wiki 文档</p>
          <p class="caption">李狗蛋 提交于 2019-01-02 12:00:00</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item timestamp="2019-01-03" placement="top">
        <v-card>
          <p>更新 wiki 文档</p>
          <p class="caption">李狗蛋 提交于 2019-01-03 12:00:00</p>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 时间戳位置
 * @desc 当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。
 */
@Component({
  components: {
  },
  })
export default class TimestampExample extends Vue {

}
</script>
