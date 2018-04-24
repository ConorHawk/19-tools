import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'

import Ex01 from '@/components/exercises/ex01/ex-01'
import Ex01Pg01 from '@/components/exercises/ex01/views/ex-01-01'
import Ex01Pg02 from '@/components/exercises/ex01/views/ex-01-02'
import Ex01Pg03 from '@/components/exercises/ex01/views/ex-01-03'
import Ex01Pg04 from '@/components/exercises/ex01/views/ex-01-04'
import Ex01Pg05 from '@/components/exercises/ex01/views/ex-01-05'

import Ex02 from '@/components/exercises/ex02/ex-02'
import Ex02Pg01 from '@/components/exercises/ex02/views/ex-02-01'

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
      redirect: {
        name: 'ex-01-01'
      },
      children: [
        {
          path: '1',
          name: 'ex-01-01',
          component: Ex01Pg01,
          meta: {
            pageTitle: 'Add stakeholders'
          }
        }, {
          path: '2',
          component: Ex01Pg02,
          meta: {
            pageTitle: 'Select important stakeholders'
          }
        }, {
          path: '3',
          component: Ex01Pg03,
          meta: {
            pageTitle: 'Prioritize stakeholders'
          }
        }, {
          path: '4',
          component: Ex01Pg04,
          meta: {
            pageTitle: 'Add requirements'
          }
        }, {
          path: '5',
          component: Ex01Pg05,
          meta: {
            pageTitle: 'Review'
          }
        }
      ]
    }, {
      path: '/ex-02',
      name: 'Exercise_02',
      component: Ex02,
      redirect: {
        name: 'ex-02-01'
      },
      children: [
        {
          path: '1',
          name: 'ex-02-01',
          component: Ex02Pg01,
          meta: {
            pageTitle: 'Add stakeholders'
          }
        }
      ]
    }
  ]
})
