<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { VBreadcrumb } from './'
import { CreateElement, VNode } from 'vue'

@Component({
  components: {
  },
  name: 'v-breadcrumb-item'
  })
export default class VBreadcrumbItem extends mixins(Themeable, Bemable) {
  @Prop() to!: string | object

  @Inject() getBreadcrumb!: () => VBreadcrumb

  get linkCls () {
    return this.to ? 'has-link' : ''
  }

  render (h: CreateElement): VNode {
    let data = {
      'class': [this.b()]
    }
    return h('div', data, [this.renderSep(h), this.renderText(h)])
  }

  renderSep (h: CreateElement): VNode {
    let data = {
      'class': [this.e('separator')]
    }
    return h('span', data, [this.getBreadcrumb().$slots.separator || this.getBreadcrumb().separator])
  }

  renderText (h: CreateElement): VNode {
    let data = {
      'class': [this.e('text'), this.linkCls],
      on: {
        click: this.link
      }
    }
    return h('span', data, [this.$slots.default])
  }

  link () {
    if (!this.to) return
    let router = (this as any).$router
    if (router) {
      router.push(this.to)
    } else {
      if (typeof this.to === 'string') { window.location.assign(this.to) }
    }
  }
}
</script>
<style src="./style/v-breadcrumb-item.scss" lang="scss"></style>
