<template>
<div>
<div class="my-3">
  <v-button-group>
    <v-button>全部</v-button>
    <v-button>已完成</v-button>
    <v-button>未完成</v-button>
  </v-button-group>
</div>
<div class="my-3">
  <v-button-group>
    <v-button color="primary">全部</v-button>
    <v-button color="primary">已完成</v-button>
    <v-button color="primary">未完成</v-button>
  </v-button-group>
</div>

</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 按钮组
 * @desc 使用按钮组合方式， 可用于tab切换。
 */
@Component({
  components: {
  }
})
export default class GroupExample extends Vue {

}
</script>
