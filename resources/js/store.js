import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './store/modules/auth';

Vue.use(Vuex);

export default {
  state: {},
  modules: {
    Auth
  }
};
