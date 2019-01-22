<template>
<div>
  <div class="m-3">
    <v-query-form :form.sync="form" ref="form">
      <div slot="extra">
        <v-button type="text" @click="onClear">清空</v-button>
      </div>
      <v-pulldown>
        <v-pulldown-pane index="1" title="customer">
         <div class="m-3">
            <v-collapse :bordered="false" v-model="value">
              <v-collapse-item name="1" title="基本信息">
                <v-query-form-item title="年龄" name="age" :tag-fn="ageTagFn">
                  <v-checkbox-group v-model="form.age">
                    <v-checkbox :label="age.value" v-for="age in ages" :key="age.value">{{age.label}}</v-checkbox>
                  </v-checkbox-group>
                </v-query-form-item>
              </v-collapse-item>
              <v-collapse-item name="2" title="业绩信息">
                <v-query-form-item title="性别" name="sex" :tag-fn="sexTagFn">
                  <v-form-item prop="age" label="性别">
                    <v-radio-group v-model="form.sex">
                      <v-radio :label="sex.value" v-for="sex in sexes" :key="sex.value">{{sex.label}}</v-radio>
                    </v-radio-group>
                  </v-form-item>
                </v-query-form-item>
                <v-query-form-item title="姓名" name="name" :tag-fn="nameTagFn">
                  <v-form-item prop="name" label="姓名" :rules="[{validator: 'required', message: '用户名必填'}]">
                    <v-input v-model="form.name"></v-input>
                  </v-form-item>
                </v-query-form-item>
              </v-collapse-item>
            </v-collapse>

            <div class="h-4 bg-2 text-right" style="line-height: 4rem;">
              <v-button @click="onCancel">取消</v-button>
              <v-button class="mx-2" @click="onSubmit">提交</v-button>
            </div>
         </div>
        </v-pulldown-pane>
        <v-pulldown-pane index="2" title="task">
         <div class="m-3">

         </div>
        </v-pulldown-pane>
      </v-pulldown>

    </v-query-form>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  基本
 * @desc 最简单的用法。
 */
@Component({
  components: {
  },
  })
export default class BasicExample extends Vue {
  value = "1"

  form = {
    age: [],
    sex: '',
    name: ''
  }

  ages = [
    {
      label: '5-10周岁',
      value: '5,10'
    },
    {
      label: '11-20周岁',
      value: '11,20'
    },
    {
      label: '21-25周岁',
      value: '21,25'
    }
  ]

  sexes = [
    {
      label: '不限',
      value: ''
    },
    {
      label: '男',
      value: 'M'
    },
    {
      label: '女',
      value: 'F'
    }
  ]

  ageTagFn (param: any) {
    let ret: any[] = []
    let value = this.form.age || []
    value.forEach(v => {
      let target = this.ages.find(w => w.value === v)
      if (target) {
        let text = target.value
        ret.push({
          title: '年龄',
          text: target.value,
          name: 'age',
          removeFn: () => {
            let idx = (this.form.age || []).findIndex(v => v === text)
            if (idx >= 0) this.form.age.splice(idx, 1)
          }
        })
      }
    })
    return ret
  }

  sexTagFn (param: any) {
    let ret: any[] = []
    let value = this.form.sex || ''
    let target = this.sexes.find(v => v.value === value)
    if (target) {
      ret.push({
        title: '性别',
        text: target.label,
        name: 'sex',
        removeFn: () => {
          this.form.sex = ''
        }
      })
    }
    return ret
  }

  nameTagFn (param: any) {
    let ret: any[] = []
    let value = this.form.name || ''
    if (value) {
      ret.push({
        title: '姓名',
        text: value,
        name: 'name',
        removeFn: () => {
          this.form.name = ''
        }
      })
    }
    return ret
  }

  onCancel () {
    (this.$refs.form as any).cancelForm()
  }

  onSubmit (form: any) {
    (this.$refs.form as any).submitForm()
  }

  onClear () {
    (this.$refs.form as any).clearForm()
  }
}
</script>
