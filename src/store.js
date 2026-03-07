import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: localStorage.getItem('lang') || 'en',
  },
  mutations: {
    toggleLang(state) {
      state.lang = state.lang === 'en' ? 'zh' : 'en';
      localStorage.setItem('lang', state.lang);
    }
  },
  actions: {}
})
