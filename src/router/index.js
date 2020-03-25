import Vue from 'vue';
import Router from 'vue-router';

// Pages Imports
import Home from '@/components/Home/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // default path # HOME
      name: 'Home',
      component: Home,
    },
    {
      path: '/pt',
      name: 'Home - PortugueseVersion',
      component: Home,
    },
    // {
    //   path: '/en',
    //   name: 'Home - EnglishVersion',
    //   component: HomeEnglish,
    // },
  ],
});
