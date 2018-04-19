import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

import Ex01 from '@/components/exercises/ex01/ex-01'
import Ex01Pg01 from '@/components/exercises/ex01/views/ex-01-01'
import Ex01Pg02 from '@/components/exercises/ex01/views/ex-01-02'
import Ex01Pg03 from '@/components/exercises/ex01/views/ex-01-03'
import Ex01Pg04 from '@/components/exercises/ex01/views/ex-01-04'

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
      component: Ex01,
      children: [
        { path: '', component: Ex01Pg01 },
        { path: '02', component: Ex01Pg02 },
        { path: '03', component: Ex01Pg03 },
        { path: '04', component: Ex01Pg04 }
      ]
    }
  ]
})
