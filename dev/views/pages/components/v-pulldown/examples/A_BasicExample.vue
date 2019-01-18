<template>
<div>
  <div class="m-3">
    <v-pulldown>
      <v-pulldown-pane index="1" title="customer">
       <div class="m-3" style="max-height: 20rem; overflow: auto;">
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaa</p>
       </div>
      </v-pulldown-pane>
      <v-pulldown-pane index="2" title="task">
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbb</p>
      </v-pulldown-pane>
      <v-pulldown-pane index="3" title="tag" tag>
      </v-pulldown-pane>
    </v-pulldown>
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
