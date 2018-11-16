<template>
<div :class="[$style.box]">
   <anchored-heading :level="3">{{titleText}}</anchored-heading>
   <p v-html="descText"></p>
   <div :class="[$style.exampleBox]" ref="body">
      <div :class="[$style.boxHeader]">
        <i class="anticon anticon-bulb" :class="[$style.themeBtn]" @click="toggleTheme"></i> &nbsp;
        <a title="显示源码" @click="showSource=!showSource"> &lt; &gt; </a>
      </div>
      <div :class="[$style.boxBody]">
         <div v-show="showSource">
            <pre><code class="html" ref="source">{{source}}</code></pre>
         </div>
         <component :is="component"></component>
      </div>
   </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Themeable from '@/mixins/Themeable'
import hljs from 'highlight.js/lib'

@Component({
  components: {}
  })
export default class ComponentExample extends mixins(Themeable) {
  @Prop(String)
  title!: string;

  @Prop()
  component!: Vue;

  @Prop(String)
  source!: string;

  @Prop(String)
  desc!: string;

  showSource: boolean = false;

  localDark: boolean| null = null

  get titleText (): string {
    if (this.title) return this.title
    if (!this.source) return ''
    return ((this.source.match(/@title.*/) || [])[0] || '').substr(6)
  }

  get descText (): string {
    if (this.desc) return this.desc
    if (!this.source) return ''
    return ((this.source.match(/@desc.*/) || [])[0] || '').substr(6)
  }

  get isDark (): boolean | null {
    return this.localDark
  }

  toggleTheme () {
    if (this.localDark === null) this.localDark = !this.$vua.dark
    else this.localDark = null
  }

  getCssVarEles (): HTMLElement[] {
    return [this.$refs.body]
  }

  mounted () {
    hljs.highlightBlock(this.$refs.source)
  }

  $refs!: {
    body: HTMLElement,
    source: HTMLElement
  }
}
</script>

<style lang="scss" module>
@import "~@/style/var.scss";

.box {
  margin-bottom: 40px;
}

.exampleBox {
  border: $border-color-base 1px solid;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: $text-color;
}

.boxHeader {
  height: 48px;
  line-height: 48px;
  border-bottom: $border-color-base solid 1px;
  background-color: $bg-color-1;
  text-align: right;
  padding-right: 8px;
}

.boxBody {
  padding: 16px;
  background-color: $bg-color;
}

.themeBtn{
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
}
</style>
