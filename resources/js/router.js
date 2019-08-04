import Vue from 'vue';
import VueRouter from 'vue-router';
import authRoutes from './components/auth/routes';
import Secure from './components/Secure.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
Vue.use(VueRouter);
var routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

routes = routes.concat(authRoutes);

var router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var isLoggedIn = false;
    if (localStorage.getItem("store") != null) {
      var localState = JSON.parse(localStorage.getItem("store")).Auth;
      isLoggedIn = localState.authIsLoggedIn;
    }
    console.log("Router beforeEach: isLoggedIn: " + isLoggedIn);
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
