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
      redirect: '/login'
    },
    {
      path: '/app',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/app/main'
        },
        {
          path: 'main',
          name: 'main',
          component: () => import('./views/main/main.vue'),
        },
        {
          path: '*',
          redirect: '/app'
        },
      ]
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('./views/dashboard.vue'),
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: () => import('./views/admin/admin.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/404',
      component: () => import('./views/error/404.vue')
    },
    {
      path: '/401',
      component: () => import('./views/error/401.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
