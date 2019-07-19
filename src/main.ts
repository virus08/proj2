import Vue from 'vue';

import Cookies from 'js-cookie';

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui';
import './styles/element-variables.scss';

import '@/styles/index.scss' // global css

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';


// import './icons'; // icon

import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';




Vue.config.productionTip = false;

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
