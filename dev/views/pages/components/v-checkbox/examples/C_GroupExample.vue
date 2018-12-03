<template>
<div>
  <div class="my-3">
    <v-alert :description="valueText"></v-alert> <br>
    <v-checkbox-group v-model="value">
      <v-checkbox label="Jack">Jack</v-checkbox>
      <v-checkbox label="Lily">Lily</v-checkbox>
      <v-checkbox label="Alison">Alison</v-checkbox>
      <v-checkbox label="Jane" disabled>Jane</v-checkbox>
    </v-checkbox-group>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  多选框组
 * @desc 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
 */
@Component({
  components: {
  },
  })
export default class GroupExample extends Vue {
  value: string[] = ['Jack']

  get valueText () {
    return JSON.stringify(this.value)
  }
}
</script>
