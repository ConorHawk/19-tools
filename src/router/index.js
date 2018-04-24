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

import Ex04 from '@/components/exercises/ex04/ex-04'
import Ex04Pg01 from '@/components/exercises/ex04/views/ex-04-01'
import Ex04Pg02 from '@/components/exercises/ex04/views/ex-04-02'
import Ex04Pg03 from '@/components/exercises/ex04/views/ex-04-03'
import Ex04Pg04 from '@/components/exercises/ex04/views/ex-04-04'
import Ex04Pg05 from '@/components/exercises/ex04/views/ex-04-05'
import Ex04Pg06 from '@/components/exercises/ex04/views/ex-04-06'
import Ex04Pg07 from '@/components/exercises/ex04/views/ex-04-07'
import Ex04Pg08 from '@/components/exercises/ex04/views/ex-04-08'

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
    }, {
      path: '/ex-04',
      name: 'Exercise_04',
      component: Ex04,
      redirect: {
        name: 'ex-04-01'
      },
      children: [
        {
          path: '1',
          name: 'ex-04-01',
          component: Ex04Pg01,
          meta: {
            pageTitle: 'Select stakeholder'
          }
        }, {
          path: '2',
          name: 'ex-04-02',
          component: Ex04Pg02,
          meta: {
            pageTitle: 'A'
          }
        }, {
          path: '3',
          name: 'ex-04-03',
          component: Ex04Pg03,
          meta: {
            pageTitle: 'N'
          }
        }, {
          path: '4',
          name: 'ex-04-04',
          component: Ex04Pg04,
          meta: {
            pageTitle: 'Channel'
          }
        }, {
          path: '5',
          name: 'ex-04-05',
          component: Ex04Pg05,
          meta: {
            pageTitle: 'Omit'
          }
        }, {
          path: '6',
          name: 'ex-04-06',
          component: Ex04Pg06,
          meta: {
            pageTitle: 'Revenue'
          }
        }, {
          path: '7',
          name: 'ex-04-07',
          component: Ex04Pg07,
          meta: {
            pageTitle: 'Employee ANCHOR'
          }
        }, {
          path: '8',
          name: 'ex-04-08',
          component: Ex04Pg08,
          meta: {
            pageTitle: 'Results'
          }
        }
      ]
    }
  ]
})
