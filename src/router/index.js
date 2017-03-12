import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Newqn from '@/components/Newqn'
import List from '@/components/List'
import Fillqn from '@/components/Fillqn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/new-qn',
      name: 'new-qn',
      component: Newqn
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/fillqn',
      name: 'fillqn',
      component: Fillqn
    }
  ]

})
