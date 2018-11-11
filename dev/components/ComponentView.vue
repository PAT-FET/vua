<template>
<div :class="[$style.box]">
   <div :class="[$style.content]">
      <anchored-heading :level="1" v-if="title">{{title}}</anchored-heading>

      <slot></slot>

      <anchored-heading :level="2" v-if="examples">示例</anchored-heading>
      <template v-if="examples">
        <component-example v-for="(example, i) in examples" v-bind="example" :key="i"></component-example>
      </template>
      <anchored-heading :level="2" v-if="api">API</anchored-heading>
      <api-table v-bind="api" v-if="api"></api-table>
   </div>
   <div :class="[$style.sticker]">
      <component-catalog :anchors="anchors"></component-catalog>
   </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator'
import AnchoredHeading from './AnchoredHeading.vue'

@Component({
  components: {},
  })
export default class ComponentView extends Vue {
  @Prop(String) title!: string

  @Prop(Array) examples!: any[]

  @Prop(Object) api: any

  anchors: AnchoredHeading[] = []

  @Provide() addAnchor (anchor: AnchoredHeading) {
    this.anchors.push(anchor)
  }
}
</script>

<style lang="scss" module>
   .box{
      display: flex;
      justify-content: space-between;
   }

   .sticker{
      width: 200px;
      padding-left: 20px;
      flex-shrink: 0;
   }

   .content{
      flex-grow: 1;
      flex-shrink: 1;
   }
</style>
