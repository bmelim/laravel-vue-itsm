import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Login from './components/Login.vue';
import Secure from './components/Secure.vue';
import Register from './components/Register.vue';
import About from './components/About.vue';
Vue.use(VueRouter);

var router =  new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'home',
          component: Login
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/secure',
          name: 'secure',
          component: Secure,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/about',
          name: 'about',
          component: About,
          meta: {
            requiresAuth: true
          }
        }
      ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        var isLoggedIn =  store.state.isLoggedIn;
      if (isLoggedIn) {
        next();
        return;
      }
      next('/login');
    } else {
      next();
    }
  });

export default router;
