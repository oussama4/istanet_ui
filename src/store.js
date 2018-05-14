import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    backendURL: 'http://127.0.0.1:8000/' // !!! development only, change in production
  },
  getters: {
    user (state) {
      return state.user
    },
    backendURL (state) {
      return state.backendURL
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {

  }
})
