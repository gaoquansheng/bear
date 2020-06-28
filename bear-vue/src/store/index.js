import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userTel: "",
    userName: ""
  },
  mutations: {
    login(state, payload) {
      state.userTel = payload.userTel;
      state.userName = payload.userName;
    },
    logout(state){
      state.userTel = "";
      state.userName = "";
    }
  },
  actions: {},
  modules: {}
});
