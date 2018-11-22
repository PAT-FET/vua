import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vua from '@/index'
import './components'

import 'highlight.js/styles/darcula.css'

Vue.config.productionTip = false

Vue.use(Vua)

new Vue({
  router,
  data: {
    collapse: false
  },
  render: h => h(App)
}).$mount('#app')
