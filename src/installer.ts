import { VueConstructor, PluginFunction } from 'vue'
import { VuaOptions } from './vua'
import Breakpoint from './mixins/Breakpoint'
import { getDefaultColor } from './utils'
import Theme from './mixins/Theme'
import genLang from './utils/locale'

const installer: PluginFunction<VuaOptions> = function (Vue: VueConstructor, args?: VuaOptions): void {
  // dark
  let dark = !!(args && args.dark)
  // lang
  let lang = genLang(args && args.lang)
  // theme
  let theme = getDefaultColor()
  if (args && args.theme) {
    Object.assign(theme, args.theme)
  }
  // $vua
  Vue.prototype.$vua = new Vue({
    mixins: [Breakpoint, Theme],
    data: {
      dark: dark,
      theme: theme,
      lang: lang
    }
  })

  Object.assign(Vue.prototype.$vua, { dark, theme, lang })

  // component
  if (args && args.components) {
    Object.entries(args.components).forEach(([key, component]) => {
      Vue.component(key, component as VueConstructor)
    })
  }

  // TODO derective
  if (args && args.directives) {
    Object.entries(args.directives).forEach(([key, directive]) => {
      Vue.directive(key, directive)
    })
  }

  // TODO service
  if (args && args.services) {
    Object.assign(Vue.prototype, args.services)
  }
}

export default installer
