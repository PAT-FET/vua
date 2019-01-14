<template>
  <span class="v-breadcrumb__item">
    <span
      :class="['v-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      >
      <slot></slot>
    </span>
    <v-icon v-if="separatorClass" class="v-breadcrumb__separator" :type="separatorClass" :class="separatorClass"></v-icon>
    <!-- <i v-if="separatorClass" class="v-breadcrumb__separator anticon" :class="separatorClass"></i> -->
    <span v-else class="v-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
@Component({
  components: {
  },
  name: 'v-breadcrumb-item' // it's required for production version
  })
export default class VBreadcrumbItem extends mixins(Bemable, Themeable) {
    @Prop() replace !: Boolean

    @Prop() to !: any

    @Inject() getSeparator!: any
    @Inject() getSeparatorClass!: any

    get separator (): string {
      return this.getSeparator()
    }
    get separatorClass (): string {
      return this.getSeparatorClass()
    }
    mounted () {
      // this.separator = this.VBreadcrumb.separator;
      // this.separatorClass = this.VBreadcrumb.separatorClass;
      const link = this.$refs.link
      // link.setAttribute ('role', 'link');
      link.addEventListener('click', () => {
        const { to, $router } = this
        if (!to || !$router) return
        this.replace ? $router.replace(to) : $router.push(to)
      })
    }
}
</script>

<style src="./style/v-breadcrumb.scss" lang="scss"></style>
