<template>
<div>
  <div class="my-3">
    <v-form :model="form" ref="form">
      <v-form-item label="用户名" prop="username" required
        :rules="[{validator: 'required', message: '用户名必填', trigger: 'blur'}]">
        <v-input v-model="form.username" placeholder="用户名"></v-input>
      </v-form-item>
      <v-form-item :label="'域名' + i" :prop="'domains.' + i +'.value'" v-for="(domain, i) in form.domains"
      :key="i" required :rules="[{validator: 'required', message: '域名必填', trigger: 'blur'}]">
        <v-input v-model="domain.value" placeholder="域名"></v-input>
        <v-button class="ml-2" @click="del(i)">删除</v-button>
      </v-form-item>
      <div class="pl-5">
        <v-button class="mr-2" @click="add">新增域名</v-button>
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
 * @title   动态增减
 * @desc 动态增减。
 */
@Component({
  components: {
  },
  })
export default class DynamicExample extends Vue {
  form = {
    username: 'Alison',
    domains: [
      {
        value: ''
      }
    ]
  }

  add () {
    this.form.domains.push({ value: '' })
  }

  del (i: number) {
    this.form.domains.splice(i, 1)
  }

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
