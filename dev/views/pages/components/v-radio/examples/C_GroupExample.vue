<template>
<div>
  <div class="my-3">
    <v-radio-group v-model="value">
      <v-radio label="Jack">Jack</v-radio>
      <v-radio label="Alex">Alex</v-radio>
      <v-radio label="Molly">Molly</v-radio>
      <v-radio label="Anna">Anna</v-radio>
    </v-radio-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   单选组合
 * @desc 一组互斥的 Radio 配合使用。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: string = 'Jack'
}
</script>
