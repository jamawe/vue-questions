const state = {

  theme: {},

};

const getters = {

  theme: (state) => {
    return state.theme;
  },

};

const actions = {

  initTheme({ commit }) {
    // If localStorage.theme is already set ('dark', 'light'), assign it to cachedTheme else false
    const cachedTheme = localStorage.theme ? localStorage.theme : false;

    // Set userPrefersDark to true or false depending on prefers-color-scheme (for first time users)
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (cachedTheme) {
      commit('setTheme', cachedTheme);
    } else if (userPrefersDark) {
      commit('setTheme', 'dark');
    } else {
      commit('setTheme', 'light');
    }
  },

  toggleTheme({ commit }) {

    switch (localStorage.theme) {
      case 'light':
        commit('setTheme', 'dark');
        break;
      default:
        commit('setTheme', 'light');
    }
  },

};

const mutations = {

  setTheme(state, theme) {
    state.theme = theme;
    localStorage.theme = theme;
  },


};

export default {
  state, getters, actions, mutations,
}