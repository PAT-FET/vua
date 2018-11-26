syn<template>
<div>
   <div class="my-3">
      <p>
         <input type="number" step="1000" min="1000" v-model.number="config.duration"> &nbsp;
         <input type="number" step="1" min="1" v-model.number="config.maxCount"> &nbsp;
      </p>
     <v-button @click="info">display</v-button>  &nbsp;
   </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

/**
 * @title  全局配置
 * @desc 提供 config 方法， 用于配置message的最大显示数量、自动关闭时间等。
 */
@Component({
  components: {
  },
  })
export default class GlobalExample extends Vue {
   config: any = {
      duration: 3000,
      maxCount: 2
   }

   info () {
     this.$message.info('this is a normal message')
   }

   @Watch('config', {deep: true}) configChange (config: any) {
     this.$message.config(config)
   }
}
</script>
