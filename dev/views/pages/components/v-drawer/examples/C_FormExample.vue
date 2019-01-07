<template>
<div>
  <div class="m-3">
    <v-radio-group v-model="placement">
      <v-radio-button label="top">Top</v-radio-button>
      <v-radio-button label="bottom">Bottom</v-radio-button>
      <v-radio-button label="left">left</v-radio-button>
      <v-radio-button label="right">Right</v-radio-button>
    </v-radio-group>
  </div>
  <div class="m-3">
     <v-drawer :visible.sync="visible" title="Basic Drawer" :placement="placement" width="40rem" height="40rem">
       <v-form :model="form" label-width="60px" labelPosition="left">
        <v-row :gutter="16">
          <v-col :span="12">
            <v-form-item label="用户名" prop="username">
              <v-input v-model="form.username" placeholder="用户名" style="width: 100%;"></v-input>
            </v-form-item>
          </v-col>
          <v-col :span="12">
            <v-form-item label="密码" prop="password">
              <v-input v-model="form.password" type="password" placeholder="密码" style="width: 100%;"></v-input>
            </v-form-item>
          </v-col>

          <v-col :span="12">
            <v-form-item label="性别" prop="sex">
              <v-radio-group v-model="form.sex">
                <v-radio label="M">男</v-radio>
                <v-radio label="F">女</v-radio>
              </v-radio-group>
            </v-form-item>
          </v-col>
          <v-col :span="12">
            <v-form-item label="技能" prop="skill">
              <v-checkbox-group v-model="form.skill">
                <v-checkbox label="Java">Java</v-checkbox>
                <v-checkbox label="Js">Js</v-checkbox>
                <v-checkbox lable="Python">Python</v-checkbox>
              </v-checkbox-group>
            </v-form-item>
          </v-col>

          <v-col :span="12">
              <v-form-item label="城市" prop="city">
                <v-select v-model="form.city" placeholder="选择城市" clearable>
                  <v-option label="上海" value="shanghai"></v-option>
                  <v-option label="北京" value="beijing"></v-option>
                  <v-option label="武汉" value="武汉"></v-option>
                </v-select>
              </v-form-item>
            </v-col>
            <v-col :span="12">
              <v-form-item label="生日" prop="birthday">
                <v-date-picker v-model="form.birthday" placeholder="生日" clearable style="width: 100%;"></v-date-picker>
              </v-form-item>
            </v-col>

          <v-col :span="24">
            <v-form-item label="电话" prop="tel">
              <v-input-group style="width: 100%;">
                <v-select v-model="form.tel[0]" style="width: 80px;" placeholder="区号">
                    <v-option label="0817" value="0817"></v-option>
                    <v-option label="021" value="021"></v-option>
                  </v-select>
                <v-input v-model="form.tel[1]" placeholder="电话"></v-input>
              </v-input-group>
            </v-form-item>
          </v-col>
        </v-row>
        <div class="pl-5">
          <v-button class="mr-2">重置</v-button>
          <v-button color="primary">提交</v-button>
        </div>
      </v-form>
     </v-drawer>
     <v-button color="primary" @click="open">打开</v-button>
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title 抽屉表单
 * @desc 在抽屉中使用表单。
 */
@Component({
  components: {
  },
  })
export default class FormExample extends Vue {
  visible: boolean = false

  placement: string = 'right'

  form = {
    username: 'Alison',
    password: '',
    sex: 'M',
    skill: ['Js'],
    city: 'shanghai',
    birthday: '1992/08/29',
    tel: ['', '']
  }

  open () {
    this.visible = true
  }
}
</script>
