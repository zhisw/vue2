// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import all from './components/all'
import axios from 'axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.1.216:12000'
Vue.prototype.All = all
Vue.prototype.$http = axios
import { Button, Cell, Loadmore, InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Loadmore.name, Loadmore)
Vue.use(InfiniteScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  console.log(VueCookies)
  if (to.path === '/login') {
    next()
  } else {
    console.log(VueCookies.get('userid'))
    if (VueCookies.get('userid')) {
      next()
    } else {
      alert('还没有登录, 请先登录!')
      next('/login')
    }
  }
})
