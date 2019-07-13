export default {
    auth_request(state) {
        state.status = 'loading';
    },
    auth_success(state, token) {
        state.status = 'success';
        state.isLoggedIn = true;
        state.token = token;
    },
    auth_error(state, err) {
        state.status = 'error';
        state.isLoggedIn = false;
        state.authError = err;
    },
    logout(state) {
        state.status = '';
        state.token = {};
        state.isLoggedIn = false;
    },
};