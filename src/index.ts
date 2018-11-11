import * as components from './components'
import * as directives from './directives'
import { VueConstructor } from 'vue'
import { getVersion } from '@/utils/env'
import { VuaPlugin, VuaOptions } from './vua'
import installer from './installer'

// common style
import './style/index.scss'

const Vua: VuaPlugin = {
  install (Vue: VueConstructor, args?: VuaOptions) {
    installer(Vue, {
      components,
      directives,
      ...args
    })
  },
  version: getVersion()
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vua)
}

export * from './components'

export default Vua
