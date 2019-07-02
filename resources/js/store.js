import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
    state: {
        status: '',
        token: {},
        isLoggedIn: false
      },
      mutations: {
        auth_request(state){
            state.status = 'loading';
          },
          auth_success(state, token){
            state.status = 'success';
            state.isLoggedIn = true;
            state.token = token;
          },
          auth_error(state){
            state.status = 'error';
          },
          logout(state){
            state.status = '';
            state.token = {};
            state.isLoggedIn = false;
          },
      },
      actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
              commit('auth_request');
              axios({url: 'auth/login', data: user, method: 'POST' })
              .then(resp => {
                const token = resp.data.token;
                commit('auth_success', token);
                resolve(resp);
              })
              .catch(err => {
                console.error(err);
                commit('auth_error');
                reject(err);
              });
            });
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
              commit('auth_request');
              axios({url: '/auth/register', data: user, method: 'POST' })
              .then(resp => {
                // const user_id = resp.user_id;
                // localStorage.setItem('token', token)
                // axios.defaults.headers.common['Authorization'] = token;
                const token = resp.data.token;
                commit('auth_success', token);
                resolve(resp);
              })
              .catch(err => {
                console.error(err);
                commit('auth_error', err);
                // localStorage.removeItem('token');
                reject(err);
              })
            })
          },
          logout({commit}){
            return new Promise((resolve, reject) => {
              commit('logout');
              // localStorage.removeItem('token');
              // delete axios.defaults.headers.common['Authorization'];
              resolve();
            });
          }
      },
      getters : {
        isLoggedIn: state => state.isLoggedIn,
        authStatus: state => state.status,
      }
};
