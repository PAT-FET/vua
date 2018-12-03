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
      <v-checkbox-button label="Jack" active-fill="primary" active-color="#fff">Jack</v-checkbox-button>
      <v-checkbox-button label="Alex" active-fill="primary" active-color="#fff">Alex</v-checkbox-button>
      <v-checkbox-button label="Molly" active-fill="primary" active-color="#fff">Molly</v-checkbox-button>
      <v-checkbox-button label="Anna" active-fill="primary" active-color="#fff">Anna</v-checkbox-button>
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
}
</script>
