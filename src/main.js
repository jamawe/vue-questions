import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store/index';

import './assets/css/tailwind.css';
import './assets/tailwind.css';
// import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000';

store.dispatch('me')
  .then(() => {

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
    
  });

