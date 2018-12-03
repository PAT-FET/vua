<template>
<div>
   <div class="my-4">
     <div class="my-3">
        <v-input-group>
          <v-input size="sm" v-model="value1" placeholder="区号" clearable></v-input>
          <v-input size="sm" v-model="value2" placeholder="电话号码" clearable></v-input>
        </v-input-group>
     </div>
     <div class="my-3">
        <v-input-group>
          <v-input v-model="value3" placeholder="区号" clearable style="width: 240px;"></v-input>
          <v-input v-model="value4" placeholder="电话号码" clearable style="width: 240px;"></v-input>
        </v-input-group>
     </div>
     <div class="my-3">
         <v-input-group>
          <v-input size="lg" v-model="value5" placeholder="区号" clearable></v-input>
          <v-input size="lg" v-model="value6" placeholder="电话号码" clearable></v-input>
        </v-input-group>
     </div>
   </div>

   <div class="my-4">
    <div class="my-3">
      <v-input-group>
        <v-input size="sm" v-model="value7" placeholder="Search..." clearable></v-input>
        <v-button size="sm" color="primary" icon="search"></v-button>
      </v-input-group>
    </div>
     <div class="my-3">
      <v-input-group>
        <v-input v-model="value8" placeholder="Search..." clearable></v-input>
        <v-button color="primary" icon="search"></v-button>
      </v-input-group>
    </div>
     <div class="my-3">
      <v-input-group>
        <v-input size="lg" v-model="value9" placeholder="Search..."></v-input>
        <v-button size="lg" color="primary" icon="search"></v-button>
      </v-input-group>
    </div>
   </div>

    <div class="my-4">
      <div class="my-3">
        <v-input-group>
          <v-input size="sm" v-model="value10" placeholder="Search..."></v-input>
          <v-button size="sm" color="primary" type="outline" icon="search"></v-button>
        </v-input-group>
      </div>

      <div class="my-3">
        <v-input-group>
          <v-input v-model="value11" placeholder="Search..."></v-input>
          <v-button color="primary" type="outline" icon="search"></v-button>
        </v-input-group>
      </div>

      <div class="my-3">
        <v-input-group>
          <v-input size="lg" v-model="value12" placeholder="Search..."></v-input>
          <v-button size="lg" color="primary" type="outline" icon="search"></v-button>
        </v-input-group>
      </div>
    </div>

    <div class="my-3">
        <v-input-group>
          <v-input v-model="value13" placeholder="最小值" style="width: 120px;"></v-input>
          <v-input separator placeholder="~" style="width: 40px;"></v-input>
          <v-input v-model="value14" placeholder="最大值" clearable style="width: 120px;"></v-input>
        </v-input-group>
     </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title   输入框组合
 * @desc 输入框的组合展现, 凡是实现了 InputGroupable的组件都可以作为输入框组元素(所有类输入框)。
 */
@Component({
  components: {
  },
  })
export default class InputGroupExample extends Vue {
  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''

  value5: string = ''

  value6: string = ''

  value7: string = ''

  value8: string = ''

  value9: string = ''

  value10: string = ''

  value11: string = ''

  value12: string = ''

  value13: string = ''

  value14: string = ''
}
</script>
