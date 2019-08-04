export default {
    authLogin({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request');
          axios({url: 'auth/login', data: user, method: 'POST' })
          .then(resp => {
            commit('auth_success', resp.data);
            resolve(resp);
          })
          .catch(err => {
            commit('auth_error', err);
            reject(err);
          });
        });
    },
    authRegister({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request');
          axios({url: '/auth/register', data: user, method: 'POST' })
          .then(resp => {
            // axios.defaults.headers.common['Authorization'] = token;
            const token = resp.data.token;
            commit('auth_success', token);
            resolve(resp);
          })
          .catch(err => {
            const response = err.response
            commit('auth_error', response.data.errors);
            // localStorage.removeItem('token');
            reject(err);
          });
        });
      },
      authLogout({commit}){
        return new Promise((resolve, reject) => {
          // delete axios.defaults.headers.common['Authorization'];
          axios({url: 'auth/logout', method: 'POST' })
          .then(resp => {
            commit('auth_logout');
            localStorage.clear();
          })
          .catch(err => {
            console.error(err);
            commit('auth_error', err);
            reject(err);
          });
          resolve();
        });
      },
      authReset({commit}){
        commit('auth_reset');
      }
  };