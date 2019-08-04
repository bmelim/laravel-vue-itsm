import mutations from './mutations';
import actions from './actions';
import getters from './getters';

var localState = {
    authStatus: '',
    authToken: {},
    authIsLoggedIn: false,
    authError: null
};

if (localStorage.getItem("store") != null) {
    localState = JSON.parse(localStorage.getItem("store")).Auth;
}

export default {
    state: localState,
    mutations: mutations,
    actions: actions,
    getters: getters
};