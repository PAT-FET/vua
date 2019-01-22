
<template>
<div>
    <v-timeline pending>
        <v-timeline-item color="red">
            发布1.0版本
        </v-timeline-item>
        <v-timeline-item color="#a0d911">发布2.0版本</v-timeline-item>
        <v-timeline-item color="pink">
            <v-icon type="loading" spin slot="dot"></v-icon>
            发布3.0版本
        </v-timeline-item>
    </v-timeline>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义时间轴点及其颜色
 * @desc 可以设置为图标或其他自定义元素及颜色。
 */
@Component({
  components: {
  }
})
export default class BasicExample extends Vue {
}
</script>
