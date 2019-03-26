import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import mijnautos from '@/components/mijnautos'
import register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/autos',
      name: 'autos',
      component: mijnautos
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
