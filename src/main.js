// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import {router} from './router'
import NavBar from '@/components/templates/NavBar'
import Login from '@/components/Login'
import mijnautos from '@/components/mijnautos'
import axios from 'axios'
import VueAxios from 'vue-axios'
import profile from '@/components/Profile'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'));

Vue.component('NavBar', NavBar);
Vue.component('login', Login);
Vue.component('mijnautos', mijnautos);
Vue.component('profile', profile);

new Vue({
  el: '#app',
  router,
  components: {App},
  i18n,
  template: '<App/>'
}).$mount('#app')
