// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import NavBar from '@/components/templates/NavBar'
import Login from '@/components/Login'
import mijnautos from '@/components/mijnautos'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.component('NavBar', NavBar);
Vue.component('login', Login);
Vue.component('mijnautos', mijnautos)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
