<template>
<div>
   <div class="m-3">
     <v-row :gutter="16">
       <v-col :span="12">
         <v-card>
           <v-statistic title="Active" :value="11.28" color="info" :precision="2" suffix="%"><span slot="prefix"><v-icon type="arrow-up"></v-icon></span></v-statistic>
         </v-card>
       </v-col>
       <v-col :span="12">
         <v-card>
          <v-statistic title="Idle" :value="9.30" color="error" :precision="2" suffix="%"><span slot="prefix"><v-icon type="arrow-down"></v-icon></span></v-statistic>
         </v-card>
       </v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 颜色
 * @desc 自定义颜色
 */
@Component({
  components: {
  },
  })
export default class ColorExample extends Vue {

}
</script>
