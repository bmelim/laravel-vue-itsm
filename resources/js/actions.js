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
          localStorage.clear();
          // delete axios.defaults.headers.common['Authorization'];
          resolve();
        });
      }
  };