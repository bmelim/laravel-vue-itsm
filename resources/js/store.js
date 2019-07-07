import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

var localState = {
  status: '',
  token: {},
  isLoggedIn: false,
};

if (localStorage.getItem("store") != null) {
  localState = JSON.parse(localStorage.getItem("store"));
}

export default {
  state: localState,
  mutations: mutations,
  actions: actions,
  getters: getters
};
