<template>
<div :class="[b()]">
  <div :class="[e('image')]" :style="[imageStyle]">
    <slot name="image">
      <span class="ft-64 text-primary"><i class="anticon anticon-exclamation-circle-o"></i></span>
    </slot>
  </div>
  <p :class="[e('description')]"><slot>{{description || t('noData')}}</slot></p>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Localeable } from '../../mixins'

@Component({
  components: {
  },
  name: 'v-empty'
  })
export default class VEmpty extends mixins(Themeable, Bemable, Localeable) {
  @Prop(String) description!: string

  @Prop() imageStyle!: any
}
</script>

<style src="./style/v-empty.scss" lang="scss"></style>
