<template>
<div>
   <div class="m-3">
     <v-row :gutter="16">
       <v-col :span="12">
         <v-statistic title="Active Users" :value="1298765"></v-statistic>
       </v-col>
       <v-col :span="12">
         <v-statistic title="Active Users" :value="1298765" :precision="2"></v-statistic>
       </v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本用法
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {

}
</script>
