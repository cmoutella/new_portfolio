import Vue from 'vue';
import Router from 'vue-router';

// Views
import Home from './views/Home/index.vue';
import Portfolio from './views/Portfolio/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  ],
});
