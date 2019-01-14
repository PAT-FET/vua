<template>
  <div class="v-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Provide } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
// import { ButtonType, ButtonSize, ButtonShape } from './type'
import { VuaTheme } from '../../vua'
import { debounce } from '../../utils'
// import VBreadcrumbs from './mixins/VBreadcrumb'
// import { VBreadcrumbType } from './type'

@Component({
  components: {
  },
  name: 'v-breadcrumb' // it's required for production version
  })
export default class VBreadcrumb extends mixins(Themeable, Bemable) {
    @Prop({type: String, default: '/'}) separator!: string

    @Prop() separatorClass !: string

    @Provide() getSeparator (): string {
      return this.separator
    }
    @Provide() getSeparatorClass (): string {
      return this.separatorClass
    }
    mounted () {
      const items = this.$el.querySelectorAll('.v-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    }
}
</script>

<style src="./style/v-breadcrumb.scss" lang="scss"></style>
