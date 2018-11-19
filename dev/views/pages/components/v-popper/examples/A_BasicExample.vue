<template>
<div>
   <div class="my-3">
      <v-popper :visible.sync="visible">
         <a slot="reference">bottom (default)</a>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible1" :options="{placement: 'top'}">
         <a slot="reference">top</a>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible2" :options="{placement: 'left'}">
         <a slot="reference">left</a>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible3" :options="{placement: 'right'}">
         <a slot="reference">right</a>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible8" disabled>
         <a slot="reference">disabled</a>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>
   </div>

   <div>
      <v-popper :visible.sync="visible4" trigger="click">
         <v-button slot="reference" color="primary">bottom (default)</v-button>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible5" trigger="click" :options="{placement: 'top'}">
         <v-button slot="reference" color="success">top</v-button>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible6" trigger="click" :options="{placement: 'left'}">
         <v-button slot="reference" color="info">left</v-button>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible7" trigger="click" :options="{placement: 'right'}">
         <v-button slot="reference" color="error">right</v-button>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>

      &nbsp;

      <v-popper :visible.sync="visible9" trigger="click">
         <v-button slot="reference" color="error" disabled>disabled</v-button>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>
   </div>

   <div class="my-4">
      <v-popper :visible.sync="visible10" reference="[x-reference]">
         <v-button-group slot="reference">
            <v-button color="primary">Submit</v-button>
            <v-button color="primary" x-reference slim><i class="anticon anticon-down"></i></v-button>
         </v-button-group>
         <ul>
            <li>first line</li>
            <li>second line</li>
            <li>third line</li>
            <li>4th line</li>
            <li>5th line</li>
            <li>6line</li>
         </ul>
      </v-popper>
   </div>

   <div class="my-4">
      <v-popper :visible.sync="visible11" :options="{placement: 'top'}" transition="fade-transition">
         <p slot="reference">this is a message...</p>
         <div class="p-2">this is a message, more detail</div>
      </v-popper>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   基本示例
 * @desc
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
   visible: boolean = false

   visible1: boolean = false

   visible2: boolean = false

   visible3: boolean = false

   visible4: boolean = false

   visible5: boolean = false

   visible6: boolean = false

   visible7: boolean = false

   visible8: boolean = false

   visible9: boolean = false

   visible10: boolean = false

   visible11: boolean = false
}
</script>
