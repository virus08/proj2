import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'stock',
          name: 'Stock',
          component: () => import('./views/stock/stock.vue'),
        },
        {
          path: 'spare',
          name: 'Spare Part',
          component: () => import('./views/About.vue'),
        },
        {
          path: 'oil',
          name: 'Oil',
          component: () => import('./views/About.vue'),
        },
        {
          path: '*',
          redirect: '/404'
        },
      ]
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/404',
      component: () => import('./views/error.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
