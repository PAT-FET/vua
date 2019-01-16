<template>
<div>
  <div class="my-3">
    <v-form ref="form" style="width: 320px;">
      <v-form-item label="活动名称" prop="name">
        <v-input v-model="form.name" placeholder="请输入" clearable class="w-block"></v-input>
      </v-form-item>

      <v-form-item label="活动区域">
        <v-select v-model="form.area" clearable class="w-block">
          <v-option label="区域一" value="a1"></v-option>
          <v-option label="区域二" value="a2"></v-option>
        </v-select>
      </v-form-item>

      <v-form-item label="活动时间">
        <v-date-picker v-model="form.datetime" clearable show-time class="w-block"></v-date-picker>
      </v-form-item>

       <v-form-item label="即时配送">
        <v-switch v-model="form.dispatch"></v-switch>
      </v-form-item>

       <v-form-item label="活动性质">
        <v-checkbox-group v-model="form.type">
          <v-row :gutter="16">
            <v-col :span="12">
              <v-checkbox label="online">线上活动</v-checkbox>
            </v-col>
            <v-col :span="12">
              <v-checkbox label="offline">线下活动</v-checkbox>
            </v-col>
            <v-col :span="12">
              <v-checkbox label="brand">品牌曝光</v-checkbox>
            </v-col>
            <v-col :span="12">
              <v-checkbox label="display">产品展览</v-checkbox>
            </v-col>
          </v-row>
        </v-checkbox-group>
      </v-form-item>

      <v-form-item label="特殊资源">
        <v-radio-group v-model="form.resource">
          <v-row :gutter="16">
            <v-col :span="12">
              <v-radio label="phone">手机</v-radio>
            </v-col>
            <v-col :span="12">
              <v-radio label="computer">电脑</v-radio>
            </v-col>
            <v-col :span="12">
              <v-radio label="tv">电视</v-radio>
            </v-col>
            <v-col :span="12">
              <v-radio label="audio">音响</v-radio>
            </v-col>
          </v-row>
        </v-radio-group>
      </v-form-item>

      <v-form-item label="活动形式">
        <v-textarea v-model="form.desc"></v-textarea>
      </v-form-item>

      <div class="pl-5">
        <v-button class="mr-2" @click="reset">重置</v-button>
        <v-button type="primary" @click="submit">提交</v-button>
      </div>
    </v-form>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { VForm } from 'src'

/**
 * @title   基本示例
 * @desc 基本示例。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  form = {
    name: '',
    area: '',
    datetime: '',
    resource: '',
    dispatch: false,
    type: [],
    desc: ''
  }

  submit () {
    this.$refs.form.validate().then(({ valid, errors }) => {
      if (valid) {
        console.log(this.form)
      } else {
        // this.$vua.$message.error('验证失败')
        // console.log('errors: ', errors)
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
