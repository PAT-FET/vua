<template>
<div>
   <div class="m-3">
     <v-row :gutter="16">
       <v-col :span="12">
         <v-statistic title="Feedback" :value="1128"><span slot="prefix"><v-icon type="like-o"></v-icon></span></v-statistic>
       </v-col>
       <v-col :span="12">
         <v-statistic title="Ummerged" :value="93" suffix="/100"></v-statistic>
       </v-col>
     </v-row>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   单位
 * @desc 通过前缀和后缀添加单位。
 */
@Component({
  components: {
  },
  })
export default class UnitExample extends Vue {

}
</script>
