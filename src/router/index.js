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
import home from '../components/Home'
import tarieven from '../components/Tarieven'
import ChangeTarief from '../components/ChangeTarief'
import Factuur from '../components/Factuur'
import FactuurUser from '../components/FactuurUser'
import Ritten from '../components/Ritten'

import jwtcode from 'jwt-decode'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Login},
    {path: "/home", component: home},
    {path: '/login', component: Login},
    {path: '/mijnautos', component: mijnautos},
    {path: '/register', component: register},
    {path: '/profile', component: profile},
    {path: '/hello', component: hello},
    {path: "/toevoegenauto", component: toevoegenauto},
    {path: '/administration/autos', component: AutosAdministratie},
    {path: "/ChangeAuto", component: ChangeAuto},
    {path: "/toevoegentarief", component: toevoegentarief},
    {path: "/tarieven", component: tarieven},
    {path: "/changeTarief", component: ChangeTarief},
    {path: "/factuur", component: Factuur},
    {path: "/factuur_user", component: FactuurUser},
    {path: "/factuur_user/ritten", component: Ritten},

    // otherwise redirect to home
    {path: '*', redirect: '/home'}
  ]
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/hello'];
  const AdminPages = ['/tarieven', '/ChangeTarief', '/toevoegenauto',"/factuur"];
  const UserPages = ['/mijnautos', '/factuur_user', '/factuur_user/ritten'];

  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  const AdminPage = AdminPages.includes(to.path);

  const UserPage = UserPages.includes(to.path);


  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if(AdminPage){
    const jwt = jwtcode(localStorage.getItem('token'));

    if (!jwt.Roles.toString().includes("ADMINISTRATION")) {
      return next('/home');
    }
  }

  if(UserPage){
    const jwt = jwtcode(localStorage.getItem('token'));

    if (!jwt.Roles.toString().includes("USER")) {
      return next('/home');
    }
  }

  next();
})
