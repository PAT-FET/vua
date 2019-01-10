import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import { hyphenate } from '@/utils'
import { mixins } from 'vue-class-component'
import { Themeable, Colorable } from '../mixins'

@Component
export default class CssVariable extends mixins(Themeable, Colorable) {
  @Prop() cssVariable!: Record<string, any>

  get localCssVariable (): Record<string, any> | null {
    return null
  }

  get actualCssVariable (): Record<string, any> {
    return this.cssVariable || this.localCssVariable
  }

  setCssVariable (el: HTMLElement, variable?: Record<string, any>) {
    let cssVariable = variable !== undefined ? variable : this.actualCssVariable
    if (!cssVariable) return
    Object.entries(cssVariable).forEach(([key, value]) => {
      let name = resolveName(key)
      if (value === null || value === undefined) {
        el.style.removeProperty(name)
      } else {
        el.style.setProperty(name, this.parseColor(value))
      }
    })

    function resolveName (name: string) {
      return `--${hyphenate(name)}`
    }
  }

  setSelfCssVariable () {
    this.getCssVarEles().filter(v => !!v).forEach(v => {
      this.setCssVariable(v)
    })
  }

  @Watch('actualCssVariable', { deep: true }) cssVariableChange () {
    this.setSelfCssVariable()
  }

  mounted () {
    this.setSelfCssVariable()
  }
}
