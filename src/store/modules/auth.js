import axios from 'axios'

export default {
  // namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    },
  },

  actions: {
    // eslint-disable-next-line
    async register({ dispatch }, credentials) {
      console.log('register', credentials);

      await axios.get('/sanctum/csrf-cookie');

      await axios.post('/register', credentials);

      return dispatch('me');
    },
    
    async signIn({ dispatch }, credentials) {
      console.log('signIn', credentials.email, credentials.password);
      // Ask client to set CSRF cookie, further requests to the API include that token
      // console.log('before csrf request', window.document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
      await axios.get('/sanctum/csrf-cookie');
      // console.log('after csrf request', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));


      // console.log('localStorage: ', localStorage);

      // Make request to /login with creds we provide
      await axios.post('/login', credentials);
      // console.log('after login request', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));

      // await axios.post('/login', { username: credentials.email, password: credentials.password });

      return dispatch('me');
    },

    async signOut({ dispatch }) {
      await axios.post('/logout');

      return dispatch('me');
    },

    me({ commit }) {

      // Return authenticated user's details
      return axios.get('/api/user')
        .then(res => {
          console.log('THEN res.data', res.data);
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', res.data);
        })
        .catch(() => {
          commit('SET_AUTHENTICATED', false);
          commit('SET_USER', null);
        });
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    }
  }

}