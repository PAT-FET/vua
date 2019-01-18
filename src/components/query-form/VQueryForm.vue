<template>
<div :class="[b()]">
  <div :class="[e('header')]"></div>
  <div :class="[e('body')]">
    <v-form>
      <slot></slot>
    </v-form>
  </div>
  <div :class="[e('footer')]"></div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable, Colorable } from '../../mixins'
import { QueryFormOptions } from './type'

@Component({
  components: {
  },
  name: 'v-query-form'
  })
export default class VQueryForm extends mixins(Themeable, Bemable, Colorable) {
  @Prop(Array) options!: QueryFormOptions

  activeSection: string | number = ''

  @Provide () submit () {

  }

  @Provide () reset () {

  }

  @Provide () cancel () {

  }
}
</script>

<style src="./style/v-query-form.scss" lang="scss"></style>
