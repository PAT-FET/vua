<template>
<div class="my-3">
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button block>Normal</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="primary" block>Primary</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="secondary" block>Secondary</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="success" block>Success</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="info" block>Info</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="warning" block>Warning</v-button>
  </div>
  <div class="d-inline-block m-3" style="width: 320px">
     <v-button color="error" block>Error</v-button>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   块状
 * @desc 块状按钮可以扩展全部可用宽度
 */
@Component({
  components: {
  },
  })
export default class BlockExample extends Vue {
}
</script>
