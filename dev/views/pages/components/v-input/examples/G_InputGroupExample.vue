<template>
<div>
   <div class="my-3">
        <v-radio-group v-model="size">
          <v-radio-button label="lg">大</v-radio-button>
          <v-radio-button label="md">中</v-radio-button>
          <v-radio-button label="sm">小</v-radio-button>
        </v-radio-group>
    </div>
   <div class="my-4">
     <div>
      <p>输入框组合</p>
       <div class="my-3">
        <v-input-group>
          <v-input :size="size" placeholder="区号" clearable></v-input>
          <v-input :size="size" placeholder="电话号码" clearable></v-input>
        </v-input-group>
      </div>
      <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="最小值" style="width: 120px;"></v-input>
            <v-input :size="size" separator placeholder="~" style="width: 40px;"></v-input>
            <v-input :size="size" placeholder="最大值" clearable style="width: 120px;"></v-input>
          </v-input-group>
      </div>
     </div>

      <div>
        <p>与按钮组合</p>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-button :size="size" color="primary" icon="search"></v-button>
          </v-input-group>
        </div>
        <div class="my-3">
            <v-input-group>
              <v-input :size="size" placeholder="Search..." clearable></v-input>
              <v-button :size="size" color="primary" type="outline" icon="search"></v-button>
            </v-input-group>
        </div>
      </div>

      <div>
        <p>与下拉框组合</p>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-select :size="size" v-model="value1" placeholder="请选择城市">
                <v-option label="上海" value="shanghai"></v-option>
                <v-option label="北京" value="bejing"></v-option>
                <v-option label="武汉" value="wuhan"></v-option>
            </v-select>
          </v-input-group>
        </div>
        <div class="my-3">
            <v-input-group>
              <v-select :size="size" v-model="value2" placeholder="请选择城市">
                <v-option label="上海" value="shanghai"></v-option>
                <v-option label="北京" value="bejing"></v-option>
                <v-option label="武汉" value="wuhan"></v-option>
              </v-select>
               <v-input :size="size" placeholder="Search..." clearable></v-input>
            </v-input-group>
        </div>
      </div>

      <div>
        <p>与日期输入框框组合</p>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-date-picker v-model="date1" :size="size" placeholder="选择日期"></v-date-picker>
          </v-input-group>
        </div>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-month-picker v-model="date2" :size="size" placeholder="选择月份"></v-month-picker>
          </v-input-group>
        </div>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-year-picker v-model="date3" :size="size" placeholder="选择年份"></v-year-picker>
          </v-input-group>
        </div>
        <div class="my-3">
          <v-input-group>
            <v-input :size="size" placeholder="Search..." clearable></v-input>
            <v-week-picker v-model="date4" :size="size" placeholder="选择周数"></v-week-picker>
          </v-input-group>
        </div>
        <div class="my-3">
            <v-input-group>
               <v-input :size="size" placeholder="Search..." clearable></v-input>
               <v-range-picker v-model="range" :size="size" start-placeholder="开始日期" end-placeholder="结束日期"></v-range-picker>
            </v-input-group>
        </div>
      </div>

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
  size: string = 'md'

  value1: string = ''

  value2: string = ''

  date1: string = ''

  date2: string = ''

  date3: string = ''

  date4: string = ''

  range: string[] = ['', '']
}
</script>
