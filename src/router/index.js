import Vue from 'vue'
import Router from 'vue-router'
/* import Hello from '@/components/Hello' */
/* import Bar from '@/components/Bar'
import test1 from '@/components/test1'
import BarChild from '@/components/BarChild' */
import afficheAndNewList from '@/components/afficheAndNewList'
import afficheDetail from '@/components/afficheDetail'
import newTasks from '@/components/newTasks'
import Login from '@/components/login'
/* import Public from '@/components/public' */
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/afficheAndNewList',
      name: 'afficheAndNewList',
      component: afficheAndNewList
    }, {
      path: '/afficheDetail',
      name: 'afficheDetail',
      component: afficheDetail
    }, {
      path: '/newTasks',
      name: 'newTasks',
      component: newTasks
    }
  ]
})

