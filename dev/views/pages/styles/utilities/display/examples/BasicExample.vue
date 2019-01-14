<template>
<div>
    <div class="m-3">
        <v-radio-group v-model="value">
            <v-radio :label="item" v-for="item in list" :key="item">{{item}}</v-radio>
        </v-radio-group>
    </div>
    <div :class="[value]">
        <div class="w-6 h-4 bg-primary"></div>
        <div class="w-6 h-4 bg-info"></div>
        <div class="w-6 h-4 bg-error"></div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本使用示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
   value = 'd-block'

   list = [
    'd-none',
    'd-inline',
    'd-inline-block',
    'd-block',
    'd-table',
    'd-table-cell',
    'd-table-row',
    'd-flex',
    'd-inline-flex'
   ]
}
</script>

<style lang="scss" module>
</style>
