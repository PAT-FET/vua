<template>
<div>
   <div class="m-3">
    <v-icon type="home"></v-icon>
    <v-icon class="ml-3" type="heart" color="primary"></v-icon>
    <v-icon class="ml-3" type="loading" spin></v-icon>
    <v-icon class="ml-3" type="heart" color="red"></v-icon>
    <v-icon class="ml-3" type="heart" color="error-lighten-5"></v-icon>
    <v-icon class="ml-3" type="heart" color="#A27B4C"></v-icon>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 基本用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
