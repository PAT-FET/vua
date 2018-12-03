<template>
<div>
  <div class="my-3">
    <v-radio-group v-model="value">
      <v-radio-button label="Jack">Jack</v-radio-button>
      <v-radio-button label="Alex">Alex</v-radio-button>
      <v-radio-button label="Molly">Molly</v-radio-button>
      <v-radio-button label="Anna">Anna</v-radio-button>
    </v-radio-group>
  </div>

  <div class="my-3">
    <v-radio-group v-model="value1">
      <v-radio-button label="Jack" active-type="depressed">Jack</v-radio-button>
      <v-radio-button label="Alex" active-type="depressed">Alex</v-radio-button>
      <v-radio-button label="Molly" active-type="depressed">Molly</v-radio-button>
      <v-radio-button label="Anna" active-type="depressed">Anna</v-radio-button>
    </v-radio-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   按钮样式
 * @desc 按钮样式的单选组合。
 */
@Component({
  components: {
  },
  })
export default class DisabledExample extends Vue {
  value: string = 'Jack'

  value1: string = 'Alex'
}
</script>
