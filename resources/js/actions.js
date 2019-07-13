export default {
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
            commit('auth_error', err);
            reject(err);
          });
        });
    },
    register({commit}, user){
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
            console.error(err);
            commit('auth_error', err);
            // localStorage.removeItem('token');
            reject(err);
          });
        });
      },
      logout({commit}){
        return new Promise((resolve, reject) => {
          // delete axios.defaults.headers.common['Authorization'];
          axios({url: 'auth/logout', method: 'POST' })
          .then(resp => {
            commit('logout');
            localStorage.clear();
          })
          .catch(err => {
            console.error(err);
            commit('auth_error', err);
            reject(err);
          });
          resolve();
        });
      }
  };