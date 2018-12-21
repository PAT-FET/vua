<template>
<div>
  <div class="my-3">
    <div class="my-3">
      <v-radio-group v-model="labelPosition">
        <v-radio-button label="top">top</v-radio-button>
        <v-radio-button label="left">left</v-radio-button>
        <v-radio-button label="right">right</v-radio-button>
      </v-radio-group>

      <v-radio-group v-model="layout" class="mx-2">
        <v-radio-button label="vertical">vertical</v-radio-button>
        <v-radio-button label="horizontal">horizontal</v-radio-button>
      </v-radio-group>
    </div>

    <v-form :model="form" :rules="rules" label-width="80px" :labelPosition="labelPosition" :layout="layout" ref="form">
      <v-form-item label="用户名" prop="username" :show-message="false">
        <v-popover placement="right">
          <v-input slot="reference" v-model="form.username" placeholder="用户名"></v-input>
          <div>
              <span class="text-info">用户名由数字、字母、下划线组成</span>
          </div>
        </v-popover>
      </v-form-item>
      <v-form-item label="密码" prop="password" validate-status="warning" message="建议密码强度超过6位数">
        <v-input v-model="form.password" type="password" placeholder="密码"></v-input>
      </v-form-item>
      <v-form-item label="性别" prop="sex">
        <v-radio-group v-model="form.sex">
          <v-radio label="M">男</v-radio>
          <v-radio label="F">女</v-radio>
        </v-radio-group>
      </v-form-item>
       <v-form-item label="技能" prop="skill">
        <v-checkbox-group v-model="form.skill">
          <v-checkbox label="Java">Java</v-checkbox>
          <v-checkbox label="Js">Js</v-checkbox>
          <v-checkbox lable="Python">Python</v-checkbox>
        </v-checkbox-group>
      </v-form-item>
      <v-form-item label="城市" prop="city">
        <v-select v-model="form.city" placeholder="选择城市" clearable>
          <v-option label="上海" value="shanghai"></v-option>
          <v-option label="北京" value="beijing"></v-option>
          <v-option label="武汉" value="武汉"></v-option>
        </v-select>
      </v-form-item>
      <v-form-item label="生日" prop="birthday">
         <v-date-picker v-model="form.birthday" placeholder="生日" clearable></v-date-picker>
      </v-form-item>
       <v-form-item label="电话" prop="tel">
         <v-input-group>
           <v-select v-model="form.tel[0]" style="width: 80px;" placeholder="区号">
              <v-option label="0817" value="0817"></v-option>
              <v-option label="021" value="021"></v-option>
            </v-select>
           <v-input v-model="form.tel[1]" placeholder="电话"></v-input>
         </v-input-group>
      </v-form-item>

      <div class="pl-5">
        <v-button class="mr-2" @click="reset">重置</v-button>
        <v-button color="primary" @click="submit">提交</v-button>
      </div>
    </v-form>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm } from 'src'

/**
 * @title 校验信息
 * @desc 可以自定义校验信息或禁用校验信息。
 */
@Component({
  components: {
  },
  })
export default class ValidExample extends Vue {
  form = {
    username: 'Alison',
    password: '',
    sex: 'M',
    skill: ['Js'],
    city: 'shanghai',
    birthday: '1992/08/29',
    tel: ['', '']
  }

  rules = {
    username: [
      {validator: 'required', message: '用户名必填', trigger: 'blur'}
    ],
    password: [
      {validator: 'required'},
      {validator: 'length', min: 6, max: 8},
    ],
    skill: [
      {validator: 'required'},
      {validator: 'length', min: 1},
    ],
    city: [
       {validator: 'required'},
    ],
    birthday: [
       {validator: 'required'},
    ],
    tel: [
       {validator: (rule: any, value: any) => {
         return new Promise((resolve, reject) => {
           setTimeout(() => {
             if (value && value[0] && value[1]) {
               return resolve()
             }
             return reject(new Error('区号、电话必填'))
           }, 2000)
         })
       }},
    ]
  }

  labelPosition: string = 'right'

  layout: string = 'vertical'

  submit () {
    this.$refs.form.validate().then(({ valid, errors }) => {
      if (valid) {
        this.$vua.$message.success('验证成功')
      } else {
        this.$vua.$message.error('验证失败')
        console.log('errors: ', errors)
      }
    })
  }

  reset () {
    this.$refs.form.resetFields()
  }

  $refs!: {
    form: VForm
  }
}
</script>
