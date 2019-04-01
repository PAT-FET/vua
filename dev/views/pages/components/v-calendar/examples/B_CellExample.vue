<template>
<div>
  <v-alert class="mb-2" :description="value"></v-alert>
  <v-calendar v-model="value">
    <div slot="cell" slot-scope="{date}">
      {{date.getDate()}}
      <div>
         <ul style="padding: 0 0 0 10px; margin: 0;">
            <li class="text-primary">do laundry</li>
            <li class="text-info">go shopping</li>
            <li class="text-error">watch GOT</li>
         </ul>
      </div>
    </div>
  </v-calendar>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  自定义内容
 * @desc 自定义内容
 */
@Component({
  components: {
  },
  })
export default class CellExample extends Vue {
  value: string = ''
}
</script>
