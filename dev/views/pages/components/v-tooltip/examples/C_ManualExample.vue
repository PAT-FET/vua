<template>
<div>
   <div class="my-3">
       <v-tooltip v-model="visible" content="tooltip text">
         <p>toggle me</p>
       </v-tooltip>
       <p><label><input type="checkbox" v-model="visible"> toggle</label></p>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  手动控制
 * @desc 使用v-model控制tooltip
 */
@Component({
  components: {
  },
  })
export default class ManualExample extends Vue {
   visible: boolean = false
}
</script>
