import { Component, Vue, Watch } from 'vue-property-decorator'
import { VuaTheme } from '../vua'
import { getThemeDark, getDefaultColor, setCssColor, getRootElement, getThemeLight } from '../utils'

@Component
export default class Theme extends Vue {
    dark: boolean = false

    theme: VuaTheme = getDefaultColor()

    @Watch('dark') darkChange (dark: boolean) {
      this.setCssVar()
    }

    @Watch('theme', {deep: true}) themeChange (dark: boolean) {
      this.setCssVar()
    }

    setCssVar () {
      const $root = getRootElement()
      if (!$root) return
      const theme = this.dark ? getThemeDark() : getThemeLight()
      Object.entries(theme).forEach(([key, value]) => {
        $root.style.setProperty(key, value)
      })

      const color = this.theme
      Object.entries(color).forEach(([key, value]) => {
        setCssColor(key, value, $root)
      })
    }

    created () {
      this.setCssVar()
    }
}
