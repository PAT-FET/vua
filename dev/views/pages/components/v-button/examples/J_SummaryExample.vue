<template>
<div>
 <div class="my-3">
   <v-radio-group v-model="type" class="ml-3 mb-2">
      <v-radio-button label="solid">Solid</v-radio-button>
      <v-radio-button label="dashed">Dashed</v-radio-button>
      <v-radio-button label="primary">Primary</v-radio-button>
    </v-radio-group>
    <v-radio-group v-model="color" class="ml-3  mb-2">
      <v-radio-button label="">无</v-radio-button>
      <v-radio-button label="primary">Primary</v-radio-button>
      <v-radio-button label="seconday">Secondary</v-radio-button>
      <v-radio-button label="info">Info</v-radio-button>
      <v-radio-button label="warning">Warning</v-radio-button>
      <v-radio-button label="error">Error</v-radio-button>
      <v-radio-button label="purple">Purple</v-radio-button>
    </v-radio-group>
</div>
<div class="my-3">
   <v-radio-group v-model="icon" class="ml-3 mb-2">
      <v-radio-button label="">无</v-radio-button>
      <v-radio-button label="edit">Edit图标</v-radio-button>
      <v-radio-button label="delete">Delete图标</v-radio-button>
    </v-radio-group>
    <v-radio-group v-model="shape" class="ml-3 mb-2">
      <v-radio-button label="">无</v-radio-button>
      <v-radio-button label="round">圆角</v-radio-button>
      <v-radio-button label="circle">圆形</v-radio-button>
    </v-radio-group>
     <v-radio-group v-model="size" class="ml-3 mb-2">
      <v-radio-button label="lg">大</v-radio-button>
      <v-radio-button label="md">中</v-radio-button>
      <v-radio-button label="sm">小</v-radio-button>
    </v-radio-group>
</div>
<div class="my-3">
   <span><v-switch v-model="block"></v-switch> 块级</span>
   <span class="ml-3"><v-switch v-model="ghost"></v-switch> 幽灵模式</span>
   <span class="ml-3"><v-switch v-model="float"></v-switch> 浮动模式</span>
   <span class="ml-3"><v-switch v-model="disabled"></v-switch> 禁用</span>
   <span class="ml-3"><v-switch v-model="loading"></v-switch> 加载</span>
</div>
<div class="my-3">
  <div class="p-3 rounded bg-2">
    <v-button :type="type" :color="color" :block="block" :size="size"
      :disabled="disabled" :shape="shape" :loading="loading"
      :ghost="ghost" :float="float" :icon="icon"><span>按钮</span></v-button>
  </div>
</div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  综合演示
 * @desc 综合演示。
 */
@Component({
  components: {
  },
  })
export default class SummaryExample extends Vue {
  type: string = 'solid'

  color: string = ''

  block: boolean = false

  ghost: boolean = false

  float: boolean = false

  icon: string = ''

  disabled: boolean = false

  shape: string = ''

  loading: boolean = false

  size: string = 'md'
}
</script>
