const state = {

  title: 'Welcome',

};

const getters = {

  pageTitle: state => {
    return state.title;
  },

};

const actions = {

  setPageTitle({ commit }, title) {
    commit('setTitle', title);
  }

};

const mutations = {

  setTitle(state, title) {
    state.title = title + ' | Laravue QA';

    document.title = state.title;
  },


};

export default {
  state, getters, actions, mutations,
}