import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

import Ex01 from '@/components/exercises/ex01/ex-01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }, {
      path: '/ex-01',
      name: 'Exercise_01',
      component: Ex01
    }
  ]
})
