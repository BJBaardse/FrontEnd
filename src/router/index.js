import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import mijnautos from '@/components/mijnautos'
import register from '@/components/Register'
import profile from '../components/Profile'
import hello from '../components/HelloI18n'
import toevoegenauto from '../components/Toevoegenauto'
import AutosAdministratie from '../components/AutosAdministratie'
import ChangeAuto from '../components/ChangeCar'
import toevoegentarief from '../components/ToevoegenTarief'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/mijnautos', component: mijnautos},
    { path: '/register', component: register},
    { path: '/profile', component: profile},
    { path: '/hello', component: hello},
    {path: "/toevoegenauto",component: toevoegenauto},
    { path: '/Administration/autos', component: AutosAdministratie},
    {path: "/ChangeAuto",component: ChangeAuto},
    {path: "/toevoegentarief",component: toevoegentarief},

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/hello'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
