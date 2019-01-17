<template>
<div>
  <div class="w-16">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider></v-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider> <div class="subheading">With Text</div> </v-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider dashed> </v-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider orientation="left">
      水平分割线
      <v-tooltip content="在 GitHub 上编辑此示例！">
        <span class="body-secondary ft-10"><v-icon type="edit"></v-icon></span>
      </v-tooltip>
    </v-divider>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
}
</script>
