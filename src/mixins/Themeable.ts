import { Component, Vue, Prop, Watch, Provide, Inject } from 'vue-property-decorator'
import { getThemeDark, getThemeLight } from '../utils/theme'

@Component
export default class Themeable extends Vue {
    @Prop([Object]) dark!: boolean

    @Watch('isDark') themeChange (dark: boolean) {
      this.handleThemeChange()
    }

    // overwrite under specific circumstance
    getCssVarEles (): HTMLElement[] {
      return [this.$el as HTMLElement]
    }

    // TODO 对于 appendToBody 之类的组件， 需要提供 (Provide/ Inject) 来实现
    @Provide('isDark') provideIsDark () {
      return this.isDark
    }

    @Inject({from: 'isDark', default: () => () => null}) injectIsDark!: () => boolean| null

    get isDark (): boolean | undefined | null{
      if (this.dark === null || this.dark === undefined) return this.injectIsDark()
      return this.dark
    }

    // the actual dark, if not set will take the $vua
    get isActualDark (): boolean {
      if (this.isDark === undefined || this.isDark === null) return this.$vua.dark
      return this.isDark
    }

    get darkCls () {
      return this.isActualDark ? 'is-dark' : ''
    }

    handleThemeChange (first: boolean = false) {
      const $eles = this.getCssVarEles()
      if (this.isDark === undefined || this.isDark === null) {
        if (first) return
        return setOrUnsetVar(true)
      } else {
        setOrUnsetVar(false, this.isDark)
      }

      function setOrUnsetVar (unset: boolean = false, dark?: boolean) {
        const theme = dark ? getThemeDark() : getThemeLight()
        Object.entries(theme).forEach(([key, value]) => {
          $eles.forEach(ele => {
            if (unset) ele.style.removeProperty(key)
            else ele.style.setProperty(key, value)
          })
        })
      }
    }

    mounted () {
      this.handleThemeChange(true)
    }
}
