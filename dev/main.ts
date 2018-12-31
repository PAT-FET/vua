import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vua from '../src/index'
import './components'
import zhHans from '../src/locale/zh-Hans'

import 'highlight.js/styles/darcula.css'

Vue.config.productionTip = false

Vue.use(Vua, {
  lang: {
    locales: { 'zh-Hans': zhHans }
  }
})

new Vue({
  router,
  data: {
    collapse: false
  },
  render: h => h(App)
}).$mount('#app')
