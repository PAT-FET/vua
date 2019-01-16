<template>
<div>
  <div class="my-3">
    <v-checkbox-group v-model="value">
      <v-checkbox-button label="Jack">Jack</v-checkbox-button>
      <v-checkbox-button label="Alex">Alex</v-checkbox-button>
      <v-checkbox-button label="Molly">Molly</v-checkbox-button>
      <v-checkbox-button label="Anna">Anna</v-checkbox-button>
    </v-checkbox-group>
  </div>

  <div class="my-3">
    <v-checkbox-group v-model="value1">
      <v-checkbox-button label="Jack" color="primary">Jack</v-checkbox-button>
      <v-checkbox-button label="Alex" color="primary">Alex</v-checkbox-button>
      <v-checkbox-button label="Molly" color="primary">Molly</v-checkbox-button>
      <v-checkbox-button label="Anna" color="primary">Anna</v-checkbox-button>
    </v-checkbox-group>
  </div>

   <div class="my-3">
    <v-checkbox-group v-model="value2">
      <v-checkbox-button label="Jack" color="error">Jack</v-checkbox-button>
      <v-checkbox-button label="Alex" color="error">Alex</v-checkbox-button>
      <v-checkbox-button label="Molly" color="error">Molly</v-checkbox-button>
      <v-checkbox-button label="Anna" color="error">Anna</v-checkbox-button>
    </v-checkbox-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  按钮样式
 * @desc 按钮样式的复选组合。
 */
@Component({
  components: {
  },
  })
export default class ButtonExample extends Vue {
  value: string[] = ['Jack']

  value1: string[] = ['Alex']

  value2: string[] = ['Alex']
}
</script>
