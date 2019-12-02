<template>
<div>

  <v-result type="error" title="Submission Failed"
    subtitle="Please check and modify the following information before resubmitting.">
    <div slot="extra">
      <v-button type="primary">Go Console</v-button>
      <v-button class="ml-2">Buy Again</v-button>
    </div>
    <div>
      <p class="text-heading">The content you submitted has the following error:</p>
      <p>Your account has been frozena <a>Thaw immediately ></a></p>
      <p>Your account is not yet eligible to apply <a>Apply Unlock ></a></p>
    </div>
  </v-result>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title Error
 * @desc 复杂的错误反馈。
 */
@Component({
  components: {
  },
  })
export default class ErrorExample extends Vue {

}
</script>
