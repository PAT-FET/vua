<template>
<div :class="[b()]">
  <a :class="linkTitleClasses" :href="href" :data-href="href" @click.prevent="goAnchor" :title="title">{{ title }}</a>
  <slot></slot>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model, Provide, Inject } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Bemable, Themeable } from '../../mixins'
import { AnchorThis } from './type'

@Component({
  components: {
  },
  name: 'v-anchor-link'
})
export default class VAnchorLink extends mixins(Themeable, Bemable) {
  @Prop(String) href!: string

  @Prop(String) title!: string

  @Inject() getAnchorCom!:()=>AnchorThis

  currentLink:string = ''

  get linkTitleClasses () {
    // return this.getAnchorCom.currentLink === this.href ? `v-anchor-link_active` : ''
    return ''
  }
  get anchorCom () {
    return this.getAnchorCom()
  }
  goAnchor () {
    this.currentLink = this.href
    this.anchorCom.handleHashChange()
    this.anchorCom.handleScrollTo()
    // this.anchorCom.$emit('on-select', this.href);
    const isRoute = this.$router
    if (isRoute) {
      this.$router.push(this.href)
    } else {
      window.location.href = this.href
    }
  }
  mounted () {
    this.$nextTick(() => {
      this.anchorCom.init()
    })
  }
}
</script>

<style src="./style/v-anchor-link.scss" lang="scss"></style>
