export default {
    auth_request(state) {
        state.authStatus = 'loading';
        state.authIsLoggedIn = false;
        state.authError = null;
        state.authToken = {};
    },
    auth_success(state, token) {
        state.authStatus = 'success';
        state.authIsLoggedIn = true;
        state.authToken = token;
        state.authError = null;
    },
    auth_error(state, err) {
        state.authStatus = 'error';
        state.authIsLoggedIn = false;
        state.authError = err;
    },
    auth_logout(state) {
        state.authStatus = '';
        state.authToken = {};
        state.authIsLoggedIn = false;
        state.authError = null;
    },
};