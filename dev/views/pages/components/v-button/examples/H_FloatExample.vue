<template>
<div>
<div class="my-3">
 <v-button type="primary" float>主要</v-button>
 <v-button float class="ml-3">默认</v-button>
 <v-button float icon="chrome" type="primary" shape="circle" color="success" class="w-2 h-2 ml-3 ft-lg"></v-button>
 <v-button float icon="ie" type="primary" shape="circle" color="error" class="w-2 h-2 ml-3 ft-lg"></v-button>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  浮动按钮
 * @desc 悬浮在当前视图之上。
 */
@Component({
  components: {
  },
  })
export default class BlockExample extends Vue {

}
</script>
