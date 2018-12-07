import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './utils/page-loader'
import store from './store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  store.loading = true
  setTimeout(() => [
    next()
  ], 1000)
})

router.afterEach((to, from) => {
  store.loading = false
})

export default router
