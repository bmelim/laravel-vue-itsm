import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Login from './components/Login.vue';
import Secure from './components/Secure.vue';
import Register from './components/Register.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
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
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var isLoggedIn = store.modules.Auth.getters.authIsLoggedIn;
    console.log('isLoggedIn: ' +isLoggedIn);
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
