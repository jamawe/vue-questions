import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/auth';
import Title from './modules/title';
import Questions from './modules/questions';
import Answers from './modules/answers';
import Theme from './modules/theme';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  
  modules: {
    Auth,
    Title,
    Questions,
    Answers,
    Theme,
  }
});
