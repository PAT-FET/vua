import * as components from '@/components'
import * as directives from './directives'
import * as services from './services'
import { VueConstructor } from 'vue'
import { getVersion } from './utils'
import { VuaPlugin, VuaOptions } from './vua'
import installer from '@/installer'

// common style
import './style/index.scss'

const Vua: VuaPlugin = {
  install (Vue: VueConstructor, args?: VuaOptions) {
    installer(Vue, {
      components,
      directives,
      services,
      ...args
    })
  },
  version: getVersion()
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vua)
}

export * from './components'
export * from './components/type'
// export * from './directives'
export * from './mixins'

export default Vua
