<template>
<div>

  <v-result type="success" title="Success" class="mt-4 border-bottom"
    subtitle="this is success type.">
  </v-result>
  <v-result type="primary" title="Primary" class="mt-4 border-bottom"
    subtitle="this is priamry type.">
  </v-result>
  <v-result type="info" title="Info" class="mt-4 border-bottom"
    subtitle="this is info type.">
  </v-result>
  <v-result type="warning" title="Warning" class="mt-4 border-bottom"
    subtitle="this is warning type.">
  </v-result>
  <v-result type="error" title="Error" class="mt-4"
    subtitle="this is error type.">
  </v-result>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 类型
 * @desc 五种内置类型。
 */
@Component({
  components: {
  },
  })
export default class TypeExample extends Vue {

}
</script>
