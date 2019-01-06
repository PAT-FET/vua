<template>
<div>
   <div class="m-3">
     <v-skeleton :paragraph="paragraph" :avatar="true"></v-skeleton>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  复杂的组合
 * @desc 更复杂的组合。
 */
@Component({
  components: {
  },
  })
export default class AvatarExample extends Vue {
  paragraph = {
    rows: 5
  }
}
</script>
